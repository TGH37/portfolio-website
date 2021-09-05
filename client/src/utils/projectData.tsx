import type { projectData, technologies } from '../interfaces';
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
import {ReactComponent as SassLogo} from '../assets/logos/sass.svg'
import {ReactComponent as GitHubLogo} from '../assets/logos/github.svg'
import {ReactComponent as AdobeXDLogo} from '../assets/logos/adobe-xd.svg'
import {ReactComponent as GimpLogo} from '../assets/logos/gimp.svg'
import {ReactComponent as XMindLogo} from '../assets/logos/xmind.svg'

//  Pictures
import FreecycleOriginal from '../assets/original.png';
import IPTrackerThumbnail from '../assets/ip-tracker-thumbnail.png';
import CROCThumbnail from '../assets/croc-thumbnail.png';
import ipTrackerDesktop from '../assets/device-images/ip-tracker-desktop.png'
import ipTrackerTablet from '../assets/device-images/ip-tracker-tablet.png'
import ipTrackerMobile from '../assets/device-images/ip-tracker-mobile.png'
import crocDesktop from '../assets/device-images/croc-desktop.png'
import crocTablet from '../assets/device-images/croc-tablet.png'
import crocMobile from '../assets/device-images/croc-mobile.png'

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
    ["github", {src: <GitHubLogo />, alt: "Github logo"}],
    ["adobexd", {src: <AdobeXDLogo />, alt: "Adobe XD logo"}],
    ["gimp", {src: <GimpLogo />, alt: "GNU Image Manipulation Program (GIMP) logo"}],
    ["xmind", {src: <GimpLogo />, alt: "X-mind logo"}],
  ]
)

const data: projectData[] = [
  { accessor: "freecycle",
    title: "Freecycle Remaster",
    imgs: [
      {src: FreecycleOriginal, alt: `Thumbnail picture for the Freecycle Remaster project, showing the original design of the website`}, 
    ],
    deviceImgs: [
      {accessor: "desktop", src: FreecycleOriginal},
      {accessor: "tablet", src: FreecycleOriginal},
      {accessor: "mobile", src: FreecycleOriginal},
    ],
    cardContent: <p>Nisi ullamco minim laborum adipisicing velit occaecat cillum reprehenderit nostrud laborum sint tempor cillum ullamco. Aliquip esse quis dolor aute laborum consequat. Amet enim pariatur dolore irure eu excepteur eiusmod labore mollit consectetur commodo sit elit.</p>,
    technologies: [
      "react", 
      "node",
      "mongodb",
      "express",
      "html",
      "css",
      "javascript",
      "github",
      "adobexd",
      "gimp",
    ],
    sections: [
      { title: "Description", 
        content: <p>For this project, I chose to completely remake and remaster <a href="https://www.freecycle.org/">freecycle.org</a>, using <strong>MERN</strong> stack technologies. The remastered website uses branding assets taken from the original website and social media. Freecycle is a website that enables users to offer their discarded items to other, local users for free. It is a non-for-profit organisation run mainly by volunteers.</p>
      },
      { title: "Improvements Made", 
        content: <><span>Please see <Link to="#">handover documentation</Link> for more information</span>
        <ul>
          <li>Responsive Website</li>
          <li>Simplified Colour Palette</li>
          <li>Enhanced User Features</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: ""},
      {accessor: "site", href: ""},
      {accessor: "docs", href: ""},
    ],
  },

  { accessor: "ipTracker",
    title: "IP Address Tracker App",
    imgs: [
      {src: IPTrackerThumbnail, alt: `Thumbnail picture for the Freecycle Remaster project, showing the original design of the website`}, 
    ],
    deviceImgs: [
      {accessor: "desktop", src: ipTrackerDesktop},
      {accessor: "tablet", src: ipTrackerTablet},
      {accessor: "mobile", src: ipTrackerMobile},
    ],
    cardContent: <p>Nisi ullamco minim laborum adipisicing velit occaecat cillum reprehenderit nostrud laborum sint tempor cillum ullamco. Aliquip esse quis dolor aute laborum consequat. Amet enim pariatur dolore irure eu excepteur eiusmod labore mollit consectetur commodo sit elit.</p>,
    technologies: [
      // "html",
      // "css",
      // "javascript",
      // "github",
    ],
    sections: [
      { title: "Description", 
        content: <p>For this project, I chose to completely remake and remaster <a href="https://www.freecycle.org/">freecycle.org</a>, using <strong>MERN</strong> stack technologies. The remastered website uses branding assets taken from the original website and social media. Freecycle is a website that enables users to offer their discarded items to other, local users for free. It is a non-for-profit organisation run mainly by volunteers.</p>
      },
      { title: "Improvements Made", 
        content: <><span>Please see <Link to="#">handover documentation</Link> for more information</span>
        <ul>
          <li>Responsive Website</li>
          <li>Simplified Colour Palette</li>
          <li>Enhanced User Features</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: ""},
      {accessor: "site", href: ""},
      {accessor: "docs", href: ""},
    ],
  },
  { accessor: "croc",
    title: "CRO Convergence Website Build",
    imgs: [
      {src: CROCThumbnail, alt: `Thumbnail picture for the Freecycle Remaster project, showing the original design of the website`}, 
    ],
    deviceImgs: [
      {accessor: "desktop", src: crocDesktop},
      {accessor: "tablet", src: crocTablet},
      {accessor: "mobile", src: crocMobile},
    ],
    cardContent: <p>Nisi ullamco minim laborum adipisicing velit occaecat cillum reprehenderit nostrud laborum sint tempor cillum ullamco. Aliquip esse quis dolor aute laborum consequat. Amet enim pariatur dolore irure eu excepteur eiusmod labore mollit consectetur commodo sit elit.</p>,
    technologies: [
      // "react", 
      // "next",
      // "mongodb",
      // "html",
      // "css",
      // "javascript",
      // "typescript",
      // "github",
      // "adobexd",
      // "gimp",
    ],
    sections: [
      { title: "Description", 
        content: <p>For this project, I chose to completely remake and remaster <a href="https://www.freecycle.org/">freecycle.org</a>, using <strong>MERN</strong> stack technologies. The remastered website uses branding assets taken from the original website and social media. Freecycle is a website that enables users to offer their discarded items to other, local users for free. It is a non-for-profit organisation run mainly by volunteers.</p>
      },
      { title: "Improvements Made", 
        content: <><span>Please see <Link to="#">handover documentation</Link> for more information</span>
        <ul>
          <li>Responsive Website</li>
          <li>Simplified Colour Palette</li>
          <li>Enhanced User Features</li>
        </ul>
      </>
      },
    ],
    links: [
      {accessor: "code", href: ""},
      {accessor: "site", href: ""},
      {accessor: "docs", href: ""},
    ],
  },
];


export default data;