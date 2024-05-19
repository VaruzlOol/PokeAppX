/**
 * Returns use class for management MatchMedia
 */

class UseMatchMedia {
    constructor(){
        this.mediaQuery = undefined;
        this.matchMedia = window?.matchMedia;
    }
    
    /**
     * assign [method] matchMedia to attribute from class
     * @param {method} matchMedia Somebody's name.
     * @example set {window.matchMedia}
     */
    setMatchMedia(matchMedia) {
        this.matchMedia = matchMedia;
    }

    /**
     * assign [value] mediaQuery to attribute from class
     * @param {string} mediaQuery
     * @example set {mediaQuery}
     */
    setMediaQuery(mediaQuery){
        this.mediaQuery = mediaQuery;
    }

    /**
     * return [function] 'matchMedia' from 'window' [object]
     * @param {string} mediaQuery
     * @example window.matchMedia("(prefers-color-scheme: dark)");
     * @returns {function} window.matchMedia("(prefers-color-scheme: dark)")
     */
    getMatchMedia(mediaQuery) {
        this.matchMedia = window?.matchMedia(mediaQuery ? mediaQuery : this.mediaQuery);
        return this.matchMedia;
    }

    /**
     * return matches from media query
     * @param {string} mediaQuery
     * @example window.matchMedia("(prefers-color-scheme: dark)").matches;
     * @returns {boolean} true || false
     */
    getMatches(mediaQuery) {
        return this.getMatchMedia(mediaQuery).matches;
    }

    /**
     * return media from media query
     * @param {string} mediaQuery
     * @example window.matchMedia("(prefers-color-scheme: dark)").media;
     * @returns {string} '(prefers-color-scheme: dark)'
     */
    getMedia(mediaQuery) {
        return this.getMatchMedia(mediaQuery).media;
    }

    /**
     * return if exists [function] 'matchMedia' in 'window' [object]
     * @example typeof(window?.matchMedia)
     * @returns {boolean} 'true || false
     */
    existsMatchMedia() {
        return typeof(window?.matchMedia) === "function" ? true : false;
    }
}

export default UseMatchMedia;