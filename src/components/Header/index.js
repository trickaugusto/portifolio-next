import styles from './styles.module.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Patrick Augusto</h1>
            <h3 className={styles.subtitle}>Full-stack developer at Zhavia Tecnologia</h3>

            <div className={styles.socialIcons}>
                <a href="https://github.com/trickaugusto" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://twitter.com/trickaugusto2" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/trickaugusto/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
}
