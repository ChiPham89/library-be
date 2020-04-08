export default class Route {
    constructor(httpMethod, path, handler) {
        this.httpMethod = httpMethod;
        this.path = path;
        this.handler = handler;
    }
}