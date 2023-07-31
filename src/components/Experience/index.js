import Technologies from "../Technologies";
import style from "./styles.module.css";
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
    weight: ['400'],
    subsets: ['latin'],
})


export default function Experience({ years, title, subtitle, description, technologies }) {
    return (
        <div className='section'>

            <h3 className={`
                transparent 
                ${style.years} 
                ${roboto.className}
            `}>{years}</h3>

            <h2 className={style.title}>{title}</h2>

            <h3 className={`
                transparent 
                ${style.subtitle}
            `}>{subtitle}</h3>

            <p className={`
                transparent 
                ${style.description}`
            }>
                {description}
            </p>

            <Technologies
                technologies={technologies}
            />
        </div>
    )
}