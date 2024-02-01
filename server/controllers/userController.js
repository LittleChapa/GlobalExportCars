const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Applications } = require('../models/models');
const mailer = require('../nodeMailer');

const generateJwt = (id, login, role) => {
  return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    const { login, password } = req.body;

    if (!login || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }

    const condidate = await User.findOne({ where: { login } });

    if (condidate) {
      return next(ApiError.badRequest("Ошибка"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ login, password: hashPassword });
    const token = generateJwt(user.id, user.login, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });

    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('Неверный логин или пароль'));
    }

    const token = generateJwt(user.id, user.login, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role);
    return res.json({ token });
  }

  async nodeMailerGet(req, res) {
    const { name, tel, mail, service, descr } = req.body;
    const message = {
      to: 'globalexportscars@gmail.com',
      subject: `Новая заявка - ${service}`,
      html: `<p>
      Имя: ${name} <br><br> Услуга: ${service} <br><br> Телефон: ${tel} <br><br> Почта: ${mail} <br><br> Пожелания: ${descr}
      </p>`,
    };
    mailer(message);

    const applications = await Applications.create({
      name,
      service,
      phone: tel,
      email: mail,
      wish: descr,
      archive: false,
    });

    return res.json(applications);
  }
}

module.exports = new UserController();
