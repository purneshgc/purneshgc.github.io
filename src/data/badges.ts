export type Rarity = "common" | "rare";

export type Badge = {
  name: string;         // bold title
  description: string;  // small text under the title
  rarity: Rarity;       // "common" (blue) or "rare" (green)
  percent: number;      // shown as "Common: 19.5%"
  image: string;        // icon file inside /public, e.g. "/badges/webbed.png"
  href: string;         // your badge page on TryHackMe (opens in a new tab)
};

export const badges: Badge[] = [
  {
    name: "Advent of Cyber 2025",
    description: "Completing Advent of Cyber 2025!",
    rarity: "rare",
    percent: 2.6,
    image: "/badges/b_aoc_2025.png",
    href: "https://tryhackme.com/purneshgc/badges/advent-of-cyber-2025",
  },
  {
    name: "First Step into SOC",
    description: "Explored emerging threats and SOC response",
    rarity: "rare",
    percent: 6.9,
    image: "/badges/b_soc.png",
    href: "https://tryhackme.com/purneshgc/badges/first-step-into-soc",
  },
  {
    name: "SOC Apprentice",
    description: "Explored how a SOC team operates from inside",
    rarity: "rare",
    percent: 5.7,
    image: "/badges/b_soc_a.png",
    href: "https://tryhackme.com/purneshgc/badges/soc-apprentice",
  },
  {
    name: "First alert closed",
    description: "Closing your first alert",
    rarity: "rare",
    percent: 6.9,
    image: "/badges/b_fac.png",
    href: "https://tryhackme.com/purneshgc/badges/soc-sim-first-alert-closed",
  },
  {
    name: "First scenario completed",
    description: "Completing your first scenario",
    rarity: "rare",
    percent: 5.5,
    image: "/badges/b_fsc.png",
    href: "https://tryhackme.com/purneshgc/badges/soc-sim-first-scenario-completed",
  },
  {
    name: "100% true positive rate",
    description: "Achieving 100% true positive rate in a scenario",
    rarity: "rare",
    percent: 4.5,
    image: "/badges/b_100_tpr.png",
    href: "https://tryhackme.com/purneshgc/badges/soc-sim-100-percent-true-positive-rate",
  },
  {
    name: "Defensive Toolsmith",
    description: "Mastered essential SOC tools for detection",
    rarity: "rare",
    percent: 4.8,
    image: "/badges/b_dts.png",
    href: "https://tryhackme.com/purneshgc/badges/defensive-toolsmith",
  },
  {
    name: "Skilled Navigator",
    description: "Finishing the Eviction challenge!",
    rarity: "rare",
    percent: 4.7,
    image: "/badges/b_sn.png",
    href: "https://tryhackme.com/purneshgc/badges/skilled-navigator",
  },
  {
    name: "Phish Hunter",
    description: "Completed the Phishing Analysis room series",
    rarity: "rare",
    percent: 4.2,
    image: "/badges/b_ph.png",
    href: "https://tryhackme.com/purneshgc/badges/phishing",
  },

  {
    name: "Networking Nerd",
    description: "Completing the 'Network Fundamentals' module.",
    rarity: "common",
    percent: 14.6,
    image: "/badges/b_nn.png",
    href: "https://tryhackme.com/purneshgc/badges/network-fundamentals",
  },
  {
    name: "Webbed",
    description: "Understands how the world wide web works",
    rarity: "common", // change to "rare" if it shows Rare on TryHackMe
    percent: 19.5,       // replace with the % shown on TryHackMe
    image: "/badges/b_web.png",
    href: "https://tryhackme.com/purneshgc/badges/web-fund",
  },
  {
    name: "World Wide Web",
    description: "Completing the 'How The Web Works' module.",
    rarity: "common",
    percent: 16,
    image: "/badges/b_www.png",
    href: "https://tryhackme.com/purneshgc/badges/world-wide-web",
  },
  {
    name: "cat linux.txt",
    description: "Being competent in Linux",
    rarity: "common",
    percent: 21,
    image: "/badges/b_cat.png",
    href: "https://tryhackme.com/purneshgc/badges/terminaled",
  },
];