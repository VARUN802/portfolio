import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterIconlight from '../../assets/twitter-light.svg'
import twitterIcondark from '../../assets/twitter-dark.svg'
import gitHublight from '../../assets/github-light.svg'
import gitHubdark from '../../assets/github-dark.svg'
import linkedinIconlight from '../../assets/linkedin-light.svg'
import linkedinIcondark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme,toggleTheme}=useTheme()
    
    const themeIcon=theme==='light'?sun:moon;
    const twitterIcon=theme==='light'?twitterIconlight:twitterIcondark;
    const linkedinIcon=theme==='light'?linkedinIconlight:linkedinIcondark;
    const githubIcon=theme==='light'?gitHublight:gitHubdark;
  return (
    <section id='hero' className={styles.container}>
    <div className='styles.colorModeContainer'>
        <img className={styles.hero} src={heroImg} alt='Profile pitcure of Varun Kumar'></img>
        <img className={styles.colorMode} onClick={toggleTheme} src={themeIcon} alt="color theme"></img>
    </div>
    <div className={styles.info}>

        <h1>Varun <br></br>Kumar</h1>
        <h2>Full Stack Developer</h2>
        <span>
            <a href='https://x.com/varun802' target='_blank'><img  alt='Twitter Icon' src={twitterIcon}
            ></img> </a>
            <a href='https://github.com/VARUN802' target='_blank'><img  alt='github Icon' src={githubIcon}
            ></img> </a>
            <a href='https://www.linkedin.com/in/varun-kumar-02946223b/' target='_blank'><img  alt='linkedin Icon' src={linkedinIcon}
            ></img> </a>
        </span>
        <p className={styles.description}>Full-stack developer with a passion for building modern, scalable web applications using React and Node.js, dedicated to transforming commercial business needs into dynamic digital solutions.</p>
        <a href={CV} download><button className='hover' >Resume</button></a>


    </div>
      
    </section>
  )
}

export default Hero
