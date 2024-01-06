const { Services } = require('../models/models');

class ServiceController {
  async create(req, res) {
    const { title, descr, price } = req.body;

    const service = await Services.create({ title, descr, price });

    return res.json(service);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, descr, price } = req.body;
    const service = await Services.findOne({ where: { id } });
    service.update({
      title,
      descr,
      price,
    });

    return res.json(service);
  }

  async remove(req, res) {
    const { id } = req.params;

    const service = await Services.destroy({
      where: { id },
    });

    return res.json(service);
  }

  async getAll(req, res) {
    const services = await Services.findAll();

    return res.json(services);
  }
}

module.exports = new ServiceController();
