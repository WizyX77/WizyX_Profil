import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiHtmlacademy, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs, TbBrandVercel, TbFileTypeJsx } from 'react-icons/tb';
import { jsx } from 'react/jsx-runtime';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'WizyX Music',
    description: 'Kesintisiz Müzik Keyfini Çıkarın!',
    link: 'https://wizyxmusic.vercel.app/',
    iconURL: 'https://cdn.discordapp.com/avatars/1243599943352975450/a6e944472ae2054ca2ce26241e9d3053.webp?size=1024',
  },
  {
    name: 'WizyX Bot',
    description: 'Sunucunuzun En Gelişmiş Botu!',
    link: 'https://discord.com/oauth2/authorize?client_id=1134911959024799764',
    iconURL: 'https://cdn.discordapp.com/avatars/1241394005564985494/c37e01bb9efb4c511f3790793cbd2ba0.webp?size=1024',
  },
  {
    name: 'WizyX Server',
    description: 'Discord Sunucumuza Davetlisiniz :)',
    link: 'https://discord.com/oauth2/authorize?client_id=1134911959024799764',
    iconURL: 'https://cdn.discordapp.com/avatars/1241394005564985494/c37e01bb9efb4c511f3790793cbd2ba0.webp?size=1024',
  },
  {
    name: 'WizyX Uptime',
    description: 'Botunuzu Kesintisiz Uptime Edin!',
    link: 'https://discord.gg/UtNJXsQnsq',
    iconURL: 'https://cdn.discordapp.com/avatars/1241394005564985494/c37e01bb9efb4c511f3790793cbd2ba0.webp?size=1024',
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
