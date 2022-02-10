// Crie um objeto que receba ao menos três propriedades sobre você.

let aboutme = {
    nome: "Joy",
    idade: 25,
    bebida: "café"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

aboutme.comida = "Miojo"
console.log (aboutme)

// Remova uma propriedade desse objeto.

delete aboutme.idade

//Mostre no console todas as propriedades desse objeto.

console.log(aboutme)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Joy",
        idade: 25,
        telefone: "(11) 9 54498121",
        amigos: ["Leticia", "Analu", "Jessica", "Nathalya"]
    },
    {
        nnome: "Joy",
        idade: 25,
        telefone: "(11) 9 54498121",
        amigos: ["Leticia", "Analu", "Jessica", "Nathalya"]
    },    
    {
        nome: "Joy",
        idade: 25,
        telefone: "(11) 9 54498121",
        amigos: ["Leticia", "Analu", "Jessica", "Nathalya"]
    },
    {
        nome: "Joy",
        idade: 25,
        telefone: "(11) 9 54498121",
        amigos: ["Leticia", "Analu", "Jessica", "Nathalya"]
    },
    {
        nome: "Joy",
        idade: 25,
        telefone: "(11) 9 54498121",
        amigos: ["Leticia", "Analu", "Jessica", "Nathalya"]
    }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0], cadastro[1].amigos[1], cadastro[2].amigos[2], cadastro[3].amigos[3])