import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  //Acessar as transações do banco de dados
  const transcation = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transcation} />
    </div>
  );
};

export default TransactionsPage;
