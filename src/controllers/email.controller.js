const  client  = require('../../database');
const Contact = require('../models/Contact');

class EmailController {

    /**
    *
    * @param {import('express').Request} req
    * @param {import('express').Response} res
    */

    async createEmail(req, res) {
        try {
          const { nombre, email } = req.body;
          if (nombre == null || email == null) {
            return res.status(400).json({ error: 'Los campos nombre y email son obligatorios' });
          }
      
          // Create a new contact
          const contact = new Contact({ nombre, email });
      
          // Save the contact to the database
          const result = await contact.save();
      
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
      }
}
module.exports = EmailController;