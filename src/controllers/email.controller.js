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
      
          // Crear el objeto
          const contact = new Contact({ nombre, email });
      
          //Guardarlo en la BD
          const result = await contact.save();
      
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
      }
}
module.exports = EmailController;