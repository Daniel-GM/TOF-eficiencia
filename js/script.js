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
let bota = {
  'ThunderCrit': 0,
  'IceCrit': 0,
  'FireCrit': 0,
  'PhyCrit': 0
}
let luva = {
  'ThunderCrit': 0,
  'IceCrit': 0,
  'FireCrit': 0,
  'PhyCrit': 0
}

if(localStorage.getItem('elemento') == 'ThunderAtk'){
  $('input[id=ThunderAtk]').attr('checked', 'checked')
  printaTela()
}
else if(localStorage.getItem('elemento') == 'IceAtk'){
  $('input[id=IceAtk]').attr('checked', 'checked')
  printaTela()
}
else if(localStorage.getItem('elemento') == 'FireAtk'){
  $('input[id=FireAtk]').attr('checked', 'checked')
  printaTela()
}
else if(localStorage.getItem('elemento') == 'PhyAtk'){
  $('input[id=PhyAtk]').attr('checked', 'checked')
  printaTela()
}

function printaTela(){
  geraJSON()
  let elemento = $('.elemento:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  let crit = getCrit(elemento)
  
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

  if(typeof(localStorage.getItem('bota')) == 'string'){
    $('.bota .critico').html(zeraValor(JSON.parse(localStorage.getItem('bota'))[crit]))
  } else {
    $('.bota .critico').html(0)
  }

  if(typeof(localStorage.getItem('luva')) == 'string'){
    $('.luva .critico').html(zeraValor(JSON.parse(localStorage.getItem('luva'))[crit]))
  } else {
    $('.luva .critico').html(0)
  }

  calculoEficiencia(atkElemento, elemento, crit)
}

function zeraValor(response){
  if(!(response > 0))
    return 0
  else 
    return response
}

function calculoEficiencia(atkElemento, elemento, crit){
  let listaItens = ['elmo', 'ombreira', 'bracadeira', 'cinto', 'peitoral', 'calca', 'bota', 'luva']
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ".barra-bota", ".barra-luva"]
  let atk, atkE, soma, critico, critTotal = 0, somaTotal=0
  const maxAtk = 1681, maxCrit = 6103
  let calcula

  for(let i=0; i<8; i++){
    calcula = localStorage.getItem(listaItens[i])
    atk = 0
    atkE = 0
    critico = 0
    if(i < 6){
      if(typeof(calcula) == 'string'){
        calcula = JSON.parse(localStorage.getItem(listaItens[i]))
        atk = zeraValor(calcula[atkElemento])
        atkE = zeraValor(calcula[elemento])
      }
      soma = (((atk + atkE)*100)/maxAtk)
      somaTotal += soma
    }else if(i < 8){
      if(typeof(calcula) == 'string'){
        calcula = JSON.parse(localStorage.getItem(listaItens[i]))
        critico = zeraValor(calcula[crit])
      }
      soma = (critico*100)/maxCrit
      critTotal += soma
    }
    $(listaClasse[i] + " .eficiencia").css('width', soma.toFixed(2)+'%')
    $(listaClasse[i] + " .porcentagem").html(soma.toFixed(2)+'%')

    if(i == 5){
      $(".total-ataque").html('Eficiência total dos equipamentos: '+(((somaTotal)/100)*maxAtk).toFixed(0))
      $(".barra-total .eficiencia").css('width', (somaTotal/6).toFixed(2)+'%')
      $(".status-full .porcentagem").html((somaTotal/6).toFixed(2)+'%')
    }
    if(i == 7){
      $(".total-critico").html('Eficiência total de Critico: '+(((critTotal)/100)*maxCrit).toFixed(0))
      $(".barra-total-crit .eficiencia").css('width', (critTotal/2).toFixed(2)+'%')
      $(".status-full-crit .porcentagem").html((critTotal/2).toFixed(2)+'%')
    }
    
  }
}

