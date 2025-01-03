import React from "react";
import Technologies from "../components/Technologies";
import style from "../styles/Experience.module.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Experience({
  years,
  title,
  subtitle,
  description,
  technologies,
}) {
  return (
    <div className={style.section}>
      <h3
        className={`
                transparent 
                ${style.years} 
                ${roboto.className}
            `}
      >
        {years}
      </h3>

      <h2 className={style.title}>{title}</h2>

      <h3
        className={`
                transparent 
                ${style.subtitle}
            `}
      >
        {subtitle}
      </h3>

      <p
        className={`
                transparent 
                ${style.description}`}
      >
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      <Technologies technologies={technologies} />
    </div>
  );
}
