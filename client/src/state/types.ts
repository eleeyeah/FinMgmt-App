export interface ExpensesByCategory {
  salary: number;
  supplies: number;
  services: number;
}

export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperatingRevenue: number;
  operationalRevenue: number;
}
export interface Day {
  _id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
