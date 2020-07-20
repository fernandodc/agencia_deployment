const express = require("express");
const router = express.Router();

const nosotrosController = require("../controllers/nosotros.controller");
const homeController = require("../controllers/home.controller");
const viajesController = require("../controllers/viajes.controller");
const testimonialesController = require("../controllers/testimoniales.controller");

//Home Page -------------------------------------------------------------//
router.get("/", homeController.consultasHomePage);

//Nosotros --------------------------------------------------------------//
router.get("/nosotros", nosotrosController.infoNosotros);

// Viajes --------------------------------------------------------------//
router.get("/viajes", viajesController.mostrarViajes);

// Viajes por id -------------------------------------------------------//
router.get("/viajes/:id", viajesController.mostrarViaje);

// Testimoniales -------------------------------------------------------//
router.get("/testimoniales", testimonialesController.mostrarTestimoniales);

// Cuando se llena el formulario ---------------------------------------//
router.post("/testimoniales", testimonialesController.agregarTestimonial);

module.exports = router;
