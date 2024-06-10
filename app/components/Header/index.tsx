import Link from "@/app/components/Header/components/Link";
import { motion } from "framer-motion";
import NextLink from "next/link";

export default function Header() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="container mx-auto w-11/12 sm:w-9/12 mt-4"
      >
        <nav className="flex justify-between items-center">
          <div className="w-1/3 flex justify-start">
            <h1> 𓆩♡𓆪 ・ Wizyx </h1>
          </div>

          <div className="w-1/3 flex justify-center gap-x-2 mr-2 sm:mr-0">
            <Link href={"/"}>          Anasayfa </Link>
            <Link href={"/projects"}>  Projeler </Link>
            <Link href={"https://wizyxcode.vercel.app"}>     Özel  </Link>
          </div>

          <div className="w-1/3 justify-end hidden sm:flex">
            <NextLink href={"https://discord.gg/mq2suCA45zv"} className="bg-[#EDEEF0] text-[#111113] py-1 px-3 rounded-full hover:opacity-80 transition-all duration-200">
              Sende Aramıza Katıl <span>→</span>
            </NextLink>
          </div>
        </nav>
      </motion.header>


    </>
  );
}