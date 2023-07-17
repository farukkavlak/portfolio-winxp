import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  message: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
    currentZIndex: number;
  };
  system: {
    backactive: boolean;
  };
};

export enum App {
  MYWORK,
  OUTLOOK,
  MYDOCUMENT,
  MYBLOG,
  ERROR,
  INFO,
  HELP,
  WARNING,
  WELCOME,
}

export enum WorkType {
  PERSONAL = "Personal Projects",
  SENIOR = "Senior Project",
  BOOTCAMP = "Bootcamp Projects",
  WORK = "Work",
}

export type WorkFile = {
  id: number;
  type: WorkType;
  icon: StaticImageData;
  title: string;
  content: WorkContent;
};

export type WorkContent = {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  gallery: StaticImageData[];
  techstack: string[];
  overview: string;
  liveURL: string;
  docURL: string;
  features: string[],
};
