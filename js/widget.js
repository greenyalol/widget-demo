
export default class Widget {

    #widgetContainer
    #recommendationsCollection
    #adChoicesIcon
    #attribution

    constructor({ container }) {
        this.#widgetContainer = document.querySelector(`#${container}`);
        this.#widgetContainer.append(document.createElement("p"));
    }

    render() {
        const frame = document.createElement('object');
        frame.setAttribute("data", "otfilm.ru/video/1193423-Simpsony-35.sezon.9.seriya")
        frame.setAttribute("type", "video/mp4");
        frame.setAttribute("width", "400");
        frame.setAttribute("height", "300");
        this.#widgetContainer.append(frame);
        console.log(this.#widgetContainer);
    }
}