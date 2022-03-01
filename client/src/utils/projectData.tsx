import { Link } from 'react-router-dom'

// logo images
import {ReactComponent as ReactLogo} from '../assets/logos/react.svg'
import {ReactComponent as NextLogo} from '../assets/logos/nextjs.svg'
import {ReactComponent as NodejsLogo} from '../assets/logos/node-js.svg'
import {ReactComponent as MongoDBLogo} from '../assets/logos/mongodb.svg'
import {ReactComponent as ExpressjsLogo} from '../assets/logos/express-js.svg'
import {ReactComponent as HTMLLogo} from '../assets/logos/html5.svg'
import {ReactComponent as CSSLogo} from '../assets/logos/css3.svg'
import {ReactComponent as JavascriptLogo} from '../assets/logos/javascript.svg'
import {ReactComponent as TypescriptLogo} from '../assets/logos/typescript.svg'
import {ReactComponent as WebpackLogo} from '../assets/logos/webpack.svg'
import {ReactComponent as BabelLogo} from '../assets/logos/babel.svg'
import {ReactComponent as SassLogo} from '../assets/logos/sass.svg'
import {ReactComponent as GitHubLogo} from '../assets/logos/github.svg'
import {ReactComponent as AdobeXDLogo} from '../assets/logos/adobe-xd.svg'
import {ReactComponent as GimpLogo} from '../assets/logos/gimp.svg'
import {ReactComponent as XMindLogo} from '../assets/logos/xmind.svg'
import {ReactComponent as InkScapeLogo} from '../assets/logos/inkscape.svg'
import {ReactComponent as WordPressLogo} from '../assets/logos/wordpress.svg'
import {ReactComponent as PHPLogo} from '../assets/logos/php.svg'
import {ReactComponent as ElementorLogo} from '../assets/logos/elementor.svg'

//  Pictures
import FreecycleOriginal from '../assets/original.png';
import IPTrackerThumbnail from '../assets/ip-tracker-thumbnail.png';
import CROCThumbnail from '../assets/croc-thumbnail_500.png';
import WPRestReactThumbnail from '../assets/keto-blog-thumbnail_500.png';
import DivDataThumbnail from '../assets/div-data.jpg';
import WTDThumbnail from '../assets/wtd.jpg';
import EquineThumbnail from '../assets/equine.jpg';
import CROCThumbnail_Wireframe from '../assets/svg/cro-convergence-wireframe.svg'
import WPRestReactThumbnail_Wireframe from '../assets/svg/keto-blog-wireframe.svg'
import DivDataThumbnail_Wireframe from '../assets/svg/div-data-wireframe.svg'
import WTDThumbnail_Wireframe from '../assets/svg/wtd-wireframe.svg'
import EquineThumbnail_Wireframe from '../assets/svg/equine-wireframe.svg'
import IPTrackerThumbnail_Wireframe from '../assets/svg/equine-wireframe.svg'


import ipTrackerDesktop from '../assets/device-images/ip-tracker-desktop.png'
import ipTrackerTablet from '../assets/device-images/ip-tracker-tablet.png'
import ipTrackerMobile from '../assets/device-images/ip-tracker-mobile.png'
import divDataDesktop from '../assets/device-images/div-data-desktop_500.png'
import crocDesktop from '../assets/device-images/croc-desktop_500.png'
import crocTablet from '../assets/device-images/croc-tablet_200.png'
import crocMobile from '../assets/device-images/croc-mobile_150.png'
import WPRestReactDesktop from '../assets/device-images/wp-rest-react-desktop_500.png'
import WPRestReactTablet from '../assets/device-images/wp-rest-react-tablet_200.png'
import WPRestReactMobile from '../assets/device-images/wp-rest-react-mobile_150.png'
import wtdDesktop from '../assets/device-images/wtd-desktop_500.png'
import wtdTablet from '../assets/device-images/wtd-tablet_200.png'
import wtdMobile from '../assets/device-images/wtd-mobile_150.png'
import equineDesktop from '../assets/device-images/equine-desktop_500.png'
import equineTablet from '../assets/device-images/equine-tablet_200.png'
import equineMobile from '../assets/device-images/equine-mobile_150.png'

