
export function decodeString(string) {
    try {
        const decodedString = decodeURIComponent(string);
        return decodedString;
    } catch (err) {
        console.log(err);
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
//function
// function urlBuilder(url) {
//     return new URL(url);
// }




// console.log(decodeString(`http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Frpr.c.yimg.jp%2Famd%2F20150302-00043393-roupeiro-000-4-view.jpg`));