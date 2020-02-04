function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno =  window.document.querySelector('input#dtNasc');
    var res = window.document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert(` [Erro] Verifique os dados e tente novamente!`)
    } else {
        var fsex = window.document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            // Sexo masculino
            if (idade < 13 && fsex[0].checked) {
                genero = 'Uma Criança do sexo Masculino'
                img.setAttribute('src', 'img/man_kid.jpg')
                document.body.style.background = '#89BDEE'
            } else if(idade >= 13 && idade < 18 && fsex[0].checked) {
                genero = 'um Adolescente do sexo Masculino'
                img.setAttribute('src', 'img/man_adolescente.jpg')
                document.body.style.background = '#89BDEE'
            } else if (idade >= 18 && idade < 30 && fsex[0].checked){
                genero = 'um Homem'
                img.setAttribute('src', 'img/man_20_anos.jpg')
                document.body.style.background = '#89BDEE'
            } else if (idade >= 30 && idade < 40 && fsex[0].checked) {
                genero = 'um Homem'
                img.setAttribute('src', 'img/man_30_anos.jpg')
                document.body.style.background = '#89BDEE'
            } else if (idade >= 40 && idade < 50 && fsex[0].checked) {
                genero = 'um Homem'
                img.setAttribute('src', 'img/man_40_anos.jpg')
                document.body.style.background = '#89BDEE'
            } else if (idade >= 50 && idade < 70 && fsex[0].checked) {
                genero = 'um Homem'
                img.setAttribute('src', 'img/man_50_anos.jpg')
                document.body.style.background = '#89BDEE'
            } else if (idade >= 70 && fsex[0].checked) {
                genero = 'um Homem'
                img.setAttribute('src', 'img/man_70_anos.jpg')
                document.body.style.background = '#89BDEE'
            // Sexo feminino
            } else if (idade < 13 && fsex[1].checked){
                genero = 'uma Criança do sexo Feminino'
                img.setAttribute('src', 'img/woman_kid.jpg')
                document.body.style.background = '#FB9889'
            } else if(idade >= 13 && idade < 18 && fsex[1].checked) {
                genero = 'um Adolescente do sexo Feminino'
                img.setAttribute('src', 'img/woman_adolescente.jpg')
                document.body.style.background = '#FB9889'
            } else if (idade >= 18 && idade < 30 && fsex[1].checked){
                genero = 'uma Mulher'
                img.setAttribute('src', 'img/woman_20_anos.jpg')
                document.body.style.background = '#FB9889'
            } else if (idade >= 30 && idade < 40 && fsex[1].checked) {
                genero = 'uma Mulher'
                img.setAttribute('src', 'img/woman_30_anos.jpg')
                document.body.style.background = '#FB9889'
            } else if (idade >= 40 && idade < 50 && fsex[1].checked) {
                genero = 'uma Mulher'
                img.setAttribute('src', 'img/woman_40_anos.jpg')
                document.body.style.background = '#FB9889'
            } else if (idade >= 50 && idade < 70 && fsex[1].checked) {
                genero = 'uma Mulher'
                img.setAttribute('src', 'img/woman_50_anos.jpg')
                document.body.style.background = '#FB9889'
            } else if (idade >= 70 && fsex[01].checked) {
                genero = 'uma Mulher'
                img.setAttribute('src', 'img/woman_70_anos.jpg')
                document.body.style.background = '#FB9889'
            }

            res.innerHTML = `Segundo os dados, identificamos que é ${genero} de ${idade} anos`
            res.appendChild(img)
    }
}