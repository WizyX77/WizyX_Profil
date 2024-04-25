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
    iconURL: 'https://cdn.discordapp.com/attachments/1232395170578956308/1233146721249394902/standard1.gif?ex=662c08e1&is=662ab761&hm=736c338548bdae5a66d9656bebe6023f4640d31e4b382a0c217031a488657b83&',
  },
  {
    name: 'WizyX Uptime Server',
    description: 'WizyX Uptime Botunun Discord Sunucusu.',
    link: 'https://discord.gg/UtNJXsQnsq',
    iconURL: 'https://cdn.discordapp.com/attachments/1232395170578956308/1233146720754471082/standard2.gif?ex=662c08e0&is=662ab760&hm=5c1f44a1ece2b378b75545f006afccc35ea25440fe9df06a6c3b595d94faf656&',
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
