let elmo = {
  'AtkThunder': 359,
  'AtkIce': 0,
  'AtkFire': 52,
  'AtkPhy': 0,
  'ThunderAtk': 500,
  'IceAtk': 0,
  'FireAtk': 683,
  'PhyAtk': 0
}
let ombreira = {
  'AtkThunder': 850,
  'AtkIce': 0,
  'AtkFire': 850,
  'AtkPhy': 0,
  'ThunderAtk': 364,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let bracadeira = {
  'AtkThunder': 275,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 800,
  'PhyAtk': 0
}
let cinto = {
  'AtkThunder': 261,
  'AtkIce': 0,
  'AtkFire': 354,
  'AtkPhy': 0,
  'ThunderAtk': 479,
  'IceAtk': 0,
  'FireAtk': 378,
  'PhyAtk': 0
}
let peitoral = {
  'AtkThunder': 358,
  'AtkIce': 0,
  'AtkFire': 464,
  'AtkPhy': 0,
  'ThunderAtk': 502,
  'IceAtk': 0,
  'FireAtk': 439,
  'PhyAtk': 0
}
let calca = {
  'AtkThunder': 231,
  'AtkIce': 0,
  'AtkFire': 270,
  'AtkPhy': 0,
  'ThunderAtk': 709,
  'IceAtk': 0,
  'FireAtk': 519,
  'PhyAtk': 0
}

function printaTela(){
  let elemento = $('.elemento:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  
  /* elmo */  
  $('.elmo .atk').html(elmo[atkElemento])
  $('.elmo .e-atk').html(elmo[elemento])
  /* ombreira */
  $('.ombreira .atk').html(ombreira[atkElemento])
  $('.ombreira .e-atk').html(ombreira[elemento])
  /* braçadeira */  
  $('.bracadeira .atk').html(bracadeira[atkElemento])
  $('.bracadeira .e-atk').html(bracadeira[elemento])
  /* cinto */
  $('.cinto .atk').html(cinto[atkElemento])
  $('.cinto .e-atk').html(cinto[elemento])
  /* peitoral */
  $('.peitoral .atk').html(peitoral[atkElemento])
  $('.peitoral .e-atk').html(peitoral[elemento])
  /* calça */
  $('.calca .atk').html(calca[atkElemento])
  $('.calca .e-atk').html(calca[elemento])

  calculoEficiencia(atkElemento, elemento)
}

function zeraValor(response){
  if(!(response > 0))
    return 0
  else 
    return response
}

function calculoEficiencia(atkElemento, elemento){
  let listaItens = [elmo, ombreira, bracadeira, cinto, peitoral, calca]
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ]
  let atk, atkE, soma, somaTotal=0
  const maxAtk = 1681
  for(let i=0; i<6; i++){
    atk = zeraValor(listaItens[i][atkElemento])
    atkE = zeraValor(listaItens[i][elemento])
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
  printaTela()
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

  equipamentoModal = equipamentoModal.replace('http://127.0.0.1:3000/img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')
  
  if(equipamentoModal == 'elmo') 
    setStatus(elmo, elemento)
  else if(equipamentoModal == 'ombreira') 
    setStatus(ombreira, elemento)
  else if(equipamentoModal == 'bracadeira')
    setStatus(bracadeira, elemento)
  else if(equipamentoModal == 'cinto')
    setStatus(cinto, elemento)
  else if(equipamentoModal == 'peitoral')
    setStatus(peitoral, elemento)
  else if(equipamentoModal == 'calca')
    setStatus(calca, elemento)
}

function setStatus(peca, elemento){
  peca[elemento] = Number($('.text-atk-e').val())
  peca[getEAtk(elemento)] = Number($('.text-atk').val())

  $('.text-atk').val('')
  $('.text-atk-e').val('')

  printaTela()
}

/*
helmet - elmo - 384 - 582
spaulders - ombreira - 360 - 332
bracers - braçadeira - 769 - 69
belt - cinto - 378 - 544
armor - peitoral - 0 - 640
leggguards - calca - 510 - 244
*/