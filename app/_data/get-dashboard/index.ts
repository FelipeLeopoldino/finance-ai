import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";
import { auth } from "@clerk/nextjs/server";

export const getDashboard = async (month: string) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const where = {
    userId,
    date: {
      gte: new Date(`2024-${month}-01`),
      lte: new Date(`2024-${month}-31`),
    },
  };

  const depositTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const investmentTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const expenseTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const balance = depositTotal - investmentTotal - expenseTotal;
  const transactionTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const typePercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (Number(depositTotal || 0) / Number(transactionTotal)) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investmentTotal || 0) / Number(transactionTotal)) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expenseTotal || 0) / Number(transactionTotal)) * 100,
    ),
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transaction.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount),
    percentageOfTotal: Math.round(
      (Number(category._sum.amount) / Number(expenseTotal)) * 100,
    ),
  }));

  const lastTransactions = await db.transaction.findMany({
    where,
    orderBy: { date: "desc" },
    take: 15,
  });

  return {
    balance,
    depositTotal,
    investmentTotal,
    expenseTotal,
    typePercentage,
    totalExpensePerCategory,
    lastTransactions,
  };
};
