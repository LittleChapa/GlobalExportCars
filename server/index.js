require("dotenv").config();

const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);

// app.get('/admin', (req, res) => {
// res.sendFile(path.join(__dirname, '../client/public/pages/adminAuth.html'));
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync().then(async () => {
      const password = 'Gexc1488322';
      const hashPassword = await bcrypt.hash(password, 5);
      await models.User.findOrCreate({ where: { login: 'GlobalExportCars', password: hashPassword } })
      await models.Country.findOrCreate({ where: { name: 'США' } })
      await models.Country.findOrCreate({ where: { name: 'Европа' } })
      await models.Country.findOrCreate({ where: { name: 'Корея' } })
      await models.Country.findOrCreate({ where: { name: 'Китай' } })
      await models.About.findOrCreate({ where: { id: 1 } })
      await models.About.findOrCreate({ where: { id: 2 } })
      await models.About.findOrCreate({ where: { id: 3 } })
      await models.About.findOrCreate({ where: { id: 4 } })
    });
    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
