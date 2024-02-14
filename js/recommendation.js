import { parseRedirectLink, parseExtension, decodeString } from "./url-parser.js"
import { buildRecommendationAdFrame } from "./frame-builder.js"
import { DUMMY_PIC } from "./fetch.js"
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
    #created

    constructor(recommendation) {
        const {
            origin,
            thumbnail,
            description,
            url,
            branding,
            name,
            created } = recommendation;
        this.#created = created;
        this.#redirect = parseRedirectLink(url);
        this.#caption = name;
        this.#description = description;
        this.#type = origin;
        this.#mediaContent = decodeString(thumbnail[0].url);
        this.#adSource = branding;
    }

    render(width, height) {
        const ext = parseExtension(this.#mediaContent);
        let adFrame = null;
        try {
            adFrame = buildRecommendationAdFrame(width, height, this.#mediaContent, ext[0], this.#caption, this.#adSource);
        } catch (err) {
            adFrame = buildRecommendationAdFrame(width, height, DUMMY_PIC, '.jpg', this.#caption, this.#adSource);
        }
        adFrame.setAttribute('onclick', `window.open('${this.#redirect}','_blank')`);
        return adFrame;
    }

}