const nomeProduto = document.getElementById("nomeProduto")
const precoProduto = document.getElementById("precoProduto")
const categoria = document.getElementById("categoria")
const btnCadastrar = document.getElementById("btnCadastrar")
const mensagemErro = document.getElementById('mensagemErro')
const cadastroProduto = document.getElementById("cadastroProduto")

btnCadastrar.addEventListener("click", function (event) {
    event.preventDefault()
    let nome = nomeProduto.value
    let preco = precoProduto.value
    let categoriaProduto = categoria.value
    let precoD = precoProduto.value.trim()
    let precoCasa = parseFloat(preco)
    

    if (nome === "" || categoriaProduto === "" || preco === "") {
        mensagemErro.textContent = "Preencha os campos vazios!"
        return
    }
    if (isNaN(preco) || preco <= 0){
    mensagemErro.textContent = "Digite um numero maior que zero"
        return
    }
    preco = precoCasa.toFixed(2)
    const cadastroProd = document.createElement('div')
    if (categoriaProduto === "tecnologia") {
        cadastroProd.innerHTML = `<p><strong> Nome: ${nome} - R$${preco} - Categoria: ${categoriaProduto} </strong></p>`
    }
    else if (categoriaProduto === "alimentos") {
        cadastroProd.innerHTML = `<p style = "background-color: yellow"> Nome: ${nome} - R$${preco} - Categoria: ${categoriaProduto} </p>`
    }
    else {
        cadastroProd.innerHTML = `<p> Nome: ${nome} - R$${preco} - Categoria: ${categoriaProduto} </p>`
    }

    cadastroProduto.append(cadastroProd)
    form.reset()
})