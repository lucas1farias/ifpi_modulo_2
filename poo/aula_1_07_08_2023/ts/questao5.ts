

// 5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.

// Porque na classe "Curso", na função "encontrarProf", o ".id" não é encontrado, sendo que "id" é um atributo da classe "Curso"?
class Curso {
    public id: number
    public nome: string
    public alunos: string[]
    public profs: string[]

    constructor(id: number, nome: string) {
        this.id = id
        this.nome = nome
        this.alunos = []
        this.profs = []
    }

    public encontrarAlunos(curso_id: number, alunos: Aluno[]) {
        alunos.forEach(aluno => {
            if (aluno.curso.id == curso_id) {
                this.alunos.push(aluno.nome)
            }
        })
        console.log(this.alunos)
    }

    public encontrarProf(curso_id: number, profs: Professor[]) {
        console.log('=========================================')
        for (let i = 0; i < profs.length; i++) {
            for (let j = 0; j < profs[i].cursos.length; j++) {
                if (profs[i].cursos[j].id == curso_id) {
                    this.profs.push(profs[i].nome)
                    break
                }
            }
        }
        console.log(this.profs)
    }
}

class Disciplina {
    public id: number
    public nome: string
    public bloco: number
    public horario: number
    public sala: string
    public turno: string
    private cursos: Curso[]
    private professores: Professor[]
    public alunos: Aluno[]
    
    constructor(id:number, nome: string, bloco: number, horario: number, sala: string, turno: string) {
        this.id = id
        this.nome = nome
        this.bloco = bloco
        this.horario = horario
        this.turno = turno
        this.sala = sala
        this.cursos = []
        this.professores = []
        this.alunos = []
    }

    private cadastraraCurso(curso: Curso): void {
        this.cursos.push(curso)
    }

    private cadastrarProf(prof: Professor): void {
        this.professores.push(prof)
    }
}

class Aluno {
    public id: number
    public nome: string
    public matricula: string
    public entrada: Date
    public email: string
    public curso: Curso
    public disciplinas: Disciplina[]
    
    constructor(id: number, nome: string, matricula: string, entrada: Date, email: string, curso: Curso, disciplinas: Disciplina[]) {
        this.id = id
        this.nome = nome
        this.matricula = matricula
        this.entrada = entrada
        this.email = email
        this.curso = curso
        this.disciplinas = disciplinas
    }

    public cadastrarDisciplina(disciplina: Disciplina): void {
        this.disciplinas.push(disciplina)
    }

    public exibirDisciplinas(): void {
        this.disciplinas.forEach(disciplina => {
            console.log(disciplina.nome)
        })
    }
}

class Professor {
    public id: number
    public nome: string
    public entrada: number
    public email_institucional: string
    public cursos: Curso[]
    public disciplinas: Disciplina[]

    constructor(id: number, nome: string, entrada: number, email_institucional: string, cursos: Curso[], disciplinas: Disciplina[]) {
        this.id = id
        this.nome = nome
        this.entrada = entrada
        this.email_institucional = email_institucional
        this.cursos = cursos
        this.disciplinas = disciplinas
    }

    public cadastrarCurso(curso: Curso) {
        this.cursos.push(curso)
    }

    public cadastrarDisciplina(disciplina: Disciplina) {
        this.disciplinas.push(disciplina)
    }

    public exibirDisciplinas(): void {
        this.disciplinas.forEach(disciplina => {
            console.log(disciplina.nome)
        })
    }

    public exibirCursos(): void {
        this.cursos.forEach(curso => {
            console.log(curso.nome)
        })
    }
}

// Não soube como fazer
class Notas {}

// Cursos
const ads = new Curso(1, "Tecnologo em Analise e Desenvolvimento de Sistemas")
const ta = new Curso(2, "Tecnologo em Alimentos")

// Disciplinas
const poo = new Disciplina(1, "Programacao Orientada a Objetos", 2, 15, "T", "B1-05")
const edd = new Disciplina(2, "Estrutura de dados", 2, 15, "T", "B3-11")
const bdd = new Disciplina(3, "Banco de dados", 2, 15, "T", "B1-05")

// Alunos de ADS
const ana = new Aluno(1, "Ana", "2023111TADS101", new Date(), "ana@gmail.com", ads, [poo, edd])
const ena = new Aluno(2, "Ena", "2023111TADS102", new Date(), "ena@gmail.com", ads, [poo, edd])
const ina = new Aluno(3, "Ina", "2023111TADS103", new Date(), "ina@gmail.com", ads, [poo, edd])
const ona = new Aluno(4, "Ona", "2023111TADS104", new Date(), "ona@gmail.com", ads, [poo, edd])
const una = new Aluno(5, "Una", "2023111TADS105", new Date(), "una@gmail.com", ads, [poo, edd])

// Alunos de outro curso
const alceu = new Aluno(6, "Alceu", "2023111TA007", new Date(), "alceu@gmail.com", ta, [])
const alfredo = new Aluno(7, "Alfredo", "2023111TA008", new Date(), "alfredo@gmail.com", ta, [])

// Todos os objetos de alunos
const alunos: Aluno[] = [
    ana, ena, ina, ona, una, alceu, alfredo
]

// Professor
const profAndre = new Professor(1, "André Soares", 2011, "andre_sos@ifpi.edu.br", [ads], [poo])
const profBenedito = new Professor(1, "Benedito Vasconselos", 2008, "benedit@ifpi.edu.br", [ads], [edd])

// Professores de outro curso
const profCarlos = new Professor(2, "Carlos Barroso", 2016, "carlos_bar@ifpi.edu.br", [ta], [])

// Todos os objetos de professores
const profs: Professor[] = [
    profAndre, profBenedito, profCarlos
]

console.log("\n===== Disciplinas da Ana antes =====")
ana.exibirDisciplinas()

ana.cadastrarDisciplina(bdd)

console.log("\n===== Disciplinas da Ana agora =====")
ana.exibirDisciplinas()

console.log("\n===== Disciplinas do Prof. André antes =====")
profAndre.exibirDisciplinas()

profAndre.cadastrarDisciplina(bdd)

console.log("\n===== Disciplinas do Prof. André agora =====")
profAndre.exibirDisciplinas()

console.log('\nAlunos de ADS')
ads.encontrarAlunos(ads.id, alunos)
console.log('\nAlunos de Alimentos')
ta.encontrarAlunos(ta.id, alunos)

console.log('\nProfessores de ADS')
ads.encontrarProf(ads.id, profs)
console.log('\nProfessores de Alimentos')
ta.encontrarProf(ta.id, profs)
