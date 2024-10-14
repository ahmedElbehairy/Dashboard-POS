export interface Balance {
  totalIncome: number;
  totalExpense: number;
}
export interface Income {
  name: string;
  series:Series[]
}
export interface Goal {
  name: string;
  series:Series[]
}
export interface Series {
    name:string,
    value:number
}
