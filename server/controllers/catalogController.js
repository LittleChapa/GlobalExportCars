const { Catalog, Country } = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class CatalogController {
  async create(req, res) {
    const { title, descr, characteristic, drive, countryId } = req.body;
    const { img } = req.files;

    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));

    const catalog = await Catalog.create({
      title,
      descr,
      img: fileName,
      characteristic,
      drive,
      countryId,
    });

    return res.json(catalog);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, descr, characteristic, drive } = req.body;
    const catalog = await Catalog.findOne({ where: { id } });

    if (req.files) {
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      catalog.update({
        title,
        descr,
        img: fileName,
        characteristic,
        drive,
      });
      return res.json(catalog);
    }

    catalog.update({
      title,
      descr,
      characteristic,
      drive,
    });

    return res.json(catalog);
  }

  async remove(req, res) {
    const { id } = req.params;

    const catalog = await Catalog.destroy({
      where: { id },
    });

    return res.json(catalog);
  }

  async getAll(req, res) {
    const catalog = await Catalog.findAll({
      include: [Country],
    });

    return res.json(catalog);
  }
}

module.exports = new CatalogController();
