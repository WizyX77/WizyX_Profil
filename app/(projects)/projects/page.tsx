"use client";
import Square from "@/app/components/Background/Square";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import Project from "./components/Project";

export default function Projects() {


  return (
    <>
      <div className="relative z-10 h-full">
        <Square
          column="10"
          row="10"
          transparentEffectDirection="bottomToTop"
          blockColor="#161616"
        />

        <Header />
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="container mx-auto w-11/12 sm:w-9/12 my-16 pb-4 pt-12">
          <div>
            <h2 className="text-5xl font-semibold"> Tüm Projelerim </h2>
            <p className="text-[#a7a7a7] sm:w-3/5 mt-1"> 𓆩♡𓆪 ・ Bu Sayfada Geliştirdiğim Tüm Projlerimi Görebilirsiniz. </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-14">
            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249829014088974457/2standard.gif?ex=6668b979&is=666767f9&hm=578fe82aa11e2b58265879a622db312a5e55f8a8d45f8ee0a052f5569845380f&"
                name="Music"
                githubLink="https://github.com/WizyX77/WizyX_MusicWeb"
                websiteLink="https://wizyxmusic.vercel.app/"
                description="7/24 Kesintisiz, Çeşitli Müzik Modlarıyla Ve Ses Kalitesiyle Discord Sunucunuzun En Kaliteli Müzik Botu!"
                tags={["TypeScript", "Javascript", "MongoDB", "Discord Bot"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249828993340018829/1standard.gif?ex=6668b974&is=666767f4&hm=b95051e3d8be0959ced6b5ccf89afd0fe78dff97a2ef0c4fcd5a8d70876b7dd9&"
                name="LoLavita"
                githubLink="https://github.com/Wizyx77"
                websiteLink="https://discord.gg/mq2suCA45z"
                description="Kaliteli Sohbet Ortamı, Etkinlikler, Çekilişler Ve Daha Fazlası... Hepsi Bir Sunucuda 𓆩♡𓆪 LoLavita"
                tags={["Herkese Açık",  "Sohbet", "Discord Sunucu",]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249829075984453754/5standard.gif?ex=6668b988&is=66676808&hm=8ef3c129a2cde48307861692e93c45816fb0f1299dcffc54f91dc485771b2b95&"
                name="Uptime"
                githubLink="https://github.com/Wizyx77"
                websiteLink="https://discord.gg/Dv5Mj9UPKv"
                description="7/24 Kesintisiz Şekilde Botunuzu Aktif Edebileceğiniz Bir Yer. Premium Fiyatı Bir Simit Fiyatına!"
                tags={["TypeScript", "JavaScript", "Discord Sunucu"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249829055646138388/3standard.gif?ex=6668b983&is=66676803&hm=5485f430ab312cc14e9bbb160290c222933493429ffc82cd30164d9fd0cd8b65&"
                name="WizyxBot"
                githubLink="https://github.com/Wizyx77"
                websiteLink="https://discord.gg/Dv5Mj9UPKv"
                description="Discord Sunucunuzun En Kaliteli Moderasyon Botu. 60+ Gelişmiş Sistemleriyle Sunucunuzun En İyisi!"
                tags={["JavaScript", "MongoDB", "Discord Bot"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249829073824514098/4standard.gif?ex=6668b987&is=66676807&hm=1108b37880df37f74db76c626bcf29f3e743244e9a5a1a3b8738b45961f83dd1&"
                name="WizyxCode"
                githubLink="https://github.com/Wizyx77"
                websiteLink="https://wizyxcode.vercel.app"
                description="Yaptığım Discord Botlarını Sattığım & Tanıttığım Web Sitem. İsterseniz İnceleyebilirsiniz. Fiyatlar İndirimli!"
                tags={["Html", "Css", "JavaScript", "Web Site"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://cdn.discordapp.com/attachments/1241419174908137572/1249829135044444242/standard.gif?ex=6668b996&is=66676816&hm=f9e1ead7a9f2ecdcc947a8bab102886189fc3d286117e76c23c71b6a0283e52d&"
                name="WizyxBots"
                githubLink="https://github.com/Wizyx77"
                websiteLink="https://wizyxbot.vercel.app"
                description="Genel Discord Botuma Ait Web Sitesi. Github Hesabımdan Diğer Botların Web Sitelerine de Göz Atabilirsiniz."
                tags={["Next.js", "Css", "TypeScript", "Web Site"]}
              />
            </motion.div>


          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
