const express = require("express");

const routes = express.Router();

let lista = [{"id":1, "nome":"João","idade":20},
             {"id":2, "nome":"João","idade":20},
             {"id":3, "nome":"João","idade":20}];

routes.get("/",(req, res) =>{
    res.status(200).json(lista);
});

module.exports = routes;