let darkModeActive = false;//Aqui você vai usar para que ele identifique quando ou não estar ativo

function darkmode() {
    let corpo = window.document.body
    let barralateral = window.document.querySelector('div.sidebar')
    let link = window.document.querySelectorAll('a')//todos os links pegos
    let foto = window.document.querySelector('img.eu')
    let botao = window.document.querySelector('div.sunmoon')

    if (!darkModeActive) {
        let color1 = '#202b26'
        let color2 = '#ffffff'
        let color3 = '#000000'
        let color4 = '#202b26f5'

        corpo.style.color = `${color2}`
        corpo.style.background = `${color1}`
        link.forEach(link => link.style.color = `${color2}`);//aqui vai mudar a cor de todos os links pegos
        barralateral.style.background = `${color4}`
        foto.style.border = `solid #ffffff 3px`
        botao.style.background = `linear-gradient(to left, ${color3} 50%, ${color2} 50%)`
        botao.style.border = `solid #ffffff 6px`
    } else {
        corpo.style.color = ''
        corpo.style.background = ''
        link.forEach(link => link.style.color = '');
        barralateral.style.background = ''
        foto.style.border = ''
        botao.style.background = ''
        botao.style.border = ''
    }
    darkModeActive = !darkModeActive;//aqui serve para ele voltar ao modo original caso estiver com as cores
}