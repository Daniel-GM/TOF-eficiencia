setStatus()

function setStatus(){
  let elemento
  let elmo = new Map()
  let ombreira = new Map()
  let bracadeira = new Map()
  let cinto = new Map()
  let peitoral = new Map()
  let calca = new Map()

  elmo.set('Atk', 12)
  elmo.set('ThunderAtk', 1)
  elmo.set('IceAtk', 2)
  elmo.set('FireAtk', 3)
  elmo.set('PhyAtk', 4)

  ombreira.set('Atk', 0)
  ombreira.set('ThunderAtk', 1)
  ombreira.set('IceAtk', 2)
  ombreira.set('FireAtk', 3)
  ombreira.set('PhyAtk', 4)

  bracadeira.set('Atk', 0)
  bracadeira.set('ThunderAtk', 1)
  bracadeira.set('IceAtk', 2)
  bracadeira.set('FireAtk', 3)
  bracadeira.set('PhyAtk', 4)

  cinto.set('Atk', 0)
  cinto.set('ThunderAtk', 1)
  cinto.set('IceAtk', 2)
  cinto.set('FireAtk', 3)
  cinto.set('PhyAtk', 4)

  peitoral.set('Atk', 0)
  peitoral.set('ThunderAtk', 1)
  peitoral.set('IceAtk', 2)
  peitoral.set('FireAtk', 3)
  peitoral.set('PhyAtk', 4)

  calca.set('Atk', 0)
  calca.set('ThunderAtk', 1)
  calca.set('IceAtk', 2)
  calca.set('FireAtk', 3)
  calca.set('PhyAtk', 4)

  $('.elemento').click(() => {
    elemento = $('.elemento:checked')[0]['id']

    /* elmo */
    $('.elmo .atk').html(elmo.get('Atk'))
    $('.elmo .e-atk').html(elmo.get(elemento))
    
    /* ombreira */
    $('.ombreira .atk').html(ombreira.get('Atk'))
    $('.ombreira .e-atk').html(ombreira.get(elemento))

    /* braçadeira */  
    $('.bracadeira .atk').html(bracadeira.get('Atk'))
    $('.bracadeira .e-atk').html(bracadeira.get(elemento))

    /* cinto */
    $('.cinto .atk').html(cinto.get('Atk'))
    $('.cinto .e-atk').html(cinto.get(elemento))

    /* peitoral */
    $('.peitoral .atk').html(peitoral.get('Atk'))
    $('.peitoral .e-atk').html(peitoral.get(elemento))
    
    /* calça */
    $('.calca .atk').html(calca.get('Atk'))
    $('.calca .e-atk').html(calca.get(elemento))

    equipamentos = [elmo, ombreira, bracadeira, cinto, peitoral, calca]
    calculoEficiencia(equipamentos, elemento)
  })

   /**
   * response equips
   */
  function zeraValor(response){
    if(!(response > 0))
      return 0
    else 
      return response
  }

  /* porcentagens */
  function calculoEficiencia(listaItens, elemento){
    console.log(listaItens)
    let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ]
    let atk, atkE, soma, somaTotal=0
    const maxAtk = 1681
    for(let i=0; i<6; i++){
      atk = zeraValor(listaItens[i].get('atk'))
      atkE = zeraValor(listaItens[i].get(elemento))
      soma = (((atk + atkE)*100)/maxAtk)
      somaTotal = soma + somaTotal
      
      $(listaClasse[i] + " .eficiencia").css('width', soma.toFixed(2)+'%')
      $(listaClasse[i] + " .porcentagem").html(soma.toFixed(2)+'%')

      if(i == 5){
        $(".barra-total .eficiencia").css('width', (somaTotal/6).toFixed(2)+'%')
        $(".status-full .porcentagem").html((somaTotal/6).toFixed(2)+'%')
      }
    }
  }
}