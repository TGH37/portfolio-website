import type { ReactElement } from "react";
import { ProjectAccessor } from "../contexts/GlobalCtx";

export type Device = "desktop" | "tablet" | "mobile"

export type technologies = "react" 
| "next" 
| "node" 
| "mongodb" 
| "express" 
| "html" 
| "css"
| "scss"
| "javascript"
| "typescript"
| "webpack"
| "babel"
| "github"
| "adobexd"
| "gimp"
| "inkscape"
| "xmind"

type apis = "openmap"
| "stripe"
| "paypal"

type npmPackages = "chartjs"
| "jwt"
| "slatejs"

type viewingOptions = "code"
| "site"
| "docs"

export type deviceIcon = "desktop" | "tablet" | "mobile";

export interface projectData {
    accessor: ProjectAccessor
    title: string
    imgs?: any[]
    thumbnailImgs: {wireframe: {src: string, alt: string}, thumbnail: {src: string, alt: string}}
    deviceImgs: Array<{accessor: deviceIcon, src: any}>
    cardContent: JSX.Element
    technologies: technologies[],
    sections: Array<{title: string, content: JSX.Element}>
    links: Array<{accessor: viewingOptions, href: string}>
}

export type projectNames = "freecycle"
| "croc"
| "ipTracker"
| "divData"
