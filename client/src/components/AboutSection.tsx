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
                <h3>
                    I’m a full-stack web developer, specialising in (but not limited to) working with MERN stack technologies.<br/>Please have a snoop around any of my projects and if you like what you see, get in touch!
                </h3>
                <div className={`${styles.contentContainer}`}>
                    <div className={styles.aboutContent}>
                    <p> 
                        I’ve been filling up my portfolio with personal projects for just over a year, after leaving my career in engineering, to follow the work that I am most passionate about.
                    </p>
                    <p> 
                        I've undertaken a wide range of projects that have all tested and cemented my skills in many different ways, from creative design, to technical implementation.
                    </p>
                    <p>
                        My academic and professional experience as an engineer has given me plenty of skills that I find myself using in my work as a web developer. Having plenty of experience working with teams of various sizes, clients of many different backgrounds and managing a wide spectrum of projects, I have a rounded skillset that gives me the tools and confidence to take on any challenge.
                    </p>

                    </div>
                    <div className={`${styles.imgContainer}`} >
                        <img 
                            src={Me_500} 
                            alt="Tom Hayton, full-stack website developer"
                            className={`${""}`}
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
                </div>
                <h3 className={styles.quote}>
                    <span>We are what we repeatedly do...<br/>Excellence, therefore, isn't just an act, but a habit</span>
                    <br/><br/>
                    - Aristotle
                </h3>
            </div>
        </section>
    );
};

export default AboutSection;
