Dupla: Leticia Gonçalves e Noemi Benedito
3 INFO B

const chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
      
    },
    {
        nome: "Ana",
        idade: 17,
       
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
       materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

//mostra os nomes dos aluno numerados
for (let i = 1; i < chamadaDeAlunos.length; i++) {
    console.log(i + ') ' + chamadaDeAlunos[i].nome)
}

if (materias.presenca.length < 2) {
        return{
            status: "erro",
            message: "sem nota minima de presença",
            materias:materias
        }
    }


//foi apenas isso que conseguiu dar certo, o resto das tentativas nenhuma rodou, tentamos criar function mas ainda não entendemos direito na pratica como funciona

//temos muita dificuldade nessa linguagem e provavelmente as primeiras provas serão zeradas, porém estamos começando a treinar e com o tempo vamos melhorar com a sintaxe :)


