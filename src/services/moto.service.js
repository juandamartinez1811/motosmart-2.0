const motoRepository = require('../repositories/moto.repository');

class MotoService {

  async getMotos() {
    return await motoRepository.getAll();
  }

  async createMoto(data) {
    return await motoRepository.create(data);
  }
}

module.exports = new MotoService();