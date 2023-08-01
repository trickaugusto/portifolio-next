import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import { Roboto_Mono } from 'next/font/google'
import Projects from '@/components/Projects'
import homeStyle from '../styles/Home.module.css'

const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {

  const experiences = [
    {
      years: 'Mar 2023 - Present',
      title: 'Zhavia tecnologia',
      subtitle: 'Full stack developer',
      description: `
      Development and maintenance of web applications using Angular and PHP /Yii. Integration of WhatsApp APIs, both official and unofficial, to implement communication-related functionalities through the platform.
      Collaboration in agile teams, participating in planning meetings, code reviews, and following agile development methodologies.`,
      technologies: [
        'Angular',
        'PHP/Yii',
        'Next',
        'Nest',
        'Mysql'
      ],
    },
    {
      years: 'Jan 2023 - Present',
      title: 'Spartan Solucions - Europe',
      subtitle: 'Freelance',
      description: '    Development pontual features, with PHP/Laravel.',
      technologies: [
        'PHP/Laravel',
      ],
    },
    {
      years: 'Abr 2021 - Mar 2023',
      title: 'Webhelp Brasil',
      subtitle: 'Backend Developer',
      description: `
      PHP Back-end Programmer, specializing in API integrations using SOAP and REST, with a keen eye for troubleshooting existing code.
      Responsible for leading a team that provides support and analysis for the system in production, managing the flow of tasks related to these specific analyses using Kanban, identifying errors/improvements, and expediting resolutions.
      Mentor new developers joining the team, providing training on the daily tools and, depending on the developer's level, offering guidance on programming topics in general.
      Act as a Tech Writer, responsible for creating technical documentation, both for internal and external purposes.
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

  return (
    <>
      <Header />

      <div className={homeStyle.bodyContent}>
        <div id="about">
          <About/>
        </div>

        <h2 className={`${roboto.className} title-experience`}>EXPERIENCE</h2>

        <div id="experiences">
          {experiences.map((experience) => (
            <Experience
              key={experience}
              years={experience.years}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}

        </div>

        <h2 className={`${roboto.className} title-experience`}>PROJECTS</h2>

        <div id="projects">
          {projects.map((project) => (
            <Projects
              key={project}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>

    </>
  )
}
