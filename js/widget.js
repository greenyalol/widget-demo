import { SuggestedAdItem } from "./recommendation.js"
import { getRecommendationsList, GET_REQUEST_API_URL } from "./fetch.js"

export default class Widget {

    #widgetContainer
    #recommendationsCollection
    #adChoicesIcon
    #attribution

    constructor({ container }) {
        this.#widgetContainer = document.querySelector(`#${container}`);
        this.#widgetContainer.append(document.createElement("p"));
        this.#initialize();
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
    }

    render() {
        const frame = document.createElement('object');
        frame.setAttribute("data", "https://otfilm.ru/")
        frame.setAttribute("type", "text/html");
        frame.setAttribute("width", "250");
        frame.setAttribute("height", "200");
        // this.#widgetContainer.append(frame);
        console.log(this.#widgetContainer);
    }
}