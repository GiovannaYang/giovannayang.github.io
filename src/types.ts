export interface SocialItem {
  icon: string;
  link: string;
  name?: string;
}

export interface ProjectItem {
  name: string;
  link?: string;
  desc: string;
  repo?: string;
  visibility: string;
  language: string;
  languageColor: string;
  license: string;
}
