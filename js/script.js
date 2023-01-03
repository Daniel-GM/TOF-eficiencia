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

$(`input[id=${localGet('menu-item')}]`).attr('checked', 'checked')
$(`input[id=${localGet('elemento')}]`).attr('checked', 'checked')
printaTela()

function displayNone() {
  $('.response').css('display', 'none')
  $('.response-critico').css('display', 'none')
  $('.response-JSON').css('display', 'none')
  $('.response-grafico').css('display', 'none')
}

function printaTela() {
  geraJSON()
  let menu = $('.menu-item:checked')[0]['id']
  let elemento = $('.elemento:checked')[0]['id']
  let atkElemento = getEAtk(elemento)
  let crit = getCrit(elemento)

  displayNone()
  if (menu == 'menu-atk') {
    $('.response').css('display', 'block')
  } else if (menu == 'menu-crit') {
    $('.response-critico').css('display', 'block')
  } else if (menu == 'menu-JSON') {
    $('.response-JSON').css('display', 'block')
  } else if (menu == 'menu-grafico') {
    $('.response-grafico').css('display', 'block')
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
  let listaAtaque = []
  let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ".barra-bota", ".barra-luva"]
  let atk, atkE, soma, critico, critTotal = 0, somaTotal = 0
  const maxAtk = 1681, maxCrit = 6103
  let calcula

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
      listaAtaque.push(soma)
    } else if (i < 8) {
      if (typeof (calcula) == 'string') {
        calcula = JSON.parse(localGet(listaItens[i]))
        critico = zeraValor(calcula[crit])
      }
      soma = (critico * 100) / maxCrit
      critTotal += soma
    }
    if (soma > 100) {
      $(listaClasse[i] + " .eficiencia").css('width', 100 + '%')
      $(listaClasse[i] + " .eficiencia").css('background-color', 'red')
      $(listaClasse[i] + " .porcentagem").html('Valor invalido!')
    } else {
      $(listaClasse[i] + " .eficiencia").css('background-color', '#63c384')
      $(listaClasse[i] + " .eficiencia").css('width', soma.toFixed(2) + '%')
      $(listaClasse[i] + " .porcentagem").html(soma.toFixed(2) + '%')
    }

    if (i == 5) {
      $(".total-ataque").html('Eficiência total dos equipamentos: ' + (((somaTotal) / 100) * maxAtk).toFixed(0))
      $(".barra-total .eficiencia").css('width', (somaTotal / 6).toFixed(2) + '%')
      $(".status-full .porcentagem").html((somaTotal / 6).toFixed(2) + '%')
      grafico(listaAtaque)
    }
    if (i == 7) {
      $(".total-critico").html('Eficiência total de Critico: ' + (((critTotal) / 100) * maxCrit).toFixed(0))
      $(".barra-total-crit .eficiencia").css('width', (critTotal / 2).toFixed(2) + '%')
      $(".status-full-crit .porcentagem").html((critTotal / 2).toFixed(2) + '%')
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

function salvaStatus() {
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal = $('.equipamento-modal')[0]['src']

  let link = window.location.href

  if (link == 'http://127.0.0.1:3000/index.html') {
    link = link.replace('index.html', '')
  }
  equipamentoModal = equipamentoModal.replace(link + 'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.webp', '')

  if (equipamentoModal == 'elmo') {
    let peca = JSON.parse(localGet('elmo'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  } else if (equipamentoModal == 'ombreira') {
    let peca = JSON.parse(localGet('ombreira'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  } else if (equipamentoModal == 'bracadeira') {
    let peca = JSON.parse(localGet('bracadeira'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  } else if (equipamentoModal == 'cinto') {
    let peca = JSON.parse(localGet('cinto'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  } else if (equipamentoModal == 'peitoral') {
    let peca = JSON.parse(localGet('peitoral'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  } else if (equipamentoModal == 'calca') {
    let peca = JSON.parse(localGet('calca'))
    if (peca == null)
      setStatus(elmo, elemento, equipamentoModal)
    else
      setStatus(peca, elemento, equipamentoModal)
  }
}

function setStatus(peca, elemento, equipamentoModal) {
  peca[elemento] = Number($('.text-atk-e').val())
  peca[getEAtk(elemento)] = Number($('.text-atk').val())

  if (peca[getEAtk(elemento)] > 1222) {
    alert("Ataque deve ser igual ou menor que 1222")
  } else if (peca[elemento] > 1629) {
    alert("Ataque elemental deve ser igual ou menor que 1629")
  } else if ((peca[getEAtk(elemento)] + peca[elemento]) > 1681) {
    alert("A soma passou de 100% de eficiência!")
  } else {
    localSet(equipamentoModal, JSON.stringify(peca))
    cancelarStatus()
    printaTela()
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
    $('.img-atk-e').attr('src', 'img/status/critico.png')
  }
}

function cancelarCrit() {
  $('#crit').fadeToggle(200)
  $('.text-crit').val('')
}

function salvarCrit() {
  let elemento = $('.elemento:checked')[0]['id']
  let equipamentoModal = $('.crit-modal')[0]['src']

  let link = window.location.href

  if (link == 'http://127.0.0.1:3000/index.html') {
    link = link.replace('index.html', '')
  }

  equipamentoModal = equipamentoModal.replace(link + 'img/equipamentos/', '')
  equipamentoModal = equipamentoModal.replace('.png', '')

  if (equipamentoModal == 'bota') {
    let peca = JSON.parse(localGet('bota'))
    if (peca == null)
      setCrit(bota, elemento, equipamentoModal)
    else
      setCrit(peca, elemento, equipamentoModal)
  }
  else if (equipamentoModal == 'luva') {
    let peca = JSON.parse(localGet('luva'))
    if (peca == null)
      setCrit(luva, elemento, equipamentoModal)
    else
      setCrit(peca, elemento, equipamentoModal)
  }
}

function setCrit(peca, elemento, equipamentoModal) {
  peca[getCrit(elemento)] = Number($('.text-crit').val())

  if (peca[getCrit(elemento)] > 6103) {
    alert("Critico deve ser igual ou menor que 6103")
  } else {
    localSet(equipamentoModal, JSON.stringify(peca))
    cancelarCrit()
    printaTela()
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
  debugger
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

console.log(JSON.parse(localGet('elmo'))['FireAtk'])
console.log(localGet('elemento'))

function grafico(listaAtaque) {
  console.log(listaAtaque)
  const ctx = document.getElementById('myChart')
  let elemento = localGet('elemento')

  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Elmo', 
        'Ombreira', 
        'Bracadeira', 
        'Cinto', 
        'Peitoral', 
        'Calça'
      ],
      datasets: [{
        label: `Time de fogo`,
        data: [
          listaAtaque[0].toFixed(2),
          listaAtaque[1].toFixed(2),  
          listaAtaque[2].toFixed(2), 
          listaAtaque[3].toFixed(2), 
          listaAtaque[4].toFixed(2), 
          listaAtaque[5].toFixed(2)
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}