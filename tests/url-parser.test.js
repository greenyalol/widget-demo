import { decodeString, parseRedirectLink, parseExtension } from '../js/url-parser.js';

describe('decodeString', () => {
    test('decodes a URL-encoded string correctly', () => {
        const encodedString = 'Hello%20World';
        const decodedString = decodeString(encodedString);
        expect(decodedString).toBe('Hello World');
    });

    test('returns null when unable to decode', () => {
        const invalidString = '%E0%A4%A';
        const decodedString = decodeString(invalidString);
        expect(decodedString).toBeNull();
    });
});

describe('parseRedirectLink', () => {
    test('parses redirect link from URL correctly', () => {
        const url = 'https://example.com/?redir=https://redirected.com';
        const redirectLink = parseRedirectLink(url);
        expect(redirectLink).toBe('https://redirected.com');
    });
});

describe('parseExtension', () => {
    test('returns the file extension from the URL', () => {
        const url = 'https://example.com/image.jpg';
        const extension = parseExtension(url);
        expect(extension[0]).toEqual('.jpg');
    });
});