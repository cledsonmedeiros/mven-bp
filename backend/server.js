require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

const { PORT, DB_URL } = process.env;

mongoose.connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }, () => {
    console.log('Banco de dados conectado');

    app.listen(PORT || 3000, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`);
    });
  },
);
