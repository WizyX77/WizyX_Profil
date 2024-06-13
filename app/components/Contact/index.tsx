import Card from "@/app/components/Contact/components/Card";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 15 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 15 }}
      className="container mx-auto my-16 w-11/12 py-4 sm:w-9/12"
    >
      <h2 className="text-3xl"> Hesaplarım </h2>
      <p className="text-[#a7a7a7]"> 𓆩♡𓆪 ・ Tüm Sosyal Medya Hesaplarımı Görebilirsin. </p>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <motion.div variants={item}>
          <Card
            cardName="Github"
            cardType="github"
            cardUrl={`https://www.github.com/Wizyx77`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="Discord"
            cardType="discord"
            cardUrl={`https://discord.com/users/972557059860099082`}
          />
        </motion.div>


        <motion.div variants={item}>
          <Card
            cardName="TikTok"
            cardType="tiktok"
            cardUrl={`https://www.tiktok.com/@wizyx77`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="YouTube"
            cardType="youtube"
            cardUrl={`https://www.youtube.com/@Wizyx77`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="Wizyx"
            cardType="google"
            cardUrl={`https://wizyxcode.vercel.app`}
          />
        </motion.div>

        <motion.div variants={item}>
          <Card
            cardName="Spotify"
            cardType="spotify"
            cardUrl={`https://open.spotify.com/playlist/34i21EsLYvZsYwXkGPxzF4?si=c2b6c0a935b94d76`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
