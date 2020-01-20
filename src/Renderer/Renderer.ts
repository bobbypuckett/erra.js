/**
 * The renderer... renders... output to the screen. In future versions, it will not append children, but clone them.
 */
export class Renderer {
    private _currentPage: string
    private _pages: any
    private _root: HTMLElement

    constructor(pages, currentPage, root) {
        this._pages = pages
        this._currentPage = currentPage
        this._root = root

        this._renderPage()
    }

    set currentPage(page) {
        this._currentPage = page

        this._renderPage()
    }

    _renderPage() {
        this._clearBody()

        if (this._pages[this._currentPage]) {
            this._root.appendChild(this._pages[this._currentPage]())
        } else {
            this._root.appendChild(this._pages.notFound())
        }
    }

    _clearBody() {
        while (this._root.firstChild) {
            this._root.firstChild.remove()
        }
    }
}
