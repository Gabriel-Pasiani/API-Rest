import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Gabriel",
      sobrenome: "Pasiani",
      email: "teste@gmail.com",
      idade: 26,
      peso: 55,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
