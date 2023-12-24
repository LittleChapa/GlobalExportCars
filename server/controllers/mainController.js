const { Main } = require("../models/models");

class MainController {
  async create(req, res) {
    const { title, descr } = req.body;
    const { img } = req.files;

    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const main = await Main.create({ title, descr, img: fileName });

    return res.json(main);
  }

  async update(req, res) {}

  async getAll(req, res) {
    const main = await Main.findAll();

    return res.json(main);
  }
}

module.exports = new MainController();
