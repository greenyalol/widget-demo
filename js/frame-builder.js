import { DUMMY_PIC } from "./fetch.js";

const mediaTypes = ['image', 'application', 'video', 'text'];

const mimeTypeExtensionsCollection = new Map([
    ['.png', { mimeType: 'image/png', htmlTag: 'img' }],
    ['.pdf', { mimeType: 'application/pdf', htmlTag: 'embed' }],
    ['.svg', { mimeType: 'image/svg+xml', htmlTag: 'svg' }],
    ['.jpg', { mimeType: 'image/jpeg', htmlTag: 'img' }],
    ['.jpeg', { mimeType: 'image/jpeg', htmlTag: 'img' }],
    ['.mp4', { mimeType: 'video/mp4', htmlTag: 'video' }],
    ['.avi', { mimeType: 'video/x-msvideo', htmlTag: 'video' }],
    ['.gif', { mimeType: 'image/gif', htmlTag: 'img' }],
    ['.htm', { mimeType: 'text/html', htmlTag: 'iframe' }],
    ['.html', { mimeType: 'text/html', htmlTag: 'iframe' }],
    ['.mpeg', { mimeType: 'video/mpeg', htmlTag: 'video' }],
    ['.pptx', { mimeType: 'image/png', htmlTag: 'img' }],
    ['.ppt', { mimeType: 'application/vnd.ms-powerpoint', htmlTag: 'iframe' }],
    ['.3gp', { mimeType: 'video/3gpp', htmlTag: 'video' }],
    ['.webm', { mimeType: 'video/webm', htmlTag: 'video' }],
    ['.webp', { mimeType: 'image/webp', htmlTag: 'img' }]
]);

function getMimeTypeByExtension(ext) {
    return mimeTypeExtensionsCollection.get(ext);
}

function getMediaType(ext) {
    if (mimeTypeExtensionsCollection.has(ext)) {
        const mimeType = getMimeTypeByExtension(ext).mimeType;
        const mediaType = mimeType.split('/').splice(0, 1);
        return mediaType;
    } else {
        return new Error('No such extension');
    }
}

function adLayout() {

}

function buildMediaContentAdFrame(width, height, src, ext) {
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


export function buildRecommendationAdFrame(width, height, src, ext, caption, branding) {
    const mediaFrame = buildMediaContentAdFrame(width, height, src, ext);
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