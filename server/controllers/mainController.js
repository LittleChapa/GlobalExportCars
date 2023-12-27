const { Main } = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class MainController {
  async create(req, res) {
    const { title, descr } = req.body;
    const { img } = req.files;

    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));

    const main = await Main.create({ title, descr, img: fileName });

    return res.json(main);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, descr } = req.body;
    const main = await Main.findOne({ where: { id } });

    if (req.files) {
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      main.update({
        title,
        descr,
        img: fileName,
      });
      return res.json(main);
    }

    main.update({
      title,
      descr,
    });

    return res.json(main);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const main = await Main.findOne({ where: { id } });
    return res.json(main);
  }
}

module.exports = new MainController();
