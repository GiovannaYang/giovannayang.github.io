export interface SocialItem {
  icon: string;
  link: string;
  name?: string;
}

export interface ProjectItem {
  name: string;
  link: string;
  desc: string;
  icon: string;
  tech?: string[];
  repo: string;
}

export interface GithubRepoInfo {
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  visibility: "Private" | "Public";
  template: boolean;
  ownerType: "User" | "Organization";
  license: {
    name: string;
    url: string;
  } | null;
}
