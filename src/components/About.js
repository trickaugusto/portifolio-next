import { Roboto_Mono } from "next/font/google";
import styles from "../styles/About.module.css";

const roboto = Roboto_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <p className={styles.contentText}>
        👋 Hi there! I&apos;m a Full-Stack Developer with nearly 4 years of
        experience, passionate about building efficient and scalable solutions
        using Node.js, React, and GraphQL. 🚀
        <br />
        <br />
        🔭 What I’m up to: Currently working on exciting projects at Globo,
        while exploring Golang and Functional Programming to expand my technical
        toolkit.
        <br />
        <br />
        💡 What I bring to the table: <br />
        - Expertise in full-stack development with tools like Node.js, React, Angular, and PHP/Laravel. <br />
        - Experience leading and mentoring team members, creating educational materials, and fostering professional growth. <br />
        - Strong skills in communication and technical writing, including the creation of internal and external documentation. <br />
        - A solid background in customer service and technical support, equipping me to solve problems under pressure with clarity and efficiency.
        <br />
        <br />
        🌱 What drives me: I thrive on helping others and believe in the power of collaboration to create impactful solutions. My degree in Digital
        Marketing ignited my passion for software development, and I haven’t looked back since.
        <br />
        <br />
        Let’s connect! I’m always open to learning, sharing knowledge, and
        exploring new opportunities.
      </p>
    </>
  );
}
