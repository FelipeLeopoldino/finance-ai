"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { TransactionType } from "@prisma/client";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Pie, PieChart } from "recharts";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#ffffff",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55b02e",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#e93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartsProps {
  typePercentage: TransactionPercentagePerType;
  depositTotal: number;
  investmentTotal: number;
  expenseTotal: number;
}

const TransactionsPieCharts = ({
  depositTotal,
  investmentTotal,
  expenseTotal,
  typePercentage,
}: TransactionsPieChartsProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositTotal,
      fill: "#55b02e",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentTotal,
      fill: "#ffffff",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expenseTotal,
      fill: "#e93030",
    },
  ];

  return (
    <Card className="flex flex-col p-2">
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-4">
          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Inverstimento"
            value={typePercentage[TransactionType.INVESTMENT]}
          />
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
            value={typePercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-danger" />}
            title="Despesas"
            value={typePercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsPieCharts;
