 document.querySelector (".hamburguer").addEventListener("click", ()=>
    document.querySelector(".container").classList.toggle("show-menu"));

    document.querySelector("#qtde").addEventListener("change", atualizarPreco)
    document.querySelector("#js").addEventListener("change", atualizarPreco)
    document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
    document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
    document.querySelector("#prazo").addEventListener("change", function() {
      const prazo = document.querySelector("#prazo").value
      document.querySelector("label[for=prazo]").innerHTML= `Prazo: ${prazo} semanas`
      atualizarPreco()
   })

    function atualizarPreco(){
       const qtde = document.querySelector("#qtde").value
       const temJS = document.querySelector("#js").checked
       const incluiLayout = document.querySelector("#layout-sim").checked
       const prazo = document.querySelector("#prazo").value


       let preco = qtde * 200;
       if(temJS) {
         preco = preco + (preco * 0.20)
       }
       if(incluiLayout){
         preco = preco + 600
       }
       let taxaUergencia = 1 - prazo*0.1
       preco = preco + (preco*taxaUergencia)
       document.querySelector("#preco").innerHTML = `R$  ${preco.toFixed(2)}`
    }

