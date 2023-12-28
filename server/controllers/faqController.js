const { Questions } = require('../models/models');

class FaqController {
  async create(req, res) {
    const { title, descr } = req.body;

    const faq = await Questions.create({ title, descr });

    return res.json(faq);
  }

  async update(req, res) {}

  async remove(req, res) {
    const { id } = req.params;

    const faq = await Questions.destroy({
      where: { id },
    });

    return res.json(faq);
  }

  async getAll(req, res) {
    const faq = await Questions.findAll();

    return res.json(faq);
  }
}

module.exports = new FaqController();
