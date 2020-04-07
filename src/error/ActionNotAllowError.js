export default class ActionNotAllowError extends Error {
    constructor(message) {
        super(message);
        this.name = "ActionNotAllowError";
        this.status = 405;
    }
}