const inputTxt = document.getElementById("input-txt");
const lista = document.getElementById("lista");
const adicionarBTN = document.getElementById("btn");
const limparBtn = document.getElementById("btn2");

function adicionar(e) {
  if (e.key === "Enter") {
    criarLista(inputTxt.value);
    inputTxt.value = "";
    inputTxt.placeholder = "E ai o que vamos fazer hoje?";
  }
}

function adicionarbtn() {
  criarLista(inputTxt.value);
  inputTxt.value = "";
  inputTxt.placeholder = "E ai o que vamos fazer hoje?";
}

function criarLista(texto) {
  let newLi = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  input.addEventListener("change", () => {
    if (input.checked) {
      newLi.style.textDecoration = "line-through";
    } else {
      newLi.style.textDecoration = "none";
    }
  });

  newLi.style.listStyleType = "none";

  // Criação do botão de apagar
  const apagar = document.createElement("button");
  apagar.textContent = "X";
  apagar.style.height = "1rem";
  apagar.style.width = "1rem";
  apagar.style.marginBottom = "1px";
  apagar.style.marginLeft = "1rem";
  apagar.style.background = "transparent";
  apagar.style.color = "red";
  apagar.style.border = "1px solid rgba(255, 255, 255, 0.474)";
  apagar.style.fontSize = "1rem";
  apagar.style.marginLeft = "1rem";
  apagar.addEventListener("click", () => {
    newLi.remove();
  });
  newLi.style.borderRadius = "0.5rem";
  newLi.style.backgroundColor = "rgba(0, 0, 0, 0.624)";
  newLi.style.width = "50rem";

  newLi.appendChild(input);
  newLi.append(document.createTextNode(texto));
  newLi.append(apagar);

  lista.appendChild(newLi);
}

function limpar() {
  lista.innerHTML = "";
  inputTxt.placeholder = "E ai o que vamos fazer hoje?";
}

inputTxt.addEventListener("keyup", adicionar);
adicionarBTN.addEventListener("click", adicionarbtn);
limparBtn.addEventListener("click", limpar);
