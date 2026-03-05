const motoService = require('../services/moto.service');

exports.getMotos = async (req, res) => {
  try {
    const motos = await motoService.getMotos();
    res.json(motos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMoto = async (req, res) => {
  try {
    const result = await motoService.createMoto(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};