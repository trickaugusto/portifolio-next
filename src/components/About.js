import { Roboto_Mono } from 'next/font/google'
import styles from '../styles/About.module.css'

const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['latin'],
})

export default function About() {
    return (
        <>
            <p className={styles.contentText}>
                Professional with nearly 4 years of experience in back-end development, using PHP/Laravel, MySQL, and Git. I hold a degree in Digital Marketing, which served as the catalyst for my journey into software development. Currently, I work as a Full-stack developer, proficient in Angular and PHP.
                <br />
                <br />
                Throughout my career, I have taken on a leadership role, guiding and empowering new team members. I created educational materials and closely monitored the progress of professionals in development. Additionally, I developed skills in communication and technical writing, preparing both internal and external documentation.
                <br />
                <br />
                I am passionate about assisting others and I have a natural ability to communicate effectively. My previous experience in customer service and technical support environments has provided me with valuable skills in working under pressure and efficiently solving problems.
            </p>
        </>
    );
}
