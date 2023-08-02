import styles from '../styles/Technologies.module.css'

export default function Technologies({ technologies }) {
    return (
        <div>
            {technologies.length > 0 && (
                <div className={styles.listTec}>
                    {technologies.map((technology, index) => (
                        <a key={index} className={styles.technology}>
                            {technology}
                        </a>
                    ))}
                </div>
            )}

        </div>
    )
}