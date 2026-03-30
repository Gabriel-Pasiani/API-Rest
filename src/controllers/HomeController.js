import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Joao",
      sobrenome: "Pessoa",
      email: "teste@gmail.com",
      idade: 35,
      peso: 70,
      altura: 1.85,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
