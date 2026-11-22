"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/paralaxGallery.module.scss";
import Image from "next/image";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "./useDimension";

const baseUrl = "";

const images = [
  `${baseUrl}/images/Fotoin-Cover.jpg`,
  `${baseUrl}/images/Flowy.png`,
  `${baseUrl}/images/HarvestTable.png`,
  `${baseUrl}/images/KucingCariRumah.png`,
  `${baseUrl}/images/Portofolio.png`,
  `${baseUrl}/images/Seku.png`,
  `${baseUrl}/images/TechSprint.png`,
  `${baseUrl}/images/Fotoin-Cover.jpg`,
  `${baseUrl}/images/NusantaraTrip.png`,
  `${baseUrl}/images/MindEase.png`,
  `${baseUrl}/images/Hoobank.png`,
  `${baseUrl}/images/NusantaraCode.png`,
];

const ParalaxGallery = () => {
  const container = useRef(null);
  const { width, height } = useDimension();
  const isMobile = width > 0 && width < 768;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Pergerakan simetris [-offset, +offset] agar tidak pernah meninggalkan gap kosong di atas maupun bawah
  const y = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? [-30, 30] : [-height * 0.4, height * 0.4],
  );
  const y2 = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? [30, -30] : [height * 0.5, -height * 0.5],
  );
  const y3 = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? [-25, 25] : [-height * 0.3, height * 0.3],
  );
  const y4 = useTransform(
    smoothProgress,
    [0, 1],
    isMobile ? [25, -25] : [height * 0.45, -height * 0.45],
  );

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.main} ref={container}>
      <div className={styles.gallery}>
        {isMobile ? (
          // Di mobile: gabungkan jadi 2 kolom berisi masing-masing 4 gambar agar tidak memanjang ke bawah
          <>
            <Column
              images={[images[0], images[1], images[2], images[3]]}
              y={y}
            />
            <Column
              images={[images[4], images[5], images[6], images[8]]}
              y={y2}
            />
          </>
        ) : (
          // Di desktop: 4 kolom penuh
          <>
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column images={[images[9], images[10], images[11]]} y={y4} />
          </>
        )}
      </div>
    </div>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image
            src={src}
            alt="Gallery showcase"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={75}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParalaxGallery;
