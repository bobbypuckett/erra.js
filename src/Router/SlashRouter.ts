import { IRouter } from "./IRouter";
import { Renderer } from "../Renderer/Renderer"
import { Element } from "../Element/Element"

export class SlashRouter implements IRouter {
    pages: Array<Element>
    renderer: Renderer

    constructor (pages: Array<Element>) {
        this.pages = pages
        this.renderer = new Renderer(pages, this.getCleanHash(), document.querySelector('body'))
    }

    route() {
        const hash = this.getCleanHash()
        this.renderer.currentPage = hash
    };

    getCleanHash() {
        const baseHash = location.pathname
        const lowercaseHash = baseHash.toLowerCase()

        const replacedHash = lowercaseHash.length > 0 ? lowercaseHash : 'home'

        return replacedHash
    }
}