import styles from '../styles/Header.module.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Header() {

    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Patrick Augusto</h1>
            <h3 className={styles.subtitle}>Full-stack developer at Zhavia Tecnologia</h3>

            <div className={styles.buttonsSection}>
                <a href='#' className={styles.navIndicator} onClick={() => window.scrollTo(0, 0)}>
                    <hr />
                    About
                </a>

                <a href='#experiences' className={styles.navIndicator}>
                    <hr />
                    Experience
                </a>
                <a href='#projects' className={styles.navIndicator}>
                    <hr />
                    Projects
                </a>
            </div>

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