export const technologyLogos: Map<technologies, any> = new Map(
  [
    ["react", {src: <ReactLogo />, alt: "React.js logo"}],
    ["next", {src: <NextLogo />, alt: "Next.js logo"}],
    ["node", {src: <NodejsLogo />, alt: "Node.js logo"}],
    ["mongodb", {src: <MongoDBLogo />, alt: "Mongo DB logo"}],
    ["express", {src: <ExpressjsLogo />, alt: "Express.js logo"}],
    ["html", {src: <HTMLLogo />, alt: "HTML5 logo"}],
    ["css", {src: <CSSLogo />, alt: "CSS3 logo"}],
    ["scss", {src: <SassLogo />, alt: "Sass logo"}],
    ["javascript", {src: <JavascriptLogo />, alt: "Javascript logo"}],
    ["typescript", {src: <TypescriptLogo />, alt: "Typescript logo"}],
    ["webpack", {src: <WebpackLogo />, alt: "Webpack logo"}],
    ["babel", {src: <BabelLogo />, alt: "Babel logo"}],
    ["github", {src: <GitHubLogo />, alt: "Github logo"}],
    ["adobexd", {src: <AdobeXDLogo />, alt: "Adobe XD logo"}],
    ["gimp", {src: <GimpLogo />, alt: "GNU Image Manipulation Program (GIMP) logo"}],
    ["xmind", {src: <XMindLogo />, alt: "X-mind logo"}],
    ["inkscape", {src: <InkScapeLogo />, alt: "Inkscape logo"}],
    ["wordpress", {src: <WordPressLogo />, alt: "WordPress logo"}],
    ["elementor", {src: <ElementorLogo />, alt: "Elementor logo"}],
    ["php", {src: <PHPLogo />, alt: "PHP logo"}],
  ]
)

