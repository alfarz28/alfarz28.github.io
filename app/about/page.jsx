import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { IoLogoJavascript } from "react-icons/io";
import { MdHtml, MdCss } from "react-icons/md";
import { FaReact, FaFigma, FaPhp, FaSass } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiCodeigniter,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FiFramer } from "react-icons/fi";

const study = [
  {
    period: "2023 - 2026",
    text: "Diploma of Application Software Engineering at Telkom University, Bandung, Indonesia.",
    img: "/images/logo/Logo_Telkom_University.png",
  },
  {
    period: "2023 - present",
    text: "Bachelor of Informatics at Telkom University, Bandung, Indonesia.",
    img: "/images/logo/Logo_Telkom_University.png",
  },
];

const services = [
  {
    title: "Design",
    text: "I'll design your website with the latest trends and technologies, making it look modern and professional.",
  },
  {
    title: "Development",
    text: "If you have a design and need it to be developed, I can help you.",
  },
];

const skills = [
  { name: "HTML", icon: MdHtml },
  { name: "CSS", icon: MdCss },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "PHP", icon: FaPhp },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "MySQL", icon: SiMysql },
  { name: "Figma", icon: FaFigma },
  { name: "Framer Motion", icon: FiFramer },
  { name: "Redux", icon: SiRedux },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "Express", icon: SiExpress },
  { name: "CodeIgniter", icon: SiCodeigniter },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Sass", icon: FaSass },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const Section = ({ number, title, children }) => (
  <section className={styles.section}>
    <Reveal>
      <div className={styles.sectionHead}>
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
    </Reveal>
    {children}
  </section>
);

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <Reveal>
        <h1 className={styles.title}>About</h1>
      </Reveal>

      <div className={styles.aboutMe}>
        <Reveal className={styles.photo}>
          <Image
            src="/images/Alfaridza.jpg"
            width={300}
            height={450}
            alt="Alfaridza"
            priority
          />
        </Reveal>

        <Reveal delay={0.15} className={styles.bio}>
          <p>
            Hey there! I&apos;m Alfaridza, a frontend developer driven by my
            passion to create captivating and meaningful digital experiences.
            Currently, I&apos;m pursuing a degree in application software
            engineering, where I actively integrate cutting-edge technologies
            like React.js, Next.js, Tailwind CSS, Sass, and Node.js into my
            projects. I thrive on exploring the latest innovations. For
            instance, I&apos;m diving deep into Framer Motion for dynamic
            animations and leveraging Next.js to build responsive and
            lightning-fast websites. My enthusiasm for continuous learning and
            growth fuels my ambition to contribute to groundbreaking user
            experiences. Let&apos;s collaborate to craft exceptional designs
            together! Thank you for visiting my portfolio.
          </p>
          <div className={styles.actions}>
            <Button
              text="Contact Me"
              linkTo="https://www.instagram.com/alfrdza/"
            />

            <a
              href="/cv/CV-Alfaridza-Hamdani.pdf"
              download="CV-Alfaridza-Hamdani.pdf"
              className={styles.downloadBtn}
            >
              <span>Download CV</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <Section number="01" title="Study Journey">
        <div className={styles.cards}>
          {study.map((item, i) => (
            <Reveal key={item.period} delay={i * 0.1} className={styles.card}>
              <div className={styles.wrapper}>
                <span className={styles.cardNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <img src={item.img} alt="Logo Telkom University" />
              </div>
              <h3>{item.period}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section number="02" title="I Can Help You With">
        <div className={styles.cards}>
          {services.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className={styles.card}>
              <span className={styles.cardNumber}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section number="03" title="My Skills">
        <ul className={styles.skills}>
          {skills.map(({ name, icon: Icon }, i) => (
            <li key={name} className={styles.skill}>
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default AboutPage;
