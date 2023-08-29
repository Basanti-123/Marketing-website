const { request } = require("express");

const router = require("express").Router();

// router.get("/", (request, resolve) => {
//   resolve.send("Hello get world");
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.send("Hello post world");
// });
// router.get("/:name/:roll", (req, res) => {
//   console.log(req.query);
//   const { address } = req.query; // quire parse?
//   const { name, roll } = req.params; // : parser
//   res.send(`Hello ${name}.you are from ${address} $ your `);
// });

// router.get("/: name", (req, res) => {
//   const { name } = req.params;
// });

router.get("/", (req, res) => {
  res.render("index", { title: "Basanti" });
});

router.get("/product", (req, res) => {
  res.render("product");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/testimonial", (req, res) => {
  res.render("testimonial");
});

module.exports = router;
