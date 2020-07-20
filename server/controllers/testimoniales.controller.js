const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll();
  res.render("testimoniales", {
    testimoniales,
  });
};

exports.agregarTestimonial = async (req, res) => {
  //Validar que todos los campos estén llenos:
  let { nombre, correo, mensaje } = req.body;
  let errores = [];
  if (!nombre) errores.push({ mensaje: "Agrega tu Nombre" });
  if (!correo) errores.push({ mensaje: "Agrega tu corrre" });
  if (!mensaje) errores.push({ mensaje: "Agrega tu Mensaje" });
  if (errores.length > 0) {
    //Muestra la vista con errores
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      errores,
      nombre,
      correo,
      mensaje,
      pagina: "testimoniales",
      testimoniales,
    });
  } else {
    //Se almacena en la DB
    Testimonial.create({
      nombre,
      correo,
      mensaje,
    })
      .then((testimonial) => {
        res.redirect("/testimoniales");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
