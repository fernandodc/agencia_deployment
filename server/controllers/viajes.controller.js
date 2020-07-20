const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.mostrarViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    title: "viajes",
    pagina: "proximos viajes",
    viajes: viajes,
  });
};

exports.mostrarViaje = async (req, res) => {
  const viaje = await Viaje.findById(req.params.id);
  res.render("viaje", {
    viaje,
  });
};
