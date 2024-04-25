const client = require('.../database');

class EmailController {

    /**
    *
    * @param {import('express').Request} req
    * @param {import('express').Response} res
    */

    async createEmail(req, res) {
        try {
            const { nombre, email } = req.body
            if (nombre == null || email == null) {
                return res.status(400).json({ error: 'Los campos nombre y email son obligatorios' })
            }

            const collection = client.db('systemse').collection('contacts');

            const result = await collection.insertOne({ nombre, email });

            res.status(200).json(result.ops[0]);
        } catch (error) {
            console.log(error);
            res.status(500).json(null);
        }
    }
}
module.exports = EmailController;