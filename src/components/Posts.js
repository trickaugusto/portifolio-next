import Image from "next/image";
import style from '../styles/Posts.module.css'

export default function Posts({ year, title, link, image }) {
    return (
        <a className={style.section} href={link} >
            <Image
                src={image}
                width={150}
                height={100}
                alt="Picture of the author"
            />
            <div className={style.content}>
                <h2 className={style.year}>{year}</h2>
                <h2 className={style.title}>{title}</h2>
            </div>
        </a>
    )
}