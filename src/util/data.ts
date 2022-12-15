import { GithubIcon, ProjectExampleImg } from "../assets/assets";

interface iProjectData {
  projectId: number;
  projectName: string;
  teamName: string;
  category: "유니티" | "웹/앱" | "유니티 기초";
  thumbnail: string;
  youtubeUrl: string;
  description: string;
  developers: string[];
  downloadOptions: Array<
    | { name: "apk"; url: string; icon: string }
    | { name: "mac"; url: string; icon: string }
    | { name: "window"; url: string; icon: string }
    | { name: "github"; url: string; icon: string }
  >;
}

export const projectData: iProjectData[] = [
  {
    projectId: 1,
    projectName: "도전!집냥이",
    teamName: "팀이름",
    category: "유니티",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 2,
    projectName: "에브리로그",
    teamName: "팀이름",
    category: "웹/앱",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 3,
    projectName: "청파마켓",
    teamName: "팀이름",
    category: "웹/앱",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 4,
    projectName: "Common Alley Dolly's",
    teamName: "팀이름",
    category: "유니티",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 5,
    projectName: "OK Check Project",
    teamName: "팀이름",
    category: "유니티",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 6,
    projectName: "Plantity",
    teamName: "plantity",
    category: "웹/앱",
    thumbnail: `${ProjectExampleImg}`,
    youtubeUrl: "",
    description: "",
    developers: [""],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/Plantity",
        icon: `${GithubIcon}`,
      },
    ],
  },
];
