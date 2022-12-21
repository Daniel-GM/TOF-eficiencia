function buscaUID(){
  let id = $('.input-uid').val()
  console.log(id.length)
  if (id.length < 9){
    alert("UID invalida")
  } else {
    $(".loading-uid").css("display", "block");
    runApi(id)
  }
}

function runApi(id){

  $.ajax({
    url: `https://tofapi.incin.net/scryglass/player/uid?uid=${id}`,
    method:'get',
    crossDomain: true,
    success: function (response) {
      $(".loading-uid").css("display", "none")
      $(".uid").css("display", "none")
      $(".response").css("display", "block")
      /**
         * response intro
         */
        $('.nickname').html("Nickname: " + response['results'][0]['nickname'])
        $('.guildName').html("Guild: " + response['results'][0]['guildName'])
        $('.server').html("Server: " + response['results'][0]['server'])
        $('.cs').html("CS: " + response['results'][0]['cs'])
        $('.level').html("Level: " + response['results'][0]['level'])

        /**
         * response weapon
         */
        function adicionarConstelacao(response, div){
          for(var i=0; i<6; i++) {
            if(response >= (i+1))
              $(".weapon-star-"+div+" .star"+(i+1)).attr("src", "/img/stars/trueStar.webp")
            else
              $(".weapon-star-"+div+" .star"+(i+1)).attr("src", "/img/stars/falseStar.webp")
          }
        }
        let weapon = response['results'][0]['weapons'][0]['id']
        $('.weapon-name-0').attr('src', "https://www.incin.net/scryglass/weapon/y"+weapon+".webp")
        $('.weapon-lv-0').html("Level: " + response['results'][0]['weapons'][0]['level'])
        adicionarConstelacao(response['results'][0]['weapons'][0]['advancement'], 0)

        weapon = response['results'][0]['weapons'][1]['id']
        $('.weapon-name-1').attr('src', "https://www.incin.net/scryglass/weapon/y"+weapon+".webp")
        $('.weapon-lv-1').html("Level: " + response['results'][0]['weapons'][1]['level'])
        adicionarConstelacao(response['results'][0]['weapons'][1]['advancement'], 1)

        weapon = response['results'][0]['weapons'][2]['id']
        $('.weapon-name-2').attr('src', "https://www.incin.net/scryglass/weapon/y"+weapon+".webp")
        $('.weapon-lv-2').html("Level: " + response['results'][0]['weapons'][2]['level'])
        adicionarConstelacao(response['results'][0]['weapons'][2]['advancement'], 2)

        /**
         * response equips
         */
        function zeraValor(response){
          if(!(response > 0))
            return 0
          else 
            return response
        }
        /* elmo */
        $('.elmo .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['helmet']['stats']['CommonAtk'])))
        $('.elmo .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['helmet']['stats']['FireAtk'])))
        /* ombreira */
        $('.ombreira .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['shawl']['stats']['CommonAtk'])))
        $('.ombreira .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['shawl']['stats']['FireAtk'])))
        /* braçadeira */
        $('.bracadeira .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['armband']['stats']['CommonAtk'])))
        $('.bracadeira .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['armband']['stats']['FireAtk'])))
        /* cinto */
        $('.cinto .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['belt']['stats']['CommonAtk'])))
        $('.cinto .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['belt']['stats']['FireAtk'])))
        /* peitoral */
        $('.peitoral .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['cloth']['stats']['CommonAtk'])))
        $('.peitoral .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['cloth']['stats']['FireAtk'])))
        /* calça */
        $('.calca .atk').html(zeraValor(parseInt(response['results'][0]['equipments']['pants']['stats']['CommonAtk'])))
        $('.calca .e-atk').html(zeraValor(parseInt(response['results'][0]['equipments']['pants']['stats']['FireAtk'])))

        /* porcentagens */
        function calculoEficiencia(){
          let listaItens = ["helmet", "shawl", "armband", "belt", "cloth", "pants"]
          let listaClasse = [".barra-elmo", ".barra-ombreira", ".barra-bracadeira", ".barra-cinto", ".barra-peitoral", ".barra-calca", ]
          let atk, atkE, soma, somaTotal=0
          const maxAtk = 1681
          for(let i=0; i<6; i++){
            atk = zeraValor(parseInt(response['results'][0]['equipments'][listaItens[i]]['stats']['CommonAtk']))
            atkE = zeraValor(parseInt(response['results'][0]['equipments'][listaItens[i]]['stats']['FireAtk']))
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
        calculoEficiencia()
      },
      error: function (error) {
        $(".loading-uid").css("display", "none")
        $('.erro').html("['error' => '"+error.statusText+"']");
    }
  })
}