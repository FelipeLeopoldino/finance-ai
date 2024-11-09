import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSCATION_CATEGORY_LABELS = {
  HOUSING: "Moradia",
  FOOD: "Alimentação",
  TRANSPORTATION: "Transporte",
  HEALTH: "Saúde",
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entreterimento",
  OTHER: "Outros",
  SALARY: "Salário",
  UTILITY: "Utilidades",
};

export const TRANSCATION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  CASH: "Dinheiro",
  PIX: "Pix",
  BANK_SLIP: "Boleto Bancário",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Depósito",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Despesa",
    value: TransactionType.EXPENSE,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTMENT,
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    label:
      TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    label: TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
    value: TransactionPaymentMethod.CASH,
  },
  {
    label: TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
    value: TransactionPaymentMethod.PIX,
  },
  {
    label:
      TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: TRANSCATION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
    value: TransactionPaymentMethod.OTHER,
  },
];

export const CATEGORY_OPTIONS = [
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.HOUSING],
    value: TransactionCategory.HOUSING,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.FOOD],
    value: TransactionCategory.FOOD,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.HEALTH],
    value: TransactionCategory.HEALTH,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
    value: TransactionCategory.EDUCATION,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.OTHER],
    value: TransactionCategory.OTHER,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.SALARY],
    value: TransactionCategory.SALARY,
  },
  {
    label: TRANSCATION_CATEGORY_LABELS[TransactionCategory.UTILITY],
    value: TransactionCategory.UTILITY,
  },
];
