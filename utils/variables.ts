import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: '𓆩♡𓆪 LoLavita',
    description: 'It allows you to view local news via Discord.',
    link: 'https://discord.gg/mq2suCA45z',
    iconURL: 'https://cdn.discordapp.com/attachments/1249064433003794564/1249409220839739482/34b59c8638a9bdf3acfd1a99ed89bd0c.png',
  },
  {
    name: '𓆩♡𓆪 Wizyx Code',
    description: 'It provides access to free projects and codes.',
    link: 'https://discord.gg/Dv5Mj9UPKv',
    iconURL: 'https://cdn.discordapp.com/icons/1096085223881576549/659a570c79e73521fbebe5fb56dda08f.png',
  },
];

export const githubUsername = 'Wizyx77';
export const discordId = '972557059860099082';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: '𓆩♡𓆪 ・ Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: '𓆩♡𓆪 ・ Discord',
    link: 'https://discord.com/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: '𓆩♡𓆪 ・ YouTube',
    link: 'https://www.youtube.com/@Wizyx77',
    iconURL: BsYoutube,
  },
  {
    name: '𓆩♡𓆪 ・ TikTok',
    link: 'https://www.tiktok.com/@wizyx77',
    iconURL: BsTiktok,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Tailwindcss',
    iconURL: SiTailwindcss,
  },
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Firebase',
    iconURL: SiFirebase,
  },
];
