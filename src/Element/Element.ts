/**
 * Element provides a way for us to render out an HTML element once and then pass it to the renderer.
 * Much like in react and other frameworks, it is the basic unit for front-end abstraction.
 */
export class Element {
    private _element: HTMLElement
    get element(): HTMLElement {
        if (this._element) return this._element

        this._element = this.render()

        return this._element
    }

    private render(): HTMLElement {
        const $p = document.createElement('p')
        $p.innerHTML = 'default element'
        return $p
    }
}