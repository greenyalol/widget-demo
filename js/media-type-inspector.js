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

export function getMimeTypeByExtension(ext) {
    return mimeTypeExtensionsCollection.get(ext);
}

export function getMediaType(ext) {
    if (mimeTypeExtensionsCollection.has(ext)) {
        const mimeType = getMimeTypeByExtension(ext).mimeType;
        const mediaType = mimeType.split('/').splice(0, 1);
        return mediaType;
    } else {
        return new Error('No such extension');
    }
}