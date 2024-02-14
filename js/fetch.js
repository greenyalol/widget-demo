const GET_REQUEST_API_URL = new URL(`http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html`);
export const DUMMY_PIC = new URL(`https://previews.123rf.com/images/sukanda26/sukanda261512/sukanda26151200201/50107842-sold-sign.jpg`);

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}

async function getRecommendationsList(apiUrl) {
    const recommendationsList = await fetchData(apiUrl);
    return recommendationsList;
}

// fetchData(GET_REQUEST_API_URL);
// console.log(t);
(async () => {
    // await getRecommendationsList(GET_REQUEST_API_URL);
    //console.log(q);
})()

export { GET_REQUEST_API_URL, getRecommendationsList };