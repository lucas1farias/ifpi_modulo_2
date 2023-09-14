"use strict";
// 5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.
// Porque na classe "Curso", na função "encontrarProf", o ".id" não é encontrado, sendo que "id" é um atributo da classe "Curso"?
class Curso {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
        this.profs = [];
    }
    encontrarAlunos(curso_id, alunos) {
        alunos.forEach(aluno => {
            if (aluno.curso.id == curso_id) {
                this.alunos.push(aluno.nome);
            }
        });
        console.log(this.alunos);
    }
    encontrarProf(curso_id, profs) {
        console.log('=========================================');
        for (let i = 0; i < profs.length; i++) {
            for (let j = 0; j < profs[i].cursos.length; j++) {
                if (profs[i].cursos[j].id == curso_id) {
                    this.profs.push(profs[i].nome);
                    break;
                }
            }
        }
        console.log(this.profs);
    }
}
class Disciplina {
    constructor(id, nome, bloco, horario, sala, turno) {
        this.id = id;
        this.nome = nome;
        this.bloco = bloco;
        this.horario = horario;
        this.turno = turno;
        this.sala = sala;
        this.cursos = [];
        this.professores = [];
        this.alunos = [];
    }
    cadastraraCurso(curso) {
        this.cursos.push(curso);
    }
    cadastrarProf(prof) {
        this.professores.push(prof);
    }
}
class Aluno {
    constructor(id, nome, matricula, entrada, email, curso, disciplinas) {
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.entrada = entrada;
        this.email = email;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }
    cadastrarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    exibirDisciplinas() {
        this.disciplinas.forEach(disciplina => {
            console.log(disciplina.nome);
        });
    }
}
class Professor {
    constructor(id, nome, entrada, email_institucional, cursos, disciplinas) {
        this.id = id;
        this.nome = nome;
        this.entrada = entrada;
        this.email_institucional = email_institucional;
        this.cursos = cursos;
        this.disciplinas = disciplinas;
    }
    cadastrarCurso(curso) {
        this.cursos.push(curso);
    }
    cadastrarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    exibirDisciplinas() {
        this.disciplinas.forEach(disciplina => {
            console.log(disciplina.nome);
        });
    }
    exibirCursos() {
        this.cursos.forEach(curso => {
            console.log(curso.nome);
        });
    }
}
// Não soube como fazer
class Notas {
}
// Cursos
const ads = new Curso(1, "Tecnologo em Analise e Desenvolvimento de Sistemas");
const ta = new Curso(2, "Tecnologo em Alimentos");
// Disciplinas
const poo = new Disciplina(1, "Programacao Orientada a Objetos", 2, 15, "T", "B1-05");
const edd = new Disciplina(2, "Estrutura de dados", 2, 15, "T", "B3-11");
const bdd = new Disciplina(3, "Banco de dados", 2, 15, "T", "B1-05");
// Alunos de ADS
const ana = new Aluno(1, "Ana", "2023111TADS101", new Date(), "ana@gmail.com", ads, [poo, edd]);
const ena = new Aluno(2, "Ena", "2023111TADS102", new Date(), "ena@gmail.com", ads, [poo, edd]);
const ina = new Aluno(3, "Ina", "2023111TADS103", new Date(), "ina@gmail.com", ads, [poo, edd]);
const ona = new Aluno(4, "Ona", "2023111TADS104", new Date(), "ona@gmail.com", ads, [poo, edd]);
const una = new Aluno(5, "Una", "2023111TADS105", new Date(), "una@gmail.com", ads, [poo, edd]);
// Alunos de outro curso
const alceu = new Aluno(6, "Alceu", "2023111TA007", new Date(), "alceu@gmail.com", ta, []);
const alfredo = new Aluno(7, "Alfredo", "2023111TA008", new Date(), "alfredo@gmail.com", ta, []);
// Todos os objetos de alunos
const alunos = [
    ana, ena, ina, ona, una, alceu, alfredo
];
// Professor
const profAndre = new Professor(1, "André Soares", 2011, "andre_sos@ifpi.edu.br", [ads], [poo]);
const profBenedito = new Professor(1, "Benedito Vasconselos", 2008, "benedit@ifpi.edu.br", [ads], [edd]);
// Professores de outro curso
const profCarlos = new Professor(2, "Carlos Barroso", 2016, "carlos_bar@ifpi.edu.br", [ta], []);
// Todos os objetos de professores
const profs = [
    profAndre, profBenedito, profCarlos
];
console.log("\n===== Disciplinas da Ana antes =====");
ana.exibirDisciplinas();
ana.cadastrarDisciplina(bdd);
console.log("\n===== Disciplinas da Ana agora =====");
ana.exibirDisciplinas();
console.log("\n===== Disciplinas do Prof. André antes =====");
profAndre.exibirDisciplinas();
profAndre.cadastrarDisciplina(bdd);
console.log("\n===== Disciplinas do Prof. André agora =====");
profAndre.exibirDisciplinas();
console.log('\nAlunos de ADS');
ads.encontrarAlunos(ads.id, alunos);
console.log('\nAlunos de Alimentos');
ta.encontrarAlunos(ta.id, alunos);
console.log('\nProfessores de ADS');
ads.encontrarProf(ads.id, profs);
console.log('\nProfessores de Alimentos');
ta.encontrarProf(ta.id, profs);
