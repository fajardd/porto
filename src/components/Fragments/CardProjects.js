import React from "react";
import Card from "./Card";
import imageCard from "@/assets/Images/app-1.png";
import imageCard2 from "@/assets/Images/app-2.png";
import imageCard3 from "@/assets/Images/app-3.png";
import useTruncatetext from "@/hooks/useTruncateText";

const CardProjects = () => {
  const { truncateText } = useTruncatetext();
  const portfolioText =
    "Web portofolio dibangun menggunakan framework Nextjs dan tailwind css";
  const adminPresensiText =
    "Web admin presensi dibangun menggunakan framework Nextjs dan tailwind css";
  const rekamMedisText =
    "Web admin rekam medis dibangun menggunakan reactjs dan expressjs ";

  return (
    <div className="  w-full bg-white">
      <div>
        <h1 className="text-[#0079FF] font-semibold">Projects</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          src={imageCard3}
          textImageLink="/projects/portfolio"
          textImage="Portfolio"
          textContent={truncateText(portfolioText, 80)}
          textButtonLink="/projects/portfolio"
          textButton="Read more"
        />
        <Card
          src={imageCard2}
          textImageLink="#"
          textImage="Presensi"
          textContent={truncateText(adminPresensiText, 80)}
          textButtonLink="#"
          textButton="Read more"
        />
        <Card
          src={imageCard}
          textImageLink="/projects/rekam-medis"
          textImage="Rekam Medis"
          textContent={truncateText(rekamMedisText, 80)}
          textButtonLink="/projects/rekam-medis"
          textButton="Read more"
        />
      </div>
    </div>
  );
};
export default CardProjects;
