export const ProjectStatus = {
  InProgress: "In progress",
  AlwaysEvolving: "Always evolving",
  Completed: "Completed",
  Planned: "Planned",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface IProjectItem {
  name: string;
  image?: string;
  description: string;
  status: ProjectStatus;
  github?: string;
  url?: string;
}
