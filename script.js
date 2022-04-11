
  let Contandovezes = 0
  let Carta1
  let Carta2
  let QuardarThis1 
  let QuardarThis2 
  let EstaVirado
  let ContadorJogadas = 0
  let Acertos = 0
  let quantascartas

  Start();
  function Start () {
    quantascartas =  prompt("Quantas cartas ?") 
    quantascartas = Math.floor(quantascartas)  /* Garante que seja um numero inteiro*/
    let ParOuImpar = quantascartas % 2;
  
  
  
  
    while (ParOuImpar !== 0 || quantascartas < 2 || quantascartas > 14) {
      quantascartas =  prompt("Erro, Quantas cartas deseja?")
      quantascartas = Math.floor(quantascartas)
      ParOuImpar = quantascartas % 2;
    }
      
    let UmASete = [1,2,3,4,5,6,7]
    UmASete.sort(comparador); // Assim as cartas que vou usar sempre vao mudar
    let CartasQueVouUsar = []
  
    for (let i = 0; i < (quantascartas/2); i++){
      CartasQueVouUsar.push(UmASete[i])
    }
    
    
    CartasQueVouUsar = CartasQueVouUsar.concat(CartasQueVouUsar);  // Depois de escolher as que vou usar crio pares para elas
    CartasQueVouUsar.sort(comparador);
    // Voce pode usar esse console nessa linha para ver a posição das cartas, caso queira testar algo "console.log(CartasQueVouUsar)"" 
  
  
    const Cartas = document.querySelector(".Cartas");
    Cartas.innerHTML = "";
    for (let i = 0; i < quantascartas; i++) {
      Cartas.innerHTML += ` <div onclick="VirarCarta(this)" class="Carta">
        <div class="front-face face">
            <img  class="aa${CartasQueVouUsar[i]}"src="/Projeto_04_parrotsCardGame/repositorio/front.png">
        </div>
        <div class="back-face face">
            <img   src="/Projeto_04_parrotsCardGame/repositorio/${CartasQueVouUsar[i]}.gif">
        </div>
    </div>`;
    }
  }

  function VirarCarta (elemento) {
    EstaVirado = elemento.children[0].classList
    
    if (EstaVirado.contains("Ativar") || Contandovezes >= 2){ // Previne clicar na mesma carta duas vezes seguidas e a trapaça explicada  no comentario abaixo

    }
    else{
      elemento.children[0].classList.add("Ativar");
      elemento.children[1].classList.add("Ativar");

      Testar (elemento)
     
    }
     
   }
    
   function DesVirarCarta () {

    QuardarThis1.children[0].classList.remove("Ativar");
    QuardarThis1.children[1].classList.remove("Ativar");

    QuardarThis2.children[0].classList.remove("Ativar");
    QuardarThis2.children[1].classList.remove("Ativar");

    Contandovezes = 0 // Colocar o contador aqui previne a trapaça de clicar em mais de 2 cartas para bugar o sistema de desvirar
 }




  function Testar (elemento) {
    Contandovezes ++ 

    Carta1 = String(elemento.children[0].children[0].classList)


    if (Contandovezes === 1){
      QuardarThis1 = elemento
      Carta2 = Carta1
    }

    if (Contandovezes == 2 && Carta1 == Carta2){

      Contandovezes = 0
      Acertos ++
    }

    if (Contandovezes === 2 && Carta1 != Carta2){
      QuardarThis2 = elemento

      setTimeout (DesVirarCarta, 1000); 
    }

    ContarJogadas ()
   }


   function ContarJogadas (){
    ContadorJogadas ++ 


    if (Acertos >= (quantascartas/2) ) {
      setTimeout (Vitoria, 500);
      
    }

   }

   function Vitoria () {
    alert (`Ganhou o jogo em ${ContadorJogadas} Jogadas`)

    let resposta = prompt("Deseja jogar novamente ?")

    if (resposta === "sim")
    {
      Acertos = 0
      ContadorJogadas = 0
      Start ()
    }
    else {

    }
   }




  function comparador() { 
    return Math.random() - 0.5; 
  }