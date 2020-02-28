const Joi = require('@hapi/joi');
const Crud = require('../models/CrudModel');

module.exports = {
  index (req, res) {
    const options = {
      sort: {
        nome: 'asc',
      },
      page: Number(req.query.page || 1),
      limit: Number(req.query.limit || 10),
    };
    try {
      Crud.paginate({}, options)
        .then((result) => {
          return res.status(200).json(result);
        }).catch((err) => {
          return res.status(400).json(err);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  store (req, res, next) {
    const data = req.body;
    const schema = Joi.object({
      nome: Joi.string().required(),
    });
    try {
      schema.validateAsync(data)
        .then(() => {
          try {
            Crud.create(req.body)
              .then(result => {
                return res.status(201).send(result);
              }).catch((err) => {
                return res.status(400).json(err);
              });
          } catch (error) {
            return res.status(400).json(error);
          }
        }).catch((err) => {
          return res.status(400).json(err);
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async show (req, res) {
    try {
      Crud.findById({
        _id: req.params.id,
      }).then(result => {
        if (!result) {
          return res.status(404).json({
            error: 'Crud não encontrado',
          });
        }
        return res.json(result);
      }).catch((err) => {
        return res.status(400).json(err);
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async update (req, res) {
    try {
      Crud.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      }).then(result => {
        if (!result) {
          return res.status(404).json({
            error: 'Crud não encontrado',
          });
        }
        return res.json(result);
      }).catch((err) => {
        return res.status(400).json(err);
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async destroy (req, res) {
    try {
      Crud.findById(req.params.id).then(result => {
        if (!result) {
          return res.status(404).json({
            error: 'Crud não encontrado',
          });
        }
        result.remove()
          .then(() => {
            return res.status(200).send();
          }).catch(() => {
            return res.status(500).send();
          });
      }).catch((err) => {
        return res.status(400).json(err);
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
