import User from "../models/User.js";

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: "Joao",
      email: "teste@gmail.com",
      password: "12345",
    });
    res.json(novoUser);
  }
}

export default new UserController();
