/**
 * A (Short for "A Element Maker") is a wrapper around "document.createElement()" and allows for succinct
 * creation of common elements.
 * 
 * Example usage: 
 * A.div({ class: "container__orage" }, [
 *  A.h1({ class: "title" }, 'Hello World!')
 * ])
 * 
 * This renders out to 
 * <div class="container__orage">
 *  <h1 class: "title">Hello World!</h1>
 * </div
 */
export class A {
    static div (attributes: object, children: Array<HTMLElement>) {
        const $div = this._createContainer('div', attributes, children)
        return $div
      }
    
      static nav (attributes: object, children: Array<HTMLElement>) {
        const $nav = this._createContainer('nav', attributes, children)
        return $nav
      }
    
      static li (attributes: object, children: Array<HTMLElement>) {
        const $li = this._createContainer('li', attributes, children)
        return $li
      }
    
      static ul (attributes: object, children: Array<HTMLElement>) {
        const $ul = this._createContainer('ul', attributes, children)
        return $ul
      }
    
      static a (attributes: object, innerHTML: string) {
        const $a = this._createInnerHTML('a', attributes, innerHTML)
        return $a
      }
    
      static img (attributes: object) {
        const $img = this._createEmpty('img', attributes)
        return $img
      }
    
      static h1 (attributes: object, innerHTML: string) {
        const $h1 = this._createInnerHTML('h1', attributes, innerHTML)
        return $h1
      }
    
      static p (attributes: object, innerHTML: string) {
        const $p = this._createInnerHTML('p', attributes, innerHTML)
        return $p
      }
    
      static i (attributes: object, innerHTML: string) {
        const $i = this._createInnerHTML('i', attributes, innerHTML)
        return $i
      }
    
      static css (href) {
        const attributes = {
          rel: 'stylesheet',
          type: 'text/css',
          href: href
        }
    
        const $css = this._createEmpty('link', attributes)
    
        return $css
      }
    
      static style (attributes: object, styles) {
        const $style = this._createInnerHTML('style', attributes, styles)
        return $style
      }
    
      private static _createContainer (elementName: string, attributes: object, children: Array<HTMLElement>) {
        const $el = document.createElement(elementName)
    
        for (const a in attributes) {
          $el.setAttribute(a, attributes[a])
        }
    
        if (children) {
          for (const c of children) {
            $el.appendChild(c)
          }
        }
    
        return $el
      }
    
      private static _createInnerHTML (elementName: string, attributes: object, innerHtml: string) {
        const $el = document.createElement(elementName)
    
        for (const a in attributes) {
          $el.setAttribute(a, attributes[a])
        }
    
        if (innerHtml) {
          $el.innerHTML = innerHtml
        }
    
        return $el
      }
    
      private static _createEmpty (elementName, attributes) {
        const $el = document.createElement(elementName)
    
        for (const a in attributes) {
          $el.setAttribute(a, attributes[a])
        }
    
        return $el
      }
}