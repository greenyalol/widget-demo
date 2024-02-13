import { parseRedirectLink } from "./url-parser.js"
// const adContentTypes = {
//     organic: "organic",
//     sponsored: "sponsored",
//     video: "video",
//     audio: "audio",
//     minigame: "minigame"    

// }

export class SuggestedAdItem {

    #mediaContent
    #caption
    #type
    #adSource
    #description
    #redirect

    constructor(recommendation) {
        const {
            origin,
            thumbnail,
            description,
            url,
            branding,
            name } = recommendation;
        this.#redirect = parseRedirectLink(url);
        this.#caption = name;
        this.#description = description;
        this.#type = origin;
        this.#mediaContent = thumbnail;
        this.#adSource = branding;
    }



}