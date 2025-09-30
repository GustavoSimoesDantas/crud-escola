//Professores

const express = require("express");
const router = express.Router();

// Array inicial com 3 professores
let professores = [
  {
    id: 1,
    nome: "maria joaquina",
    email: "maria.joaquina@escola.com",
    cpf: "12345678901",
    curso: "Matemática",
    disciplina: "Cálculo I",
  },
  {
    id: 2,
    nome: "bruno pereira",
    email: "bruno.pereira@escola.com",
    cpf: "987654100",
    curso: "História",
    disciplina: "História do Brasil",
  },
  {
    id: 3,
    nome: "josé bizerra",
    email: "josé.bizerra@escola.com",
    cpf: "45678912377",
    curso: "Informática",
    disciplina: "Programação",
  },
];
