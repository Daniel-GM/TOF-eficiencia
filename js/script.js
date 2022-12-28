let elmo = new Map()
let ombreira = new Map()
let bracadeira = new Map()
let cinto = new Map()
let peitoral = new Map()
let calca = new Map()

elmo.set('AtkThunder', 359)
elmo.set('AtkIce', 0)
elmo.set('AtkFire', 52)
elmo.set('AtkPhy', 0)
elmo.set('ThunderAtk', 500)
elmo.set('IceAtk', 0)
elmo.set('FireAtk', 683)
elmo.set('PhyAtk', 0)

ombreira.set('AtkThunder', 850)
ombreira.set('AtkIce', 0)
ombreira.set('AtkFire', 850)
ombreira.set('AtkPhy', 0)
ombreira.set('ThunderAtk', 364)
ombreira.set('IceAtk', 0)
ombreira.set('FireAtk', 0)
ombreira.set('PhyAtk', 0)

bracadeira.set('AtkThunder', 275)
bracadeira.set('AtkIce', 0)
bracadeira.set('AtkFire', 0)
bracadeira.set('AtkPhy', 0)
bracadeira.set('ThunderAtk', 0)
bracadeira.set('IceAtk', 0)
bracadeira.set('FireAtk', 800)
bracadeira.set('PhyAtk', 0)

cinto.set('AtkThunder', 261)
cinto.set('AtkIce', 0)
cinto.set('AtkFire', 354)
cinto.set('AtkPhy', 0)
cinto.set('ThunderAtk', 479)
cinto.set('IceAtk', 0)
cinto.set('FireAtk', 378)
cinto.set('PhyAtk', 0)

peitoral.set('AtkThunder', 358)
peitoral.set('AtkIce', 0)
peitoral.set('AtkFire', 464)
peitoral.set('AtkPhy', 0)
peitoral.set('ThunderAtk', 502)
peitoral.set('IceAtk', 0)
peitoral.set('FireAtk', 439)
peitoral.set('PhyAtk', 0)

calca.set('AtkThunder', 231)
calca.set('AtkIce', 0)
calca.set('AtkFire', 270)
calca.set('AtkPhy', 0)
calca.set('ThunderAtk', 709)
calca.set('IceAtk', 0)
calca.set('FireAtk', 519)
calca.set('PhyAtk', 0)

let equipamentos = [elmo, ombreira, bracadeira, cinto, peitoral, calca]

function printaTela(equipamentos){
  let elemento = $('.elemento:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  
  /* elmo */
  $('.elmo .atk').html(equipamentos[0].get(atkElemento))
  $('.elmo .e-atk').html(equipamentos[0].get(elemento))
  
  /* ombreira */
  $('.ombreira .atk').html(equipamentos[1].get(atkElemento))
  $('.ombreira .e-atk').html(equipamentos[1].get(elemento))

  /* braçadeira */  
  $('.bracadeira .atk').html(equipamentos[2].get(atkElemento))
  $('.bracadeira .e-atk').html(equipamentos[2].get(elemento))

  /* cinto */
  $('.cinto .atk').html(equipamentos[3].get(atkElemento))
  $('.cinto .e-atk').html(equipamentos[3].get(elemento))

  /* peitoral */
  $('.peitoral .atk').html(equipamentos[4].get(atkElemento))
  $('.peitoral .e-atk').html(equipamentos[4].get(elemento))
  
  /* calça */
  $('.calca .atk').html(equipamentos[5].get(atkElemento))
  $('.calca .e-atk').html(equipamentos[5].get(elemento))

  calculoEficiencia(equipamentos, atkElemento, elemento)
}

function zeraValor(response){
  if(!(response > 0))
    return 0
  else 
    return response
}

/* porcentagens */
function calculoEficiencia(listaItens, atkElemento, elemento){
  console.log(listaItens)
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ]
  let atk, atkE, soma, somaTotal=0
  const maxAtk = 1681
  for(let i=0; i<6; i++){
    atk = zeraValor(listaItens[i].get(atkElemento))
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

$('.elemento').click(() => {
  printaTela(equipamentos)
})  

function getEAtk(elemento){
  $('.icon-e-ataque').attr("src","img/status/"+elemento+".webp")
  if(elemento == 'ThunderAtk')
    return 'AtkThunder'
  else if(elemento == 'IceAtk')
    return 'AtkIce'
  else if(elemento == 'FireAtk')
    return 'AtkFire'
  else if(elemento == 'PhyAtk')
    return 'AtkPhy'
}

function editaEquipamento(id){
  if($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else{
    let elemento = $('.elemento:checked')[0]['id']
    id = id.replace('editar-', '')
    $('.equipamento-modal').attr('src',$('.'+id+' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src','img/status/'+elemento+'.webp')
  }
}

function salvaStatus(){
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal = $('.equipamento-modal')[0]['src']
  let escolha

  equipamentoModal = equipamentoModal.replace('http://127.0.0.1:3000/img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')
  
  if(equipamentoModal == 'elmo') escolha = 0
  if(equipamentoModal == 'ombreira') escolha = 1
  if(equipamentoModal == 'bracadeira') escolha = 2
  if(equipamentoModal == 'cinto') escolha = 3
  if(equipamentoModal == 'peitoral') escolha = 4
  if(equipamentoModal == 'calca') escolha = 5

  equipamentos[escolha].set(elemento, Number($('.text-atk-e').val()))
  equipamentos[escolha].set(getEAtk(elemento), Number($('.text-atk').val()))

  $('.text-atk').val('')
  $('.text-atk-e').val('')

  printaTela(equipamentos)
}

/*
helmet - elmo - 384 - 582
spaulders - ombreira - 360 - 332
bracers - braçadeira - 769 - 69
belt - cinto - 378 - 544
armor - peitoral - 0 - 640
leggguards - calca - 510 - 244
*/