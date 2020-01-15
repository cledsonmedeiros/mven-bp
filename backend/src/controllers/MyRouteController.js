const Joi = require('joi');
const MyRoute = require('../models/MyRouteModel');

module.exports = {
  async index (req, res) {
    try {
      const clientes = await MyRoute.find({});
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  store (req, res, next) {
    const data = req.body;
    const schema = Joi.object().keys({
      name: Joi.string().required(),
    });

    Joi.validate(data, schema, async (err, value) => {
      if (err) {
        return res.status(400).json(err);
      }
      try {
        const cliente = await MyRoute.create(req.body);
        return res.status(201).send(cliente);
      } catch (error) {
        return res.status(400).json(error);
      }
    });
  },
  async show (req, res) {
    try {
      const cliente = await MyRoute.findById({
        _id: req.params.id,
      });
      if (!cliente) {
        return res.status(404).json({
          error: 'MyRoute not found',
        });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async update (req, res) {
    try {
      const cliente = await MyRoute.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      await cliente.save();
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async destroy (req, res) {
    try {
      const cliente = await MyRoute.findById(req.params.id);
      if (!cliente) {
        return res.status(404).send({
          error: 'MyRoute not found',
        });
      }
      await cliente.remove();
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
