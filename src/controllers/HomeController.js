// import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeController();
