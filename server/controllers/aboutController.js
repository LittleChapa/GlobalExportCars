const { About } = require("../models/models");

class AboutController {
  async update(req, res) {}

  async getAll(req, res) {
    const about = await About.findAll();

    return res.json(about);
  }
}

module.exports = new AboutController();
