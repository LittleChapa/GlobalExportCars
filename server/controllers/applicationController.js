const { Applications } = require('../models/models');

class ApplicationController {
  async update(req, res) {
    const { id } = req.params;
    const archive = await Applications.findOne({ where: { id } });
    archive.update({
      archive: !archive.archive,
    });

    return res.json(archive);
  }

  async getAll(req, res) {
    const applications = await Applications.findAll();

    return res.json(applications);
  }
}

module.exports = new ApplicationController();
