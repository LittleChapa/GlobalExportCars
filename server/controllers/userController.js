const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const generateJwt = (id, login, role) => {
  return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
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
      return next(ApiError.internal("Пользователь не найден"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Неверный логин или пароль"));
    }

    const token = generateJwt(user.id, user.login, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
