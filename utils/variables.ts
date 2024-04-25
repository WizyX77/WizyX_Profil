import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiHtmlacademy, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs, TbBrandVercel, TbFileTypeJsx } from 'react-icons/tb';
import { jsx } from 'react/jsx-runtime';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'WizyX Uptime Bot',
    description: 'Discord Botunuzu 7/24 Kesintisiz Aktif Tutun.',
    link: 'https://wizyxuptime.vercel.app/',
    iconURL: 'https://cdn.discordapp.com/attachments/1232395170578956308/1233148128790839336/standard1.gif?ex=662c0a30&is=662ab8b0&hm=3c6fb54956b0314cb618eee0f8f316806f3debf994016279375956505872ac06&',
  },
  {
    name: 'WizyX Uptime Server',
    description: 'WizyX Uptime Botunun Discord Sunucusu.',
    link: 'https://discord.gg/UtNJXsQnsq',
    iconURL: 'https://cdn.discordapp.com/attachments/1232395170578956308/1233148127910035517/standard2.gif?ex=662c0a30&is=662ab8b0&hm=825a72c00077257ef948b44618795b4040ffab00c9fec9581b21beac08dc08b5&',
  },
  {
    name: 'WizyX Botlist Server',
    description: 'WizyX Botlist Discord Sunucusu.',
    link: 'https://discord.gg/UtNJXsQnsq',
    iconURL: 'https://cdn.discordapp.com/attachments/1232395170578956308/1233148128375607317/standard3.gif?ex=662c0a30&is=662ab8b0&hm=857cae0c4cc0d177087effa93c146d9598a4f8ca48c7d49bd6f2ccf3d12c3139&',
  },
];

export const githubUsername = 'WizyX77';
export const discordId = '972557059860099082';  

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://www.github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://www.discord.com/users/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@brk.wizyx',
    iconURL: BsTiktok,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@BRKWizyx',
    iconURL: BsYoutube,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Javascript',
    iconURL: SiJavascript,
  },
  {
    name: 'Vercel.app',
    iconURL: SiVercel,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Node.js',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'Python',
    iconURL: SiPython,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Html',
    iconURL: SiHtml5,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
];