$('.elemento').click(() => {
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
  
  if(equipamentoModal == 'elmo') {
    let peca = JSON.parse(localStorage.getItem('elmo'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }  else if(equipamentoModal == 'ombreira') {
    let peca = JSON.parse(localStorage.getItem('ombreira'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }  else if(equipamentoModal == 'bracadeira'){
    let peca = JSON.parse(localStorage.getItem('bracadeira'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }  else if(equipamentoModal == 'cinto'){
    let peca = JSON.parse(localStorage.getItem('cinto'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }  else if(equipamentoModal == 'peitoral'){
    let peca = JSON.parse(localStorage.getItem('peitoral'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }  else if(equipamentoModal == 'calca'){
    let peca = JSON.parse(localStorage.getItem('calca'))
    if(peca == null)
      setStatus(elmo, elemento, equipamentoModal)  
    else
      setStatus(peca, elemento, equipamentoModal)
  }
}

function setStatus(peca, elemento, equipamentoModal){
  peca[elemento] = Number($('.text-atk-e').val())
  peca[getEAtk(elemento)] = Number($('.text-atk').val())

  localStorage.setItem(equipamentoModal, JSON.stringify(peca))
  
  cancelarStatus()
  printaTela()
}

function getCrit(elemento){
  if(elemento == 'ThunderAtk')
    return 'ThunderCrti'
  else if(elemento == 'IceAtk')
    return 'IceCrit'
  else if(elemento == 'FireAtk')
    return 'FireCrit'
  else if(elemento == 'PhyAtk')
    return 'PhyCrit'
}

function editaCritico(id){
  if($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else{
    $('#crit').fadeToggle(200)
    id = id.replace('editar-', '')
    $('.crit-modal').attr('src',$('.'+id+' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src','img/status/critico.png')
  }
}

function cancelarCrit(){
  $('#crit').fadeToggle(200)
  $('.text-crit').val('')
}

function salvarCrit(){
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal = $('.crit-modal')[0]['src']

  let link = window.location.href
  
  if(link == 'http://127.0.0.1:3000/index.html'){
    link = link.replace('index.html', '')
  }

  equipamentoModal = equipamentoModal.replace(link+'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.png', '')

  if(equipamentoModal == 'bota') {
    let peca = JSON.parse(localStorage.getItem('bota'))
    if(peca == null)
      setStatus(bota, elemento, equipamentoModal)  
    else
      setCrit(peca, elemento, equipamentoModal)
  }
  else if(equipamentoModal == 'luva') {
    let peca = JSON.parse(localStorage.getItem('luva'))
    if(peca == null)
      setStatus(luva, elemento, equipamentoModal)  
    else 
      setCrit(peca, elemento, equipamentoModal)
  }
}

function setCrit(peca, elemento, equipamentoModal){
  peca[getCrit(elemento)] = Number($('.text-crit').val())

  localStorage.setItem(equipamentoModal, JSON.stringify(peca))
  
  cancelarCrit()
  printaTela()
}

function geraJSON(){
  let arrayJSON = [
    localStorage.getItem('elmo'),
    localStorage.getItem('ombreira'),
    localStorage.getItem('bracadeira'),
    localStorage.getItem('cinto'),
    localStorage.getItem('peitoral'),
    localStorage.getItem('calca'),
    localStorage.getItem('bota'),
    localStorage.getItem('luva')
  ]

  let stringJSON = JSON.stringify(arrayJSON)
  var blob = new Blob([stringJSON], {type: "application/json"})
  var url  = URL.createObjectURL(blob)
    
  $('#json').attr("href", url)
  $('#json').attr("download", "backup-eficiencia.json")
  $('#json').attr("textContent", "Download backup.json")
}

function lerJSON() {
  debugger
  const [file] = document.querySelector('input[type=file]').files
  const reader = new FileReader()
  const itens = ['elmo', 'ombreira', 'bracadeira', 'cinto', 'peitoral', 'calca', 'bota', 'luva']

  reader.addEventListener("load", () => {
    lista = JSON.parse(reader.result)
    for(i=0; i<itens.length; i++){
      importBackup(itens[i], lista[i])
    }
    printaTela()
  }, false)
  if (file) {
    reader.readAsText(file)
  }
}

function importBackup(equipamento, status){
  localStorage.setItem(equipamento, status)
}