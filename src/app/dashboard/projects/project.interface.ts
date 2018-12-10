export interface Project {
  id?: string;
  name: string;
  size: number;
  clientName: string;
  employeeIds: number[];
}

export type Projects = Project[];
