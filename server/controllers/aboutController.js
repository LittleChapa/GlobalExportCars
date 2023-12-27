const { About } = require('../models/models');

class AboutController {
  async create(req, res) {
    const { text } = req.body;
    const about = await About.create({ text });
    return res.json(about);
  }

  async update(req, res) {
    const { id } = req.params;
    const { text } = req.body;
    const about = await About.findOne({ where: { id } });
    about.update({
      text,
    });

    return res.json(about);
  }

  async getAll(req, res) {
    const about = await About.findAll();

    return res.json(about);
  }
}

module.exports = new AboutController();
