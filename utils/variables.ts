import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiHtmlacademy, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs, TbBrandVercel, TbFileTypeJsx } from 'react-icons/tb';
import { jsx } from 'react/jsx-runtime';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'WizyX Bot',
    description: 'Discord Sunucunuzun En Sağlam Botu.',
    link: 'https://wizyxbot.vercel.app/',
    iconURL: 'https://cdn.discordapp.com/avatars/1134911959024799764/727aa64bb13fa8e4db67521fcf2df08c.webp?size=1024',
  },
  {
    name: 'WizyX Code',
    description: 'Kod Paylaşım & Altyapı Sunucusu.',
    link: 'https://discord.gg/tpbJXTpaGe',
    iconURL: 'https://cdn.discordapp.com/attachments/1225439296975015936/1231180576447528960/Ekran_goruntusu_2024-04-08_220545.png?ex=6624e1c3&is=66239043&hm=0c71dffa4353886073d3bbd580a48ffc2e197f01c0220bc3073b5d61d632aad0&',
  },
  {
    name: 'WinWizard',
    description: 'Discord Sunucunuzun En İyi Çekiliş Botu.',
    link: 'https://winwizard.vercel.app/',
    iconURL: 'https://cdn.discordapp.com/avatars/1230202370877685801/20c4dd086c21696f2113008b36e70f3b.webp?size=1024',
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
    link: 'https://www.discord.com/user/' + discordId,
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
