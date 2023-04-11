import type { Project } from "@/types";

const mainProjects: Project[] = [
  {
    id: 1,
    title: "Rest Countries",
    src: "/assets/projects/rest-countries.jpg",
    description: "A website that contains a list of countries around the world.",
    techList: ["Typescript", "NextJs", "Styled Components"],
    repoUrl: "https://github.com/zulmy-azhary/rest-countries",
    liveUrl: "https://zoel-restcountries.vercel.app/",
    type: "main"
  },
  {
    id: 2,
    title: "Billionaires Data Analysis",
    src: "/assets/projects/Billionaires.jpg",
    description: "Analysing World's Billionaires Insights in year of 2022",
    techList: ["Excel", "Power BI "],
    repoUrl: "https://github.com/Zilany1001/Power-BI-Projects/blob/main/Billionaires%20data%20set.pbix",
    type: "main"
  },
  {
    id: 3,
    title: "Vrinda store sale Analysis",
    src: "/assets/projects/Vrinda-store-sale-Analysis.png",
    description: "Analyzin sale, who sales products using different channels in different locations",
    techList: ["Excel"],
    repoUrl: "https://github.com/Zilany1001/Excel-Projects/blob/main/Vrinda%20Store%20Data%20Analysis.xlsx",
    type: "main"
  },
  {
    id: 4,
    title: "Coca-Cola Sales Analysis",
    src: "/assets/projects/coca-cola-sales-analysis.jpg",
    description: "Analysing Coca-Cola's sales in USA based on location and month",
    techList: ["Power BI","Excel"],
    repoUrl: "https://github.com/Zilany1001/Power-BI-Projects/blob/main/cocacola%20sales%20report.pbix",
    type: "main"
  },
  {
    id: 5,
    title: "Alex E-commerce Sales Report",
    src: "/assets/projects/alex-e-commerce-dashboard.jpg",
    description: "Analysing A E-commerce Sales of the year of 2021",
    techList: ["Excel","PowerBI"],
    repoUrl: "https://github.com/Zilany1001/Power-BI-Projects/blob/main/Analyis%20Ecomerce%20sales%20data.pbix",
    type: "main"
  },
  {
    id: 6,
    title: "Olympic's Data Analysis",
    src: "/assets/projects/Olympic dashboard.JPG",
    description: "Analysing Olympic's Data and finding insingts from the dashboard",
    techList: ["PowerBI","Excel"],
    repoUrl: "https://github.com/Zilany1001/Power-BI-Projects/blob/main/Olympic%20dashboard.pbix",
    type: "main"
  }
];

const unfinishedProjects: Project[] = [
  {
    id: 1,
    title: "Tools Leadtime",
    description: "Leadtime management system web app at PT. Kalla Toyota Urip",
    techList: [
      "Typecript",
      "MongoDB",
      "ExpressJs",
      "ReactJs",
      "NodeJs",
      "Mongoose",
      "TailwindCSS",
      "Nodemon",
      "Yup",
      "React Query",
      "JWT"
    ],
    repoUrl: "https://github.com/zulmy-azhary/mern-app",
    liveUrl: "https://kalla-leadtime.vercel.app",
    type: "unfinished"
  }
];

const otherProjects: Project[] = [
  {
    id: 1,
    title: "Easybank Landingpage",
    src: "/assets/projects/easybank.jpg",
    techList: ["Javascript", "ReactJs"],
    repoUrl: "https://github.com/zulmy-azhary/easybank-landingpage",
    liveUrl: "https://ezbank.vercel.app/",
    type: "others"
  },
  {
    id: 2,
    title: "Rock Paper Scissors",
    src: "/assets/projects/rock-paper-scissors.jpg",
    techList: ["Typescript", "ReactJs", "Styled Components", "Framer Motion", "Vite"],
    repoUrl: "https://github.com/zulmy-azhary/roshambo",
    liveUrl: "https://roshambo-minigame.vercel.app/",
    type: "others"
  },
  {
    id: 3,
    title: "Sunnyside Landingpage",
    src: "/assets/projects/sunnyside.jpg",
    techList: ["Typescript", "Vue", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/sunnyside-landingpage",
    liveUrl: "https://zoel-sunnyside.vercel.app/",
    type: "others"
  },
  {
    id: 4,
    title: "Krypto Landingpage",
    techList: ["Typescript", "NextJs", "Styled Components"],
    repoUrl: "https://github.com/zulmy-azhary/krypto-landingpage",
    type: "others"
  },
  {
    id: 5,
    title: "Todo React TS",
    techList: ["Typescript", "ReactJs", "Material UI", "Vite"],
    repoUrl: "https://github.com/zulmy-azhary/todo-react-ts",
    liveUrl: "https://todo-reactts.vercel.app/",
    type: "others"
  },
  {
    id: 6,
    title: "React Notes",
    techList: ["Javascript", "ReactJs"],
    repoUrl: "https://github.com/zulmy-azhary/react-notes",
    type: "others"
  },
  {
    id: 7,
    title: "Calculator App",
    src: "/assets/projects/calculator-app.jpg",
    techList: ["Typescript", "Svelte"],
    repoUrl: "https://github.com/zulmy-azhary/calculator-app",
    liveUrl: "https://zoel-calculator.vercel.app/",
    type: "others"
  },
  {
    id: 8,
    title: "Loopstudios Landingpage",
    src: "/assets/projects/loopstudios.jpg",
    techList: ["Typescript", "Svelte", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/loopstudios",
    liveUrl: "https://zoel-loopstudios.vercel.app/",
    type: "others"
  },
  {
    id: 9,
    title: "Gerai Design",
    src: "/assets/projects/gerai-design.jpg",
    techList: ["Typescript", "ReactJs", "TailwindCSS"],
    repoUrl: "https://github.com/zulmy-azhary/gerai-design",
    liveUrl: "https://gerai-design.vercel.app/",
    type: "others"
  },
  {
    id: 10,
    title: "Realtime Chat App",
    techList: ["Javascript", "NextJs", "Firebase", "Chakra UI"],
    repoUrl: "https://github.com/zulmy-azhary/realtime-chat-app",
    liveUrl: "https://next-chatapp.vercel.app/",
    type: "others"
  }
];

export const allProjects: Project[] = [...mainProjects, ...unfinishedProjects, ...otherProjects];
