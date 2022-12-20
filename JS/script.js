testarApi()

function testarApi(){
  $.ajax({
    url: "https://tofapi.incin.net/scryglass/player/uid?uid=1500810700",
    method:'get',
    crossDomain: true,
    success: function (response) {
        console.log(response)
        /**
         * response intro
         */
        $('.nickname').html("Nick: " + response['results'][0]['nickname'])
        $('.guildName').html("Guild: " + response['results'][0]['guildName'])
        $('.server').html("Server: " + response['results'][0]['server'])
        $('.cs').html("CS: " + response['results'][0]['cs'])
        $('.level').html("Level: " + response['results'][0]['level'])

        /**
         * response weapon
        */
        $('.weapon-name-0').html(response['results'][0]['weapons'][0]['id'])
        $('.weapon-lv-0').html("Level: " + response['results'][0]['weapons'][0]['level'])
        $('.weapon-star-0').html("Estrelas: " + response['results'][0]['weapons'][0]['advancement'])

        $('.weapon-name-1').html(response['results'][0]['weapons'][1]['id'])
        $('.weapon-lv-1').html("Level: " + response['results'][0]['weapons'][1]['level'])
        $('.weapon-star-1').html("Estrelas: " + response['results'][0]['weapons'][1]['advancement'])

        $('.weapon-name-2').html(response['results'][0]['weapons'][2]['id'])
        $('.weapon-lv-2').html("Level: " + response['results'][0]['weapons'][2]['level'])
        $('.weapon-star-2').html("Estrelas: " + response['results'][0]['weapons'][2]['advancement'])

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
          let atk, atkE, soma
          const maxAtk = 1681
          for(let i=0; i<6; i++){
            atk = zeraValor(parseInt(response['results'][0]['equipments'][listaItens[i]]['stats']['CommonAtk']))
            atkE = zeraValor(parseInt(response['results'][0]['equipments'][listaItens[i]]['stats']['FireAtk']))
            soma = (((atk + atkE)*100)/maxAtk)
            $(listaClasse[i] + " .eficiencia").css('width', soma.toFixed(2)+'%')
            $(listaClasse[i] + " .porcentagem").html(soma.toFixed(2)+'%')
          }
        }
        calculoEficiencia()
      },
      error: function (error) {
        $('#target').html("['error' => '"+error.statusText+"']");
    }
  })
}