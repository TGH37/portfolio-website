declare module '*.png';

type mediaBreakpoints = {
    xs?: boolean
    sm?: boolean
    md?: boolean
    lg?: boolean
};

type mediaBreakpointStrings = {
    xs: string
    sm: string
    md: string
    lg: string
};

interface ctxState {
  queryMatch?: mediaBreakpoints
  queries: mediaBreakpointStrings
};

interface projectData {
  accessor: ProjectAccessor
  title: string
  imgs?: any[]
  thumbnailImgs: {wireframe: {src: string, alt: string}, thumbnail: {src: string, alt: string}}
  deviceImgs: Array<{accessor: deviceIcon, src: any}>
  cardContent: JSX.Element
  technologies: technologies[],
  sections: Array<{title: string, content: JSX.Element}>
  links: Array<{accessor: viewingOptions, href: string}>
  colorStops?: string[]
};

type ProjectAccessor = "freecycle" | "croc" | "ipTracker" | "div-data" | 'keto-blog' | 'wtd' | 'equine';

type Device = "desktop" | "tablet" | "mobile"

type technologies = "react" 
| "next" 
| "node" 
| "mongodb" 
| "express" 
| "html" 
| "css"
| "scss"
| "javascript"
| "typescript"
| "php"
| "wordpress"
| "elementor"
| "webpack"
| "babel"
| "github"
| "adobexd"
| "gimp"
| "inkscape"
| "xmind"

  type HardSkill = "frontend" | "backend" | "auxiliary" | "design";

  interface ImageAttributes {
    src: string
    alt: string
  };

  interface Icon {
    accessor: Device
    icon: IconDefinition
    alt: string
};

interface VerboseRect {
  left: number
  right: number
  top: number
  bottom: number
  width: number
  height: number
};

interface SkillsObj {
  iconObj: ImageAttributes
  title: HardSkill
  skillsList: string[]
  isActive: boolean
  wasActive: boolean
  description: SerializedData[] | JSX.Element
};

interface SerializedLink {
  href: string
  noFollow?: boolean
}

interface SerializedData {
  type: "paragraph" | "heading"
  children: {
      text: string
      underlined?: boolean
      bold?: boolean
      link?: SerializedLink | null
  }[]
}