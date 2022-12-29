let elmo = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let ombreira = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let bracadeira = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let cinto = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let peitoral = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}
let calca = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0
}

// $('.elemento:checked')[0][localStorage.getItem('elemento')]

function printaTela(){
  let elemento = $('.elemento:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  
  if(typeof(localStorage.getItem('elmo')) == 'string'){
    $('.elmo .atk').html(zeraValor(JSON.parse(localStorage.getItem('elmo'))[atkElemento]))
    $('.elmo .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('elmo'))[elemento]))
  } else {
    $('.elmo .atk').html(0)
    $('.elmo .e-atk').html(0)
  }
  
  if(typeof(localStorage.getItem('ombreira')) == 'string'){
    $('.ombreira .atk').html(zeraValor(JSON.parse(localStorage.getItem('ombreira'))[atkElemento]))
    $('.ombreira .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('ombreira'))[elemento]))
  } else {
    $('.ombreira .atk').html(0)
    $('.ombreira .e-atk').html(0)
  }

  if(typeof(localStorage.getItem('bracadeira')) == 'string'){
    $('.bracadeira .atk').html(zeraValor(JSON.parse(localStorage.getItem('bracadeira'))[atkElemento]))
    $('.bracadeira .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('bracadeira'))[elemento]))
  } else {
    $('.bracadeira .atk').html(0)
    $('.bracadeira .e-atk').html(0)
  }
  
  if(typeof(localStorage.getItem('cinto')) == 'string'){
    $('.cinto .atk').html(zeraValor(JSON.parse(localStorage.getItem('cinto'))[atkElemento]))
    $('.cinto .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('cinto'))[elemento]))
  } else {
    $('.cinto .atk').html(0)
    $('.cinto .e-atk').html(0)
  }

  if(typeof(localStorage.getItem('peitoral')) == 'string'){
    $('.peitoral .atk').html(zeraValor(JSON.parse(localStorage.getItem('peitoral'))[atkElemento]))
    $('.peitoral .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('peitoral'))[elemento]))
  } else {
    $('.peitoral .atk').html(0)
    $('.peitoral .e-atk').html(0)
  }
  
  if(typeof(localStorage.getItem('calca')) == 'string'){
    $('.calca .atk').html(zeraValor(JSON.parse(localStorage.getItem('calca'))[atkElemento]))
    $('.calca .e-atk').html(zeraValor(JSON.parse(localStorage.getItem('calca'))[elemento]))
  } else {
    $('.calca .atk').html(0)
    $('.calca .e-atk').html(0)
  }

  calculoEficiencia(atkElemento, elemento)
}

function zeraValor(response){
  if(!(response > 0))
    return 0
  else 
    return response
}

function calculoEficiencia(atkElemento, elemento){
  let listaItens = ['elmo', 'ombreira', 'bracadeira', 'cinto', 'peitoral', 'calca']
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca"]
  let atk, atkE, soma, somaTotal=0
  const maxAtk = 1681
  let calcula

  for(let i=0; i<6; i++){
    calcula = localStorage.getItem(listaItens[i])
    atk = 0
    atkE = 0

    if(typeof(calcula) == 'string'){
      calcula = JSON.parse(localStorage.getItem(listaItens[i]))
      atk = zeraValor(calcula[atkElemento])
      atkE = zeraValor(calcula[elemento])
    }

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
  console.log($('.elemento:checked')[0]['id'])
  localStorage.setItem('elemento', $('.elemento:checked')[0]['id'])
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
    $('#fade').fadeToggle(200)
    let elemento = $('.elemento:checked')[0]['id']
    id = id.replace('editar-', '')
    $('.equipamento-modal').attr('src',$('.'+id+' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src','img/status/'+elemento+'.webp')
  }
}

function cancelarStatus(){
  $('#fade').fadeToggle(200)
  $('.text-atk').val('')
  $('.text-atk-e').val('')
}

function salvaStatus(){
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal = $('.equipamento-modal')[0]['src']


  let link = window.location.href
  
  if(link == 'http://127.0.0.1:3000/index.html'){
    link = link.replace('index.html', '')
  }

  equipamentoModal = equipamentoModal.replace(link+'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')
  
  if(equipamentoModal == 'elmo') 
    setStatus(elmo, elemento, equipamentoModal)
  else if(equipamentoModal == 'ombreira') 
    setStatus(ombreira, elemento, equipamentoModal)
  else if(equipamentoModal == 'bracadeira')
    setStatus(bracadeira, elemento, equipamentoModal)
  else if(equipamentoModal == 'cinto')
    setStatus(cinto, elemento, equipamentoModal)
  else if(equipamentoModal == 'peitoral')
    setStatus(peitoral, elemento, equipamentoModal)
  else if(equipamentoModal == 'calca')
    setStatus(calca, elemento, equipamentoModal)
}

function setStatus(peca, elemento, equipamentoModal){
  peca[elemento] = Number($('.text-atk-e').val())
  peca[getEAtk(elemento)] = Number($('.text-atk').val())

  localStorage.setItem(equipamentoModal, JSON.stringify(peca))
  console.log(localStorage.getItem(equipamentoModal))
  
  cancelarStatus()
  printaTela()
}

function editaCritico(id){
  if($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else{
    $('#crit').fadeToggle(200)
    let elemento = $('.elemento:checked')[0]['id']
    id = id.replace('editar-', '')
    $('.crit-modal').attr('src',$('.'+id+' .equip-img')[0]['src'])
  }
}