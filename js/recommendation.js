// const adContentTypes = {
//     organic: "organic",
//     sponsored: "sponsored",
//     video: "video",
//     audio: "audio",
//     minigame: "minigame"    

// }

class SuggestedAdItem {

    #mediaContent
    #caption
    #type
    #adSource

    constructor(mediaContent, caption, type, adSource) {
        this.#caption = caption;
        this.#type = type;
        this.#mediaContent = mediaContent;
        this.#adSource = adSource;
    }

    

}