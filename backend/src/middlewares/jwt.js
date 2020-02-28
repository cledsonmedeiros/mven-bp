const jwt = require('jsonwebtoken');

const debug = true;

function autenticarToken (req, res, next) {
  if (debug) {
    next();
  } else {
    let token = req.headers.authorization;

    if (token) {
      token = String(req.headers.authorization).split('Bearer')[1].trim();
    } else {
      return res.status(400).send({ error: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(403).send({ error: 'Token inválido' });
      }
      next();
    });
  }
}

module.exports = autenticarToken;
