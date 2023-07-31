export default function Technologies({ technologies }) {
    return (
        <div>

            {technologies.length > 0 && (
                <div className='listTec'>
                    {technologies.map((technology) => (
                        <a key={technology} className='technology'>
                            {technology}
                        </a>
                    ))}
                </div>
            )}

        </div>
    )
}