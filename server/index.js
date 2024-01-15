require('dotenv').config();

const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/static', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
}));
app.use(fileUpload({}));
('');
app.use('/api', router);

app.use(errorHandler);

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/pages/adminAuth.html'));
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started  ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
