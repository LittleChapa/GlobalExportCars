const { Applications } = require("../models/models");

class ApplicationController {
  async update(req, res) {}

  async getAll(req, res) {
    const applications = await Applications.findAll();

    return res.json(applications);
  }
}

module.exports = new ApplicationController();
