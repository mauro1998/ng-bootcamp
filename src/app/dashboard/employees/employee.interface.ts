export interface Employee {
  id?: string;
  name: string;
  lastName: string;
  age: number;
  birthday: string;
}

export type Employees = Employee[];
