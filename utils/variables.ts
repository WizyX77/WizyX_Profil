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
    iconURL: 'https://share.creavite.co/662ab403e877555b0b390f41.gif',
  },
  {
    name: 'WizyX Uptime Server',
    description: 'WizyX Uptime Botunun Discord Sunucusu.',
    link: 'https://discord.gg/UtNJXsQnsq',
    iconURL: 'https://share.creavite.co/662ab3ede877555b0b390f40.gif',
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
