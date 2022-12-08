class Pedidos {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.edit = null
    }
    salvar() {
        let produto = this.lerDados()
        if (this.validar(produto)) {
            if (this.edit == null) {
                this.adicionar(produto)
            } else {
                this.atualizar(this.edit, produto)
            }


        }
        this.listaTabela()
        this.cancelar()

    }
    listaTabela() {
        let acessar = document.getElementById('acessar')
        acessar.innerHTML = ''
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = acessar.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_açoes = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id
            td_produto.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = this.arrayProdutos[i].valor


            td_id.classList.add('center')

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/edit.png'
            imgEdit.setAttribute("onclick", "pedidos.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")")

            td_açoes.appendChild(imgEdit)

            let imgDelet = document.createElement('img')
            imgDelet.src = 'img/deletar.png'
            imgDelet.setAttribute("onclick", "pedidos.deletar(" + this.arrayProdutos[i].id + ")")
            td_açoes.appendChild(imgDelet)


            console.log(this.arrayProdutos)
        }
    }
    adicionar(produto) {
        produto.valor = parseFloat(produto.valor)
        this.arrayProdutos.push(produto)
        this.id++
    }
     
    
    editar(dados) {

        this.edit = dados.id

        document.getElementById('produto').value = dados.nomeProduto
        document.getElementById('valor').value = dados.valor

        document.getElementById('btn_1').innerHTML = 'Atualizar'

    }
    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto
                this.arrayProdutos[i].valor = produto.valor
            }
        }
    }

    lerDados() {
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value
        return produto;
    }
    validar(produto) {
        let msg = ''
        if (produto.nomeProduto == '') {
            msg += '. Informe o nome do produto \n'
        }
        if (produto.valor == '') {
            msg += '. Informe o preço do produto \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }
    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''

        document.getElementById('btn_1').innerHTML = 'Salvar'
        this.edit = null
    }
    deletar(id) {
        if (confirm(`Deseja realmente excluir o pedido ? `)) {
            let acessar = document.getElementById('acessar')

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1)
                    acessar.deleteRow(i)
                }
            }
        }



    }
}

let pedidos = new Pedidos()