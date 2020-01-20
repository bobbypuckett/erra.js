import { IRouter } from "./IRouter";
import { Renderer } from "../Renderer/Renderer"
import { Element } from "../Element/Element"

/**
 * HashRouter routes your pages based on the location.hash
 * 
 * For instance, if location.hash changes from "#home" to "#about", the HashRouter will render the about page. 
 */
export class HashRouter implements IRouter {
    pages: Array<Element>
    renderer: Renderer

    constructor(pages: Array<Element>) {
        this.pages = pages
        this.renderer = new Renderer(pages, this.getCleanHash(), document.querySelector('body'))
    }

    route() {
        const hash = this.getCleanHash()
        this.renderer.currentPage = hash
    };

    getCleanHash() {
        const baseHash = location.hash
        const lowercaseHash = baseHash.toLowerCase()
        const hashmarkRemovedHash = lowercaseHash.replace('#', '')

        const replacedHash = hashmarkRemovedHash.length > 0 ? hashmarkRemovedHash : 'home'

        return replacedHash
    }
}