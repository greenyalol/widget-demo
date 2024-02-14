import { SuggestedAdItem } from "./recommendation.js"
import { getRecommendationsList, GET_REQUEST_API_URL } from "./fetch.js"
const TABOOLA_ICON = `https://www.taboola.com//wp-content/uploads/2022/10/icon-blue.png`
const AD_CHOICES = `https://youradchoices.com/DAA_style/YAC/icon.png`

export default class Widget {

    #widgetContainer
    #recommendationsCollection
    #widgetTitle
    #adChoicesIcon
    #attribution

    constructor({ container }) {
        this.#widgetContainer = document.querySelector(`#${container}`);
    }

    async #initialize() {
        const suggestionsList = await getRecommendationsList(GET_REQUEST_API_URL);
        if (suggestionsList) {
            this.#recommendationsCollection = suggestionsList.list.map((suggestion) => {
                return new SuggestedAdItem(suggestion);
            });
        } else {
            this.#recommendationsCollection = [];
        }
        // console.log(this.#recommendationsCollection);
    }

    get recommendationsCollection() {
        return this.#recommendationsCollection;
    }

    get widgetContainer() {
        return this.#widgetContainer;
    }

    get widgetTitle() {
        return this.#widgetTitle;
    }

    static async render({ container }) {
        const widgetHeader = document.createElement('div');
        widgetHeader.setAttribute('class', 'ad-widget-header');
        widgetHeader.innerHTML = `<h3>AD CONTENT</h3>`
        widgetHeader.innerHTML += `<img src="${TABOOLA_ICON}" width="31.59" height="24.48">`;
        const adWidgetContainer = document.createElement('div');
        adWidgetContainer.setAttribute('class', 'ad-widget-container');
        const cardsWrapper = document.createElement('div');
        cardsWrapper.setAttribute('class', 'ad-cards-wrapper');
        const widget = new Widget({ container });
        await widget.#initialize();
        const w = 300, h = 200;
        for (const recommendation of widget.recommendationsCollection) {
            const recommendationItem = recommendation.render(w, h);
            cardsWrapper.append(recommendationItem);
        }
        adWidgetContainer.append(widgetHeader, cardsWrapper);
        widget.widgetContainer.append(adWidgetContainer);
        return widget;
    }


}