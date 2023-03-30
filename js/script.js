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
let belico = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0,
  'percentThunder': 0,
  'percentIce': 0,
  'percentFire': 0,
  'percentPhy': 0,
}
let reator = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0,
  'percentThunder': 0,
  'percentIce': 0,
  'percentFire': 0,
  'percentPhy': 0,
}
let exoesqueleto = {
  'AtkThunder': 0,
  'AtkIce': 0,
  'AtkFire': 0,
  'AtkPhy': 0,
  'ThunderAtk': 0,
  'IceAtk': 0,
  'FireAtk': 0,
  'PhyAtk': 0,
  'percentThunder': 0,
  'percentIce': 0,
  'percentFire': 0,
  'percentPhy': 0,
}
let oculos = {
  'ThunderCrit': 0,
  'IceCrit': 0,
  'FireCrit': 0,
  'PhyCrit': 0,
  'percentThunder': 0,
  'percentIce': 0,
  'percentFire': 0,
  'percentPhy': 0,
}


$(`input[id=${localGet('menu-item')}]`).attr('checked', 'checked')
$(`input[id=${localGet('elemento')}]`).attr('checked', 'checked')

if (localGet('menu-item') != null && localGet('elemento') != null)
  printaTela()

function displayNone() {
  $('.response').css('display', 'none')
  $('.response-critico').css('display', 'none')
  $('.response-percent').css('display', 'none')
  $('.response-JSON').css('display', 'none')
  $('.response-grafico').css('display', 'none')
  $('.response-calculadora').css('display', 'none')
  $('.calculadora-ataque').css('display', 'none')
}

function printaTela() {
  geraJSON()
  let elemento = $('.elemento:checked')[0]['id']
  let menu = $('.menu-item:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  let crit = getCrit(elemento)

  displayNone()
  if (menu == 'menu-atk') {
    $('.response').css('display', 'block')
  } else if (menu == 'menu-crit') {
    $('.response-critico').css('display', 'block')
  } else if (menu == 'menu-percent') {
    $('.response-percent').css('display', 'block')
  } else if (menu == 'menu-JSON') {
    $('.response-JSON').css('display', 'block')
  } else if (menu == 'menu-grafico') {
    $('.response-grafico').css('display', 'block')
  } else if (menu == 'menu-calculadora') {
    $('.response-calculadora').css('display', 'flex')
  } else if (menu == 'menu-json') {
    $('.response-JSON').css('display', 'flex')
  } 

  

  if (typeof (localGet('elmo')) == 'string') {
    $('.elmo .atk').html(zeraValor(JSON.parse(localGet('elmo'))[atkElemento]))
    $('.elmo .e-atk').html(zeraValor(JSON.parse(localGet('elmo'))[elemento]))
  } else {
    $('.elmo .atk').html(0)
    $('.elmo .e-atk').html(0)
  }

  if (typeof (localGet('ombreira')) == 'string') {
    $('.ombreira .atk').html(zeraValor(JSON.parse(localGet('ombreira'))[atkElemento]))
    $('.ombreira .e-atk').html(zeraValor(JSON.parse(localGet('ombreira'))[elemento]))
  } else {
    $('.ombreira .atk').html(0)
    $('.ombreira .e-atk').html(0)
  }

  if (typeof (localGet('bracadeira')) == 'string') {
    $('.bracadeira .atk').html(zeraValor(JSON.parse(localGet('bracadeira'))[atkElemento]))
    $('.bracadeira .e-atk').html(zeraValor(JSON.parse(localGet('bracadeira'))[elemento]))
  } else {
    $('.bracadeira .atk').html(0)
    $('.bracadeira .e-atk').html(0)
  }

  if (typeof (localGet('cinto')) == 'string') {
    $('.cinto .atk').html(zeraValor(JSON.parse(localGet('cinto'))[atkElemento]))
    $('.cinto .e-atk').html(zeraValor(JSON.parse(localGet('cinto'))[elemento]))
  } else {
    $('.cinto .atk').html(0)
    $('.cinto .e-atk').html(0)
  }

  if (typeof (localGet('peitoral')) == 'string') {
    $('.peitoral .atk').html(zeraValor(JSON.parse(localGet('peitoral'))[atkElemento]))
    $('.peitoral .e-atk').html(zeraValor(JSON.parse(localGet('peitoral'))[elemento]))
  } else {
    $('.peitoral .atk').html(0)
    $('.peitoral .e-atk').html(0)
  }

  if (typeof (localGet('calca')) == 'string') {
    $('.calca .atk').html(zeraValor(JSON.parse(localGet('calca'))[atkElemento]))
    $('.calca .e-atk').html(zeraValor(JSON.parse(localGet('calca'))[elemento]))
  } else {
    $('.calca .atk').html(0)
    $('.calca .e-atk').html(0)
  }

  if (typeof (localGet('bota')) == 'string') {
    $('.bota .critico').html(zeraValor(JSON.parse(localGet('bota'))[crit]))
  } else {
    $('.bota .critico').html(0)
  }

  if (typeof (localGet('luva')) == 'string') {
    $('.luva .critico').html(zeraValor(JSON.parse(localGet('luva'))[crit]))
  } else {
    $('.luva .critico').html(0)
  }

  calculoEficiencia(atkElemento, elemento, crit)
}

function zeraValor(response) {
  if (!(response > 0))
    return 0
  else
    return response
}

function calculoEficiencia(atkElemento, elemento, crit) {
  let listaItens = ['elmo', 'ombreira', 'bracadeira', 'cinto', 'peitoral', 'calca', 'bota', 'luva']
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ".barra-bota", ".barra-luva"]
  let atk, atkE, soma, critico, critTotal = 0, somaTotal = 0
  const maxAtk = 1681, maxCrit = 6103
  let calcula

  let listaAtaque = []
  let listaCritico = []

  for (let i = 0; i < 8; i++) {
    calcula = localGet(listaItens[i])
    atk = 0
    atkE = 0
    critico = 0
    if (i < 6) {
      if (typeof (calcula) == 'string') {
        calcula = JSON.parse(localGet(listaItens[i]))
        atk = zeraValor(calcula[atkElemento])
        atkE = zeraValor(calcula[elemento])
      }
      soma = (((atk + atkE) * 100) / maxAtk)
      somaTotal += soma
      listaAtaque.push({ 'item': listaItens[i], 'ataque': (atk + atkE), 'porcentagem': soma })
      $(`.total-${listaItens[i]}`).html(`${(atk + atkE)}`)
    } else if (i < 8) {
      if (typeof (calcula) == 'string') {
        calcula = JSON.parse(localGet(listaItens[i]))
        critico = zeraValor(calcula[crit])
      }
      soma = (critico * 100) / maxCrit
      critTotal += soma
      listaCritico.push({ 'item': listaItens[i], 'critico': critico, 'porcentagem': soma })
    }
    if (soma > 100) {
      $(listaClasse[i] + " .eficiencia").css('width', 100 + '%')
      $(listaClasse[i] + " .eficiencia").css('background-color', 'red')
      $(listaClasse[i] + " .porcentagem").html('Valor invalido!')
    } else {
      $(listaClasse[i]).css('background', `linear-gradient(to right, #63c384 0%, #63c384 ${soma.toFixed(2)}%, #161616 ${soma.toFixed(2)}%)`)
      $(listaClasse[i] + " .porcentagem").html(soma.toFixed(2) + '%')
    }

    if (i == 5) {
      $(".total-ataque").html('Eficiência total de Ataque: ' + (((somaTotal) / 100) * maxAtk).toFixed(0))
      $(".barra-total").css('background', `linear-gradient(to right, #63c384 0%, #63c384 ${(somaTotal / 6).toFixed(2)}%, #161616 ${(somaTotal / 6).toFixed(2)}%)`)
      $(".status-full .porcentagem").html((somaTotal / 6).toFixed(2) + '%')
    }
    if (i == 7) {
      $(".total-critico").html('Eficiência total de Critico: ' + (((critTotal) / 100) * maxCrit).toFixed(0))
      $(".barra-total-crit").css('background', `linear-gradient(to right, #63c384 0%, #63c384 ${(critTotal / 2).toFixed(2)}%, #161616 ${(critTotal / 2).toFixed(2)}%)`)
      $(".status-full-crit .porcentagem").html((critTotal / 2).toFixed(2) + '%')
      getGrafico(listaAtaque, listaCritico)
    }
    if (i == 11) {
      $(".total-ataque-percent").html('Eficiência total de Ataque: ' + (((somaTotal) / 100) * maxAtk).toFixed(0))
      $(".barra-atk-total-percent").css('background', `linear-gradient(to right, #63c384 0%, #63c384 ${(critTotal / 2).toFixed(2)}%, #161616 ${(critTotal / 2).toFixed(2)}%)`)
      $(".status-full-atk-percent .porcentagem").html((critTotal / 2).toFixed(2) + '%')
      
    }
  }
}

