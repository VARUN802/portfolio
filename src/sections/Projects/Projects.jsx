
import styles from './ProjectsStyles.module.css'

import ProjectCard from '../../common/ProjectCard'
import portfoliodark from '../../assets/projectss.png'
import portfoliolight from '../../assets/projectss2.png'
import CardGame from '../../assets/cardproject.jpg'
import { useTheme } from '../../common/ThemeContext'

function Projects() {
    const {theme}=useTheme()
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={theme=='light'?portfoliodark:portfoliolight} link={'#'} h3={'Portfolio'} p={'Digital portfolio'}></ProjectCard>
          <ProjectCard src={CardGame} link={'#'} h3={'Card Guess Game'} p={'COMING SOON'}></ProjectCard>
        </div>
      
    </section>
  )
}

export default Projects
