import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import { Roboto_Mono } from 'next/font/google'
import Projects from '@/components/Projects'
import homeStyle from '../styles/Home.module.css'
import Posts from '@/components/Posts'

const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {

  const experiences = [
    {
      years: 'Ago 2024 - Present',
      title: 'Storm Group / Globo',
      subtitle: 'Full stack developer',
      description: `
        - Collaborating on the development and optimization of the Globoplay platform, one of the largest streaming services in Latin America.\n
        - Building scalable and efficient applications using Node.js, React, and GraphQL, ensuring high performance and excellent user experience.\n
        - Designing and implementing solutions to enhance the platform's functionality, reliability, and maintainability.\n
        - Working closely with cross-functional teams to deliver innovative features and improve the platform's architecture.\n
        - Leveraging best practices in software development, including testing, continuous integration, and code review, to maintain code quality and scalability.
      `,
      technologies: [
        'React',
        'NodeJS',
        'Jest',
        'GraphQL',
      ],
    },
    {
      years: 'Jan 2023 - nov de 2024',
      title: 'Spartan Solucions - Europe',
      subtitle: 'Freelance',
      description: '    Development pontual features, with PHP/Laravel.',
      technologies: [
        'PHP/Laravel',
      ],
    },
    {
      years: 'Mar 2023 - Ago 2024',
      title: 'Zhavia tecnologia',
      subtitle: 'Full stack developer',
      description: `
      - Full-Stack Development: Designed, developed, and maintained a church management software used daily by thousands of users, covering features like finances, group management, events, member tracking, and registrations. \n
      - System Ownership: Managed the platform end-to-end, including the core web system (Angular, PHP/Yii, NestJS, NextJS), custom church websites, and a cross-platform mobile app built with Ionic and PWAs. \n
      - API Integration: Enhanced communication features through integration with official and unofficial WhatsApp APIs. \n
      - Agile Collaboration: Worked closely with teams and stakeholders, participating in agile ceremonies and delivering tailored solutions to meet specific client needs. \n
      - Performance and Scalability: Ensured high availability and optimized performance to support a growing user base.`,
      technologies: [
        'Angular',
        'PHP/Yii',
        'Next',
        'Nest',
        'Mysql'
      ],
    },
    {
      years: 'Abr 2021 - Mar 2023',
      title: 'Webhelp Brasil',
      subtitle: 'Backend Developer',
      description: `
      - PHP Back-end Programmer, specializing in API integrations using SOAP and REST, with a keen eye for troubleshooting existing code. \n
      - Responsible for leading a team that provides support and analysis for the system in production, managing the flow of tasks related to these specific analyses using Kanban, identifying errors/improvements, and expediting resolutions. \n
      - Mentor new developers joining the team, providing training on the daily tools and, depending on the developer's level, offering guidance on programming topics in general. \n
      - Act as a Tech Writer, responsible for creating technical documentation, both for internal and external purposes.
    `,
      technologies: [
        'PHP/Laravel',
        'Tech Lead',
        'Mysql'],
    },
  ];

  const projects = [
    {
      title: 'API NestJS',
      description: 'Welcome to my Nest API. This is a POC. In this project, exists POSTS and USERS records. I have conection with mongodb. Authentication and authorization',
      technologies: [
        'Nest',
        'Mongoose'
      ],
      link: 'https://github.com/trickaugusto/nest-api'
    },
    {
      title: 'Portfilio in Next',
      description: 'Welcome to my Portfolio. I did with next, Html & CSS',
      technologies: [
        'Next',
        'HTML',
        'CSS'
      ],
      link: 'https://github.com/trickaugusto/portifolio-next'
    },
  ]

  const posts = [
    {
      year: 2022,
      title: "Chegando a dois anos como dev, o que aprendi?",
      link: "https://medium.com/@trickaugusto2/chegando-a-dois-anos-como-dev-o-que-aprendi-d007d1a1a5a2",
      image: "/cafe.png"
    },
    {
      year: 2022,
      title: "Lógica e algoritmos!",
      link: "https://trickaugusto2.medium.com/l%C3%B3gica-e-algoritmos-35a0f7ad9d24",
      image: "/logicaalgoritmo.jpeg"
    },
    {
      year: 2021,
      title: "Heranças Horizontais com Traits em PHP",
      link: "https://trickaugusto2.medium.com/heran%C3%A7as-horizontais-com-traits-em-php-8a31929da2fd",
      image: "/traitsphp.png"
    },
    {
      year: 2021,
      title: "Interfaces de Objetos",
      link: "https://trickaugusto2.medium.com/interfaces-de-objetos-a54ae75dee94",
      image: "/interface.png"
    },
  ]

  return (
    <>
      <a id="top-page"></a>
      <Header />

      <div className={homeStyle.bodyContent}>
        <h2 className={`${roboto.className} ${homeStyle.titleExperience}`}>ABOUT</h2>

        <div>
          <About />
        </div>

        <h2 className={`${roboto.className} ${homeStyle.titleExperience}`}>EXPERIENCE</h2>

        <div id="experiences">
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              years={experience.years}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}

        </div>

        <h2 className={`${roboto.className} ${homeStyle.titleExperience}`}>PROJECTS</h2>

        <div id="projects">
          {projects.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        <h2 className={`${roboto.className} ${homeStyle.titleExperience}`}>POSTS</h2>

        <div id="posts">
          {posts.map((post, index) => (
            <Posts
              key={index}
              year={post.year}
              title={post.title}
              link={post.link}
              image={post.image}
            />
          ))}

          <a className={homeStyle.seeMore} href="https://trickaugusto2.medium.com/">
            <h3>See more posts!</h3>
          </a>
        </div>

      </div>

    </>
  )
}