$('.elemento').click(() => {
  localSet('elemento', $('.elemento:checked')[0]['id'])
  printaTela()
})

function getEAtk(elemento) {
  $('.icon-e-ataque').attr("src", "img/status/" + elemento + ".webp")
  if (elemento == 'ThunderAtk')
    return 'AtkThunder'
  else if (elemento == 'IceAtk')
    return 'AtkIce'
  else if (elemento == 'FireAtk')
    return 'AtkFire'
  else if (elemento == 'PhyAtk')
    return 'AtkPhy'
}

function editaEquipamento(id) {
  if ($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else {
    $('#fade').fadeToggle(200)
    let elemento = $('.elemento:checked')[0]['id']
    id = id.replace('editar-', '')
    $('.equipamento-modal').attr('src', $('.' + id + ' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src', 'img/status/' + elemento + '.webp')
  }
}

function cancelarStatus() {
  $('#fade').fadeToggle(200)
  $('.text-atk').val('')
  $('.text-atk-e').val('')
}

function salvaStatus(id) {
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal
  if (id == "submit-ataque") {
    equipamentoModal = $('.ataque-modal')[0]['src']
  } else {
    equipamentoModal = $('.ataque-calc')[0]['src']
  }


  let link = window.location.href

  if (link == 'http://127.0.0.1:5500/index.html') {
    link = link.replace('index.html', '')
  }
  equipamentoModal = equipamentoModal.replace(link + 'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')
  if (equipamentoModal == 'elmo') {
    let peca = JSON.parse(localGet('elmo'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  } else if (equipamentoModal == 'ombreira') {
    let peca = JSON.parse(localGet('ombreira'))
    if (peca == null)
      setStatus(ombreira, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  } else if (equipamentoModal == 'bracadeira') {
    let peca = JSON.parse(localGet('bracadeira'))
    if (peca == null)
      setStatus(bracadeira, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  } else if (equipamentoModal == 'cinto') {
    let peca = JSON.parse(localGet('cinto'))
    if (peca == null)
      setStatus(cinto, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  } else if (equipamentoModal == 'peitoral') {
    let peca = JSON.parse(localGet('peitoral'))
    if (peca == null)
      setStatus(peitoral, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  } else if (equipamentoModal == 'calca') {
    let peca = JSON.parse(localGet('calca'))
    if (peca == null)
      setStatus(calca, elemento, equipamentoModal, id)
    else
      setStatus(peca, elemento, equipamentoModal, id)
  }
}

function setStatus(peca, elemento, equipamentoModal, id) {
  if (id == "submit-ataque") {
    peca[elemento] = Number($('.text-atk-e').val())
    peca[getEAtk(elemento)] = Number($('.text-atk').val())
  } else {
    peca[elemento] = Number($('.text-atk-e-calculadora').val())
    peca[getEAtk(elemento)] = Number($('.text-atk-calculadora').val())
  }

  if (peca[getEAtk(elemento)] > 1222) {
    alert("Ataque deve ser igual ou menor que 1222")
  } else if (peca[elemento] > 1629) {
    alert("Ataque elemental deve ser igual ou menor que 1629")
  } else if ((peca[getEAtk(elemento)] + peca[elemento]) > 1681) {
    alert("A soma passou de 100% de eficiência!")
  } else {
    localSet(equipamentoModal, JSON.stringify(peca))
    if(id == "submit-ataque")
      cancelarStatus()
    else
      cancelarCalculadoraAtaque()
    printaTela()
    getGrafico()
  }
}

function getCrit(elemento) {
  if (elemento == 'ThunderAtk')
    return 'ThunderCrti'
  else if (elemento == 'IceAtk')
    return 'IceCrit'
  else if (elemento == 'FireAtk')
    return 'FireCrit'
  else if (elemento == 'PhyAtk')
    return 'PhyCrit'
}

function editaCritico(id) {
  if ($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else {
    $('#crit').fadeToggle(200)
    id = id.replace('editar-', '')
    $('.crit-modal').attr('src', $('.' + id + ' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src', 'img/status/critico.webp')
  }
}

function cancelarCrit() {
  $('#crit').fadeToggle(200)
  $('.text-crit').val('')
}

function salvarCrit(id) {
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal
  if (id == "submit-crit") {
    equipamentoModal = $('.crit-modal')[0]['src']
  } else {
    equipamentoModal = $('.crit-calc')[0]['src']
  }

  let link = window.location.href

  if (link == 'http://127.0.0.1:3000/index.html') {
    link = link.replace('index.html', '')
  }

  equipamentoModal = equipamentoModal.replace(link + 'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')

  if (equipamentoModal == 'bota') {
    let peca = JSON.parse(localGet('bota'))
    if (peca == null)
      setCrit(bota, elemento, id, equipamentoModal)
    else
      setCrit(peca, elemento, id, equipamentoModal)
  }
  else if (equipamentoModal == 'luva') {
    let peca = JSON.parse(localGet('luva'))
    if (peca == null)
      setCrit(luva, elemento, id, equipamentoModal)
    else
      setCrit(peca, elemento, id, equipamentoModal)
  }
}

function setCrit(peca, elemento, id, equipamentoModal) {
  if(id == "submit-crit")
    peca[getCrit(elemento)] = Number($('.text-crit').val())
  else
    peca[getCrit(elemento)] = Number($('.text-crit-calc').val())

  if (peca[getCrit(elemento)] > 6103) {
    alert("Critico deve ser igual ou menor que 6103")
  } else {
    localSet(equipamentoModal, JSON.stringify(peca))
    if(id == "submit-crit")
      cancelarCrit()
    else
      cancelarCalculadoraCrit()
    printaTela()
    getGrafico()
  }

}

function geraJSON() {
  let arrayJSON = [
    localGet('elmo'),
    localGet('ombreira'),
    localGet('bracadeira'),
    localGet('cinto'),
    localGet('peitoral'),
    localGet('calca'),
    localGet('bota'),
    localGet('luva')
  ]

  let stringJSON = JSON.stringify(arrayJSON)
  var blob = new Blob([stringJSON], { type: "application/json" })
  var url = URL.createObjectURL(blob)

  $('#json').attr("href", url)
  $('#json').attr("download", "backup-eficiencia.json")
  $('#json').attr("textContent", "Download backup.json")
}

function lerJSON() {
  const [file] = document.querySelector('input[type=file]').files
  const reader = new FileReader()
  const itens = ['elmo', 'ombreira', 'bracadeira', 'cinto', 'peitoral', 'calca', 'bota', 'luva']

  reader.addEventListener("load", () => {
    lista = JSON.parse(reader.result)
    for (i = 0; i < itens.length; i++) {
      localSet(itens[i], lista[i])
    }
    printaTela()
  }, false)
  if (file) {
    reader.readAsText(file)
  }
}

function localSet(chave, valor) {
  localStorage.setItem(chave, valor)
}

function localGet(chave) {
  return localStorage.getItem(chave)
}

$('.menu-item').click(() => {
  localSet('menu-item', $('.menu-item:checked')[0]['id'])
  printaTela()
})

function getGrafico(listaAtaque, listaCritico) {
  let divPAi = $('.response-grafico')[0]['children']
  listaAtaque.sort((x, y) => {
    return x.ataque - y.ataque
  })

  listaCritico.sort((x, y) => {
    return x.critico - y.critico
  })

  for (let i = 0; i < 8; i++) {
    if (i < 6) {
      $(divPAi[i]).find('.item-grafico').attr('src', `img/equipamentos/${listaAtaque[i]['item']}.webp`)

      $(divPAi[i]).find('span').html(
        `${listaAtaque[i]['ataque']} | 
        ${listaAtaque[i]['porcentagem'].toFixed(2)}%`
      )
      $(divPAi[i]).find('.barra-grafico').animate({
        width: `${listaAtaque[i]['porcentagem'].toFixed(2)}%`,
      }, 1000)

      if (listaAtaque[i] != undefined){
        if (listaAtaque[i]['porcentagem'] < 40 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', 'rgba(255,0,0')
        } else if (listaAtaque[i]['porcentagem'] < 70 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', '#ffff32')
        } else if (listaAtaque[i]['porcentagem'] <= 100 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', '#63c384')
        }
      }
    } else if (i < 8) {
      $(divPAi[i]).find('.item-grafico').attr('src', `img/equipamentos/${listaCritico[i - 6]['item']}.webp`)

      $(divPAi[i]).find('span').html(
        `${listaCritico[i - 6]['critico']} | 
        ${listaCritico[i - 6]['porcentagem'].toFixed(2)}%`
      )
      $(divPAi[i]).find('.barra-grafico').animate({
        width: `${listaCritico[i - 6]['porcentagem'].toFixed(2)}%`,
      }, 1000)

      if (listaCritico[i-6] != undefined){
        if (listaCritico[i-6]['porcentagem'] < 40 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', 'rgba(255,0,0')
        } else if (listaCritico[i-6]['porcentagem'] < 70 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', '#ffff32')
        } else if (listaCritico[i-6]['porcentagem'] <= 100 ) {
          $(divPAi[i]).find('.barra-grafico').css('background-color', '#63c384')
        }
      }
    }
  }
}

function calculaCrit(id) {
  if ($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else {
    $('#calculadora-crit').fadeToggle(200)
    id = id.replace('calc-', '')
    $('.crit-calc').attr('src', $('.' + id + ' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src', 'img/status/critico.webp')
  }
}

function verificaCalculadoraCrit() {
  let elemento = localGet('elemento')
  let equipamento = $('.crit-calc')[0]['src']

  let link = window.location.href

  if (link == 'http://127.0.0.1:3000/index.html') {
    link = link.replace('index.html', '')
  }

  equipamento = equipamento.replace(link + 'img/equipamentos/', '')
  equipamento = equipamento.replace('.webp', '')

  calculadoraResultado(equipamento, elemento)
}

function calculadoraResultado(equipamento, elemento) {
  $('.itens-modal .calc-crit-1').css('display', 'none')
  $('.itens-modal .calc-crit-2').css('display', 'flex')

  let itemDropado = Number($('.text-crit-calc').val())
  let itemAtual = 0

  if (JSON.parse(localGet(equipamento)) != null) {
    itemAtual = zeraValor(JSON.parse(localGet(equipamento))[getCrit(elemento)])
    itemDropado -= itemAtual
  }

  if (itemDropado > 0) {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`+${itemDropado}`)
    $('.calculadora-valor').css('color', '#63c384')
    $('.calculadora-porcentagem').html(`+${((itemDropado * 100) / 6103).toFixed(2)}%`)
    $('.calculadora-porcentagem').css('color', '#63c384')
  } else if (itemDropado < 0) {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`${itemDropado}`)
    $('.calculadora-valor').css('color', 'red')
    $('.calculadora-porcentagem').html(`${((itemDropado * 100) / 6103).toFixed(2)}%`)
    $('.calculadora-porcentagem').css('color', 'red')
  } else {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`0`)
    $('.calculadora-porcentagem').html(`0`)
    $('.calculadora-valor').css('color', '#fff')
    $('.calculadora-porcentagem').css('color', '#fff')
  }
}

function cancelarCalculadoraCrit() {
  $('#calculadora-crit').fadeToggle(200)
  $('.text-crit-calc').val('')
  setTimeout(() => {
    $('.itens-modal .calc-crit-1').css('display', 'flex')
    $('.itens-modal .calc-crit-2').css('display', 'none')
  }, 201)
}

function calculaAtaque(id) {
  if ($('.elemento:checked')[0] == undefined)
    alert('Selecione um elemento')
  else {
    $('#calculadora-ataque').fadeToggle(200)
    let elemento = $('.elemento:checked')[0]['id']
    id = id.replace('calc-', '')
    $('.equipamento-modal').attr('src', $('.' + id + ' .equip-img')[0]['src'])
    $('.img-atk-e').attr('src', 'img/status/' + elemento + '.webp')
  }
}

function verificaCalculadoraAtaque() {
  let elemento = localGet('elemento')
  let equipamento = $('.ataque-calc')[0]['src']

  let link = window.location.href

  if (link == 'http://127.0.0.1:3000/index.html') {
    link = link.replace('index.html', '')
  }

  equipamento = equipamento.replace(link + 'img/equipamentos/', '')
  equipamento = equipamento.replace('.webp', '')

  calculadoraResultadoAtaque(equipamento, elemento)
}

function calculadoraResultadoAtaque(equipamento, elemento) {
  $('.itens-modal .calc-ataque-1').css('display', 'none')
  $('.itens-modal .calc-ataque-2').css('display', 'flex')
  let atk = Number($('.text-atk-calculadora').val())
  let atkE = Number($('.text-atk-e-calculadora').val())
  let itemDropado = atk + atkE
  let itemAtual = 0

  if (JSON.parse(localGet(equipamento)) != null) {
    itemAtual = zeraValor(JSON.parse(localGet(equipamento))[elemento])
    itemAtual += zeraValor(JSON.parse(localGet(equipamento))[getEAtk(elemento)])
    itemDropado -= itemAtual
  }
  

  if (itemDropado > 0) {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`+${itemDropado}`)
    $('.calculadora-valor').css('color', '#63c384')
    $('.calculadora-porcentagem').html(`+${((itemDropado * 100) / 1681).toFixed(2)}%`)
    $('.calculadora-porcentagem').css('color', '#63c384')
  } else if (itemDropado < 0) {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`${itemDropado}`)
    $('.calculadora-valor').css('color', 'red')
    $('.calculadora-porcentagem').html(`${((itemDropado * 100) / 1681).toFixed(2)}%`)
    $('.calculadora-porcentagem').css('color', 'red')
  } else {
    $('.resultadoCrit').attr('src', `img/equipamentos/${equipamento}.webp`)
    $('.calculadora-valor').html(`0`)
    $('.calculadora-porcentagem').html(`0`)
    $('.calculadora-valor').css('color', '#fff')
    $('.calculadora-porcentagem').css('color', '#fff')
  }
  
}

function cancelarCalculadoraAtaque() {
  $('#calculadora-ataque').fadeToggle(200)
  $('.text-atk-calculadora').val('')
  $('.text-atk-e-calculadora').val('')
  setTimeout(() => {
    $('.itens-modal .calc-ataque-1').css('display', 'flex')
    $('.itens-modal .calc-ataque-2').css('display', 'none')
  }, 201)
}

let campoAtk = document.getElementById("campo-atk")
campoAtk.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque').click()
  }
})

let campoAtkE = document.getElementById("campo-atk-e")
campoAtkE.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque').click()
  }
})

let campoCrit = document.getElementById("campo-crit")
campoCrit.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-crit').click()
  }
})

let campoAtkCalc = document.getElementById("campo-atk-calc")
campoAtkCalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque-calc').click()
  }
})

let campoAtkECalc = document.getElementById("campo-atk-e-calc")
campoAtkECalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-ataque-calc').click()
  }
})

let campoCritCalc = document.getElementById("campo-crit-calc")
campoCritCalc.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    $('#submit-crit-calc').click()
  }
})