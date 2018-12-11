export interface Project {
  id?: string;
  name: string;
  size: number;
  clientName: string;
  employeeIds: string[];
}

export type Projects = Project[];
