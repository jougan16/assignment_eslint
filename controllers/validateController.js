import { validateUsernameModel } from "../models/validateModel.js";
import { isValidUsername } from "../services/validateService.js";

export function checkUsername(req, res) {
    const username = req.query.u;

    try {
        const valid = isValidUsername(username);


        const result = validateUsernameModel(username, valid);

        res.json(result);

    } catch (err) {
        res.status(500).json({ error: "Validation failed" });
    }
}
