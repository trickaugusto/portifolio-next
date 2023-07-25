export default function Experience({ years, title, subtitle, description, technologies}) {
    return (
        <div>
            <h3>{years}</h3>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                {description}
            </p>

            <div>
                {
                    technologies.map((technology) => <a key={technology}>{technology}</a>)
                }
            </div>
        </div>
    )
}