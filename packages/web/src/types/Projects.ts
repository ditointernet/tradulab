export type Row = {
  project: string;
  role: string;
};

export interface IProjectsTable {
  rows: Row[];
}

export interface IMyProjects {
  rows: Row[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
