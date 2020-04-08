export default class ActionHandler {
    static handleError(err, res) {
        if (err.status) {
            res.status(err.status).send(err.message);
        } else {
            console.log(err.stack);
            res.status(500).send("Something went wrong!");
        }
    }
}