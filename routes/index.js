const { request } = require("express");
const mailservice = require("../services/mailer")

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
  res.render("index", { title: "Basanti Portfolio", route:"req.originalUrl" });
});

router.get("/product", (req, res) => {
  res.render("product", { title: "Basanti Portfolio", route:"req.originalUrl" });
});

router.get("/about", (req, res) => {
  res.render("about",{title: "Basanti Portfolio", route:"req.originalUrl"} );
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Basanti Portfolio", route:"req.originalUrl" });
});

router.get("/testimonial", (req, res) => {
  res.render("testimonial", { title: "Basanti Portfolio", route:"req.originalUrl" });
});

router.post("/contact", async(req,res)=>{
  const data = req.body;
  const response = await mailservice.mailer({to:"bnagari154@gmail.com", data})

let message;
  if (response)
  message= "Form received";
else message = "Something went worng!!";
res.json({data:  message});
})

module.exports = router;