const data: projectData[] = [
  { accessor: "keto-blog",
    title: "Lifestyle Blog",
    thumbnailImgs: {
      wireframe: {src: WPRestReactThumbnail_Wireframe, alt: `Wireframe thumbnail picture for the website build for a lifestyle blog, connected to a Wordpress CMS`},
      thumbnail: {src: WPRestReactThumbnail, alt: `Thumbnail picture for the website build for a lifestyle blog, connected to a Wordpress CMS`},
    },
    deviceImgs: [
      {accessor: "desktop", src: WPRestReactDesktop},
      {accessor: "tablet", src: WPRestReactTablet},
      {accessor: "mobile", src: WPRestReactMobile},
    ],
    cardContent: <p>A blogging website running on a Wordpress CMS and a front-end created with React, connected via the Wordpress REST API. Features a custom bundling solution, unit testing and optimisation.</p>,
    technologies: [
      "html",
      "css",
      "javascript",
      "github",
      "scss",
      "react",
      "wordpress",
      "typescript",
      "babel",
      "webpack",
      "gimp",
    ],
    sections: [
      { title: "Description", 
        content: <>
          <p>For this project, I created a fully responsive blogging website that connects content stored in a Wordpress CMS, with a front-end that runs on React, via the Wordpress REST API. The front-end code is bundled and transpiled using a combination of Webpack, Babel and Typescript.</p>
            
            <p>To give any visitors a better user experience and reduce data transfer requirements, I performed optimisation enhancements, utilising session storage to cache data fetched from the server, and optimised front-end image assets. Furthermore, I created automated unit tests, to improve reliability for users.</p>

          <p>I undertook this process to better understand the Wordpress CMS, for use in my freelancing business, as well as push my web development knowledge by implementing my custom bundling solution. The blog is not currently being used; however I do intend to make a public blog in the future. </p>
        </>
      },
      { title: "Quick-Look Features", 
        content: <>
        <ul>
          <li>Wordpress CMS, Integrated Using Wordpress REST API</li>
          <li>Responsive Website</li>
          <li>Data Caching with Session Storage</li>
          <li>Image Optimisation</li>
          <li>Unit Testing With Jest</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: "https://github.com/TGH37/keto-blog"},
      {accessor: "site", href: "https://wordpress-react-template.herokuapp.com/"},
    ],
    colorStops: ["white"]
  },
  { accessor: "croc",
    title: "CRO Convergence Website Build",
    thumbnailImgs: {
      wireframe: {src: CROCThumbnail_Wireframe, alt: `Wireframe thumbnail picture for the website build for CRO-Convergence`},
      thumbnail: {src: CROCThumbnail, alt: `Thumbnail picture for the website build for CRO-Convergence`},
    },
    deviceImgs: [
      {accessor: "desktop", src: crocDesktop},
      {accessor: "tablet", src: crocTablet},
      {accessor: "mobile", src: crocMobile},
    ],
    cardContent: <p>A static website built with Next.js as a place for prospective customers for a freelancing business I am involved in.</p>,
    technologies: [
      "next",
      "html",
      "css",
      "javascript",
      "typescript",
      "scss",
      "github",
      "adobexd",
      "gimp",
    ],
    sections: [
      { title: "Description", 
        content: <>
          <p>
            This project features a static website built with Next.js, as a place for prospective customers for a freelancing business I am involved in, to get a feel for the company and get any information they may require.
          </p>

          <p>
            This project was a good opportunity to improve my skills with technologies and processes associated with designing a website, as well as creative skills such as logo-design and copy writing. It also served as a good opportunity to gain a more in-depth knowledge of how Next.js works as well as introducing myself to emailing services, such as email.js.
          </p>

          <p>
            I decided to build this project as a static site, without use of a CMS (at least for now), as regular content updates or company announcements are not required. The site is not expected to see a lot of traffic, as the majority of the marketing is done in-person, so the free tier of email.js is also ample for the current requirements of the business.
          </p>
        </>
      },
      { title: "Improvements Made", 
        content: <>
        <ul>
          <li>Responsive Website</li>
          <li>Simplified Colour Palette</li>
          <li>Enhanced User Features</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: "https://github.com/TGH37/cro-business"},
      {accessor: "site", href: "https://convergence-cro-j26aaqvvd-tgh37.vercel.app/"},
      {accessor: "wireframe", href: "https://xd.adobe.com/view/10731ff7-f901-4cb0-b6e9-7667dde56b40-4520/?fullscreen"},
    ],
  },
  { accessor: "div-data",
    title: "Dividend Data Website Rebuild",
    thumbnailImgs: {
      wireframe: {src: DivDataThumbnail_Wireframe, alt: `Wireframe thumbnail picture for the dividend data website clone project`},
      thumbnail: {src: DivDataThumbnail, alt: `Thumbnail picture for the dividend data website clone project`},
    },
    deviceImgs: [
      {accessor: "desktop", src: divDataDesktop},
    ],
    cardContent: <p>A rebuild of <a href="https://www.dividenddata.co.uk" target="_blank">www.dividenddata.co.uk</a>, built with MERN stack technologies and Next.js. Features a custom charting library that I built using HTML Canvas API and Object Orientated Programming (OOP) in vanilla Javascript. A static website built with Next.js as a place for prospective customers for a freelancing business I am involved in.</p>,
    technologies: [
      "react",
      "next",
      "html",
      "css",
      "javascript",
      "typescript",
      "babel",
      "mongodb",
      "scss",
      "github",
      "adobexd",
    ],
    sections: [
      { title: "Description", 
        content: <>
          <p>
          This project is to rebuild of the website <a href="https://www.dividenddata.co.uk" target="_blank">www.dividenddata.co.uk</a>, a popular tool for researching upcoming dividends for companies listed in the UK. It features a front-end created in Next.js, that connects to a MongoDB database, stored with MongoDB Atlas.  
          </p>

          <p>
          The aim of this project was to focus more on my abilities with HTML5 elements such as the table and canvas APIs, as well as my OOP abilities with vanilla Javascript. I therefore picked a website that required less creative expertise and more technical expertise, as well as fitting well with what I find interesting. 
          </p>

          <p>
          I got a lot out of this project, learning how to implement query-based content, next.js routing and data fetching, as well as solidifying my vanilla Javascript skills. I found that my knowledge gained from my previous experience as an engineer, as well as a little experience in game programming, really helped me when it came to figuring out the underlying arithmetic required for generating chart graphics from scratch. 
          </p>
        </>
      },
      { title: "Quick-Look Features", 
        content: <>
        <ul>
          <li>Responsive Website</li>
          <li>Extensive Work with HTML5 Canvas API</li>
          <li>Object Orientated Programming (OOP)</li>
          <li>Query-based Table Filtering</li>
          <li>Cloud-hosted MongoDB Database</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: "https://github.com/TGH37/dividend-data-remake"},
      {accessor: "site", href: "https://dividend-data-remake-pybv2ukz7-tgh37.vercel.app/"},
    ],
  },
  { accessor: "wtd",
    title: "Wingtip Digital",
    thumbnailImgs: {
      wireframe: {src: WTDThumbnail_Wireframe, alt: `Wireframe thumbnail picture for my freelancing website 'Wingtip Digital'`},
      thumbnail: {src: WTDThumbnail, alt: `Thumbnail picture for my freelancing website 'Wingtip Digital'`},
    },
    deviceImgs: [
      {accessor: "desktop", src: wtdDesktop },
      {accessor: "tablet", src:  wtdTablet },
      {accessor: "mobile", src:  wtdMobile },
    ],
    cardContent: <p>A Wordpress website hosted and configured with Siteground. Features pages created with a mix of the 'Elementor' page-builder and the vanilla WordPress block editor 'Gutenberg', with advanced customisation of elements using custom HTML blocks and CSS</p>,
    technologies: [
      "html",
      "css",
      "javascript",
      "wordpress",
      "elementor",
      "gimp",
      "xmind",
      "adobexd",
      "inkscape",
    ],
    sections: [
      { title: "Description", 
        content: <>
          <p>Wingtip Digital is the name of my freelancing business, aimed at providing a wide range of digital services for clients, as well as providing useful content for people visiting the platform</p>
            
          <p>The website is created using WordPress and is hosted with Siteground. The design is widely implemented using Elementor, a page-building plugin, with advanced customisations being implemented using custom HTML blocks and CSS styling.</p>

          <p>The freelancing work that I have secured so far has largely been working with the Hubspot platform to create landing pages for advertising campaigns, and providing technical support for clients.</p>
        </>
      },
      { title: "Quick-Look Features", 
        content: <>
        <ul>
          <li>Wordpress CMS</li>
          <li>Responsive Website</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "site", href: "https://wingtipdigital.com/"},
    ],
    colorStops: ["white"]
  },
  { accessor: "equine",
    title: "Equine Eventing Example Website",
    thumbnailImgs: {
      wireframe: {src: EquineThumbnail_Wireframe, alt: `Wireframe thumbnail picture for the 'Equine Eventing Services' wordpress project`},
      thumbnail: {src: EquineThumbnail, alt: `Thumbnail picture for the 'Equine Eventing Services' wordpress project`},
    },
    deviceImgs: [
      {accessor: "desktop", src: equineDesktop},
      {accessor: "tablet", src:  equineTablet },
      {accessor: "mobile", src:  equineMobile },
    ],
    cardContent: <p>A WordPress website created using Elementor and Gutenberg block editors, featuring custom blocks, created with HTML, PHP and Javascript for dynamic content</p>,
    technologies: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "gimp",
      "xmind",
      "adobexd",
      "inkscape",
    ],
    sections: [
      { title: "Description", 
        content: <>
          <p>Equine Eventing Services is a website created with WordPress and hosted with Siteground, for a showjump training company. The design of the website is implemented using a combination of 'Elementor' and 'Gutenberg' block builders, with advanced customisation implemented with custom HTML and CSS</p>
            
            <p>I created custom blocks using HTML, PHP and Javascript, for dynamic elements to the site. Thes blocks pull attribute information from custom 'Horse' posts that are created by the user and are displayed throughout the site</p>

          <p>I designed the website and assets from scratch using design tools such as AdobeXD, Inkscape and GNU Image Manipulation Processor &#40;GIMP&#41;, before committing to fully develop the site so I could trial quick design changes without having to invest more time and effort than was necessary.</p>
        </>
      },
      { title: "Quick-Look Features", 
        content: <>
        <ul>
          <li>Custom Blocks</li>
          <li>Responsive Website</li>
          <li>Advanced CSS Styling</li>
          <li>Design Wireframes / Prototypes</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "site", href: "https://equineeventing.wingtipdigital.com/"},
      {accessor: "prototype", href: "https://xd.adobe.com/view/0e9ed0c5-d56f-4ed7-b828-4af4406944d9-5bcd/?fullscreen"},
      // {accessor: "wireframe", href: ""},
    ],
    colorStops: ["white"]
  },
  // { accessor: "ipTracker",
  //   title: "IP Address Tracker",
  //   thumbnailImgs: {
  //     wireframe: {src: IPTrackerThumbnail_Wireframe, alt: `Wireframe thumbnail picture for the website build for a lifestyle blog, connected to a Wordpress CMS`},
  //     thumbnail: {src: IPTrackerThumbnail, alt: `Thumbnail picture for the Freecycle Remaster project, showing the original design of the website`},
  //   },
  //   deviceImgs: [
  //     {accessor: "desktop", src: ipTrackerDesktop},
  //     {accessor: "tablet", src: ipTrackerTablet},
  //     {accessor: "mobile", src: ipTrackerMobile},
  //   ],
  //   cardContent: <p>[InsertContent]</p>,
  //   technologies: [
  //     "html",
  //     "css",
  //     "javascript",
  //     "github",
  //   ],
  //   sections: [
  //     { title: "Description", 
  //       content: <>
  //         <p>For this project, I created a fully responsive blogging website that connects content stored in a Wordpress CMS, with a front-end that runs on React, via the Wordpress REST API. The front-end code is bundled and transpiled using a combination of Webpack, Babel and Typescript.</p>
            
  //           <p>To give any visitors a better user experience and reduce data transfer requirements, I performed optimisation enhancements, utilising session storage to cache data fetched from the server, and optimised front-end image assets. Furthermore, I created automated unit tests, to improve reliability for users.</p>

  //         <p>I undertook this process to better understand the Wordpress CMS, for use in my freelancing business, as well as push my web development knowledge by implementing my custom bundling solution. The blog is not currently being used; however I do intend to make a public blog in the future. </p>
  //       </>
  //     },
  //     { title: "Quick-Look Features", 
  //       content: <>
  //       <ul>
  //         <li>Wordpress CMS, Integrated Using Wordpress REST API</li>
  //         <li>Responsive Website</li>
  //         <li>Data Caching with Session Storage</li>
  //         <li>Image Optimisation</li>
  //         <li>Unit Testing With Jest</li>
  //       </ul>
  //     </>
  //     },
  //   ],
  //   links: [
  //     {accessor: "code", href: "https://github.com/TGH37/ip-tracker"},
  //     {accessor: "site", href: "https://ip-tracker-livid.vercel.app/"},
  //   ],
  //   colorStops: ["white"]
  // },
];


export default data;