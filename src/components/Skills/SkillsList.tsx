export type skill_entry = {
  name: string;
  related: Array<string>;
  category: Categories;
};

export enum Categories {
  languages = "Programming Languages",
  db = "Databases",
  lib = "Libraries and Frameworks",
  cloud = "Cloud Technologies",
  other = "Other",
}

export const skills_full: Array<skill_entry> = [
  //python and useful libraries
  {
    name: "Python",
    related: ["AI", "scripting"],
    category: Categories.languages,
  },
  {
    name: "Numpy",
    related: ["python", "AI", "ML"],
    category: Categories.lib,
  },
  {
    name: "Torch",
    related: [
      "python",
      "AI",
      "ML",
      "computer vision",
      "nlp",
      "natural language",
    ],
    category: Categories.lib,
  },
  {
    name: "Jupyter Notebook",
    related: ["python", "AI", "ML"],
    category: Categories.lib,
  },
  {
    name: "Scipy",
    related: ["python", "AI", "ML"],
    category: Categories.lib,
  },
  {
    name: "Pandas",
    related: ["python", "AI", "ML"],
    category: Categories.lib,
  },
  {
    name: "Scikit-learn",
    related: ["python", "AI", "ML"],
    category: Categories.lib,
  },
  {
    name: "matplotlib",
    related: ["python"],
    category: Categories.lib,
  },

  //languages
  { name: "C", related: ["C++", "linux"], category: Categories.languages },
  { name: "C++", related: [], category: Categories.languages },
  { name: "Java", related: ["object"], category: Categories.languages },
  {
    name: "Javascript and Typescript",
    related: ["web"],
    category: Categories.languages,
  },
  {
    name: "MIPS Assembly",
    related: ["assembly"],
    category: Categories.languages,
  },
  { name: "oCaml", related: ["typed"], category: Categories.languages },

  // web
  { name: "ReactJS", related: ["web"], category: Categories.lib },
  { name: "NodeJS", related: ["web"], category: Categories.lib },
  { name: "ExpressJS", related: ["web"], category: Categories.lib },
  { name: "Spring", related: ["web", "Java"], category: Categories.lib },
  { name: "Bootstrap", related: ["web"], category: Categories.lib },
  { name: "JQuery", related: ["web"], category: Categories.lib },

  //db
  { name: "MongoDB", related: ["web", "cloud", "NoSQL"], category: Categories.db },
  { name: "AWS DynamoDB", related: ["cloud", "aws", "NoSQL"], category: Categories.db },
  { name: "MySQL", related: [], category: Categories.db },
  { name: "SQLite", related: [], category: Categories.db },
  { name: "Firebase", related: ["web", "cloud", "google"], category: Categories.db },

  //cloud
  { name: "AWS EC2", related: ["cloud", "aws"], category: Categories.cloud },
  { name: "AWS Lambda", related: ["cloud", "aws"], category: Categories.cloud },
  {
    name: "AWS Timestream",
    related: ["cloud", "aws"],
    category: Categories.cloud,
  },
  { name: "AWS CLI", related: ["cloud", "aws"], category: Categories.cloud },
  { name: "AWS CDK", related: ["cloud", "aws"], category: Categories.cloud },
  { name: "AWS SES", related: ["cloud", "aws"], category: Categories.cloud },
  { name: "AWS SQS", related: ["cloud", "aws"], category: Categories.cloud },
  {
    name: "Azure Image Analysis",
    related: ["cloud", "microsoft", "computer vision"],
    category: Categories.cloud,
  },
  {
    name: "Google Cloud Auto ML",
    related: ["cloud", "google", "computer vision"],
    category: Categories.cloud,
  },

  //other
  {name: "JUnit", related: ["Java", "test"], category: Categories.lib },
  { name: "Cinder", related: ["C++"], category: Categories.lib },
  {
    name: "Linux",
    related: ["operating systems", "terminal", "systems"],
    category: Categories.other,
  },
  { name: "Agile Development", related: [], category: Categories.other },
  { name: "Waterfall Development", related: [], category: Categories.other },
  { name: "Signal Processing", related: [], category: Categories.other },
  { name: "Algorithm Design", related: [], category: Categories.other },
  { name: "NLP", related: ["AI"], category: Categories.other },
  { name: "ML", related: ["AI"], category: Categories.other },
  { name: "Computer Vision", related: ["AI"], category: Categories.other },
  { name: "E-Prime", related: [], category: Categories.other },
  { name: "HTML", related: [], category: Categories.other },
  { name: "CSS", related: [], category: Categories.other },
  { name: "Verilog", related: [], category: Categories.other },
  { name: "Web Development", related: ["web"], category: Categories.other },
  { name: "Android Development", related: ["java"], category: Categories.other },
];
