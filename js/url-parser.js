
export function decodeString(string) {
    try {
        const decodedString = decodeURIComponent(string);
        return decodedString;
    } catch (err) {
        return null;
    }
}

export function parseRedirectLink(url) {
    const decodedString = decodeString(url);
    const urlParams = new URL(decodedString).searchParams;
    const redirectLink = urlParams.get('redir');
    return redirectLink ? redirectLink : urlParams;
}

export function parseExtension(url) {
    return url.match(/\.\w{2,4}$/);
}