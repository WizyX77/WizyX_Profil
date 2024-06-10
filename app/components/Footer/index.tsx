import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto w-11/12 sm:w-9/12 justify-between flex text-[#858585] selection:text-[#ccc] pb-2 select-text">
      <span> © 2019-2024 - Wizyx </span>
      <span> <Link href={"https://wizyxcode.vercel.app"} className="hover:underline hover:text-[#ccc] transition-all duration-200"> @_wizyx </Link> Tarafından Geliştirildi. </span>
    </footer>
  );
}