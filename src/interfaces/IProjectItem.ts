export const ProjectStatus = {
  InProgress: "In progress",
  Completed: "Completed",
  NotStarted: "Not started",
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
