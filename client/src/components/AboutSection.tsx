import styles from '../styles/css/about.module.css';
import Me_500 from '../assets/photos/me_grayscale_500.png';
import Me_768 from '../assets/photos/me_grayscale_768.png';
import Me_1024 from '../assets/photos/me_grayscale_1024.png';
import SVGMask from './SVGMask';


interface Props {};

function AboutSection(props: Props) {
    const {} = props;

    return (
        <section id="about">
            <h1 className={styles.sectionTitle}>About Me</h1>
            <div className={styles.aboutContainer}>
                <h3 className={styles.aboutHeader}>
                    Hi, I'm Tom<br/>A former engineer turned freelance web developer, specialising in (but not limited to) <strong>MERN stack</strong> technologies.
                </h3>
                <div className={`${styles.contentContainer}`}>
                    <div className={`${styles.imgContainer}`} >
                        <img 
                            src={Me_500} 
                            alt="Tom Hayton, full-stack website developer"
                            className={`${styles.aboutImg}`}
                            loading="lazy"
                            srcSet={`
                            ${Me_500} 500w,
                            ${Me_768} 768w,
                            ${Me_1024} 1024w,
                            `} 
                            sizes={`
                            `}
                        />
                        <SVGMask />
                    </div>
                    <div className={styles.aboutCopyContainer}>
                        <p>
                            After switching careers from engineering to web development, I have dedicated my time to learning the skills required to provide web development services in a professional capacity, starting a freelancing business along the way.
                        </p>
                        <p> 
                            I am completely self-taught, learning from numerous online sources as well as busting out the good old-fashioned elbow grease and completing projects and challenges I have set myself to test my skills. I've learned a good deal about the technologies and processes involved, across the stack, to take a web app from concept to deployment.  
                        </p>
                        <p>
                            My academic and professional experience as an engineer has given me plenty of skills that I find myself using in my work as a web developer. Having plenty of experience working with teams of various sizes, clients of many different backgrounds, and managing a wide spectrum of projects, I have a rounded skill set that gives me the tools and confidence to take on any challenge.
                        </p>
                    </div>

                </div>
                {/* <h3 className={styles.quote}>
                    <span>We are what we repeatedly do...<br/>Excellence, therefore, isn't just an act, but a habit</span>
                    <br/><br/>
                    - Aristotle
                </h3> */}
            </div>
        </section>
    );
};

export default AboutSection;
