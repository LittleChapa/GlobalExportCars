const { Country, Catalog } = require("../models/models");

class CountryController {
  async create(req, res) {
    const { name } = req.body;

    const country = await Country.create({ name });

    return res.json(country);
  }

  async getAll(req, res) {
    const countries = await Country.findAll();

    return res.json(countries);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const country = await Country.findAll({
      include: [Catalog],
      where: { id },
    });

    return res.json(country);
  }
}

module.exports = new CountryController();
