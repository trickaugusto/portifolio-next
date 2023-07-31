import Technologies from "../Technologies";
import style from "./styles.module.css";

export default function Projects({
    title,
    description,
    technologies
}) {
    return (

        <div className='section'>
            <h3 className={style.title}>{title}</h3>
            <p className="transparent">{description}</p>

            <div className={style.divlink}>
                <a href="https://github.com/trickaugusto/nest-api" className={style.link}>Github project</a>
            </div>

            <Technologies
                technologies={technologies}

            />
        </div>
    )
}