const lista = document.getElementById("lista")

const alunos = ["josé","Maria","Ian","eduardo"]

for(const aluno of alunos){
    const p = document.createElement("p")
    p.textContent = aluno
    lista.appendChild(p)
}