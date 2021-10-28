
function cadastrar(){
    let nome = document.querySelector("input[name='nome']").value
    let date = document.querySelector("input[name='date']").value
    let Email = document.getElementById("Email").value
    let curso = document.querySelector("select[name='curso']").value

 

     let listaAlunos = document.createElement("li")

     listaAlunos.innerHTML = `Nome: ${nome}, Data de nascimento: ${date}, E-mail: ${Email}, curso: ${curso} `

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removerAluno(this)")
    listaAlunos.appendChild(removeButton)
    document.getElementById("alunosMatriculados").appendChild(listaAlunos)

}

function removerAluno(button){
    let removerLinha = button.parentNode
    document.getElementById("alunosMatriculados").removeChild(removerLinha)

}