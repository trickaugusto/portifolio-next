import Technologies from "../components/Technologies";
import style from '../styles/Projects.module.css'
import { FaLink } from 'react-icons/fa';

export default function Projects({
    title,
    description,
    technologies,
    link
}) {
    return (
        <div className={style.section}>
            <h3 className={style.title}>{title}</h3>
            <p className="transparent">{description}</p>

            <div className={style.divlink}>
                <a href={link} className={style.link}>Github project</a>
                <FaLink className={style.icon} />
            </div>

            <Technologies
                technologies={technologies}
            />
        </div>
    )
}