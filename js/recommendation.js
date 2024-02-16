import { parseRedirectLink, parseExtension, decodeString } from "./url-parser.js"
import { getMimeTypeByExtension, getMediaType } from "./media-type-inspector.js"
import { DUMMY_PIC } from "./fetch.js"

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

    buildMediaContentAdFrame(width, height, src, ext) {
        const mediaContentWrapper = document.createElement('div');
        mediaContentWrapper.setAttribute('class', 'media-container');
        const mediaType = getMediaType(ext);
        const contentType = getMimeTypeByExtension(ext);
        const htmlTag = contentType.htmlTag;
        const mediaAdFrame = document.createElement(htmlTag);
        if (mediaType[0] !== 'video') {
            mediaAdFrame.setAttribute('src', src);
        } else {
            mediaAdFrame.setAttribute("controls", "");
            const source = document.createElement('source');
            source.setAttribute('src', src);
            source.setAttribute('type', contentType.mimeType);
            mediaAdFrame.append(source);
        }
        mediaAdFrame.setAttribute('width', width);
        mediaAdFrame.setAttribute('height', height);
        mediaAdFrame.setAttribute('type', contentType.mimeType);
        mediaAdFrame.setAttribute('onerror', `this.onerror=null;this.src='${DUMMY_PIC}';`);
        mediaContentWrapper.append(mediaAdFrame);
        return mediaContentWrapper;
    }

    buildRecommendationAdFrame(width, height, src, ext, caption, branding) {
        const mediaFrame = this.buildMediaContentAdFrame(width, height, src, ext);
        const recommendationContainer = document.createElement('div');
        recommendationContainer.setAttribute('class', 'ad-card');
        const captionContainer = document.createElement('div');
        captionContainer.innerHTML = `<h3>${caption}</h3>`;
        captionContainer.setAttribute('class', 'ad-caption-container');
        const brandingContainer = document.createElement('div');
        brandingContainer.innerHTML = `<h5>${branding}</h5>`;
        brandingContainer.setAttribute('class', 'ad-branding-container');
        recommendationContainer.append(mediaFrame, captionContainer, brandingContainer);
        return recommendationContainer;
    }

    render(width, height) {
        const ext = parseExtension(this.#mediaContent);
        let adFrame = null;
        try {
            adFrame = this.buildRecommendationAdFrame(width, height, this.#mediaContent, ext[0], this.#caption, this.#adSource);
        } catch (err) {
            adFrame = this.buildRecommendationAdFrame(width, height, DUMMY_PIC, '.jpg', this.#caption, this.#adSource);
        }
        adFrame.setAttribute('onclick', `window.open('${this.#redirect}','_blank')`);
        return adFrame;
    }

}