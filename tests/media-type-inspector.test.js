import { getMimeTypeByExtension, getMediaType } from '../js/media-type-inspector.js';

describe('getMimeTypeByExtension', () => {
    test('should return correct mimeType and htmlTag for known extension', () => {
        const ext = '.png';
        const result = getMimeTypeByExtension(ext);
        expect(result).toEqual({ mimeType: 'image/png', htmlTag: 'img' });
    });

    test('should return undefined for unknown extension', () => {
        const ext = '.unknown';
        const result = getMimeTypeByExtension(ext);
        expect(result).toBeUndefined();
    });
});

describe('getMediaType', () => {
    test('should return media type for known extension', () => {
        const ext = '.png';
        const result = getMediaType(ext);
        expect(result).toEqual(['image']);
    });
});