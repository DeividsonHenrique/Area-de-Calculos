
//Área de somar

function somar(){
    let valorSoma1 = Number(document.getElementById('sm1').value)
    let valorSoma2 = Number(document.getElementById('sm2').value)
    let valorResSoma = document.getElementById('resSoma')

    let estiloOriginal = valorResSoma.getAttribute('style')
    let soma = valorSoma1 + valorSoma2

    valorResSoma.setAttribute('style', 'font-size: 20px; background-color: midnightblue; box-shadow: 0px 0px 15px 1px blue; transition: all .3s ease-in-out;')
    valorResSoma.textContent = `A soma entre ${valorSoma1} + ${valorSoma2} = ${soma}`

    document.getElementById('sm1').value = ''
    document.getElementById('sm2').value = ''

    setTimeout(() => {
        valorResSoma.textContent = ''
        valorResSoma.setAttribute('style', estiloOriginal)
        msnSoma();
    }, 5000)
    
}function msnSoma(){
    let valorResSoma = document.getElementById('resSoma')
    valorResSoma.textContent = 'Digite dois valores para somar.'
    valorResSoma.setAttribute('style', 'transition: all .3s ease-in-out')
}msnSoma()

//Fim da área de somar



//Área de múltiplicação


function multiplicar(){
    let valorMp1 = Number(document.getElementById('mp1').value)
    let valorMp2 = Number(document.getElementById('mp2').value)
    let valorResMp = document.getElementById('resMp')

    let estiloOriginal = valorResMp.getAttribute('style')
    let multiplicar = valorMp1 * valorMp2
    
    valorResMp.setAttribute('style', 'font-size: 20px; background-color: midnightblue; box-shadow: 0px 0px 15px 1px blue; transition: all .3s ease-in-out;')
    valorResMp.textContent = `A múltiplicação de ${valorMp1} x ${valorMp2} = ${multiplicar}`
    
     document.getElementById('mp1').value = ''
     document.getElementById('mp2').value = ''


    setTimeout(() => {
        valorResMp.textContent = ''
        valorResMp.setAttribute('style', estiloOriginal)
        msnMultiplicacao();
    }, 5000)
    
} function msnMultiplicacao(){
    let valorResMp = document.getElementById('resMp')
    valorResMp.textContent = 'Digite dois valores para Múltiplicar.'
    valorResMp.setAttribute('style', 'transition: all .3s ease-in-out')

 }msnMultiplicacao()


 //Fim da área de múltiplicação




 //Início da área de divisão


 function dividir(){
    let valorDiv1 = Number(document.getElementById('div1').value)
    let valorDiv2 = Number(document.getElementById('div2').value)
    let valorResDiv = document.getElementById('resDiv')

    let estiloOriginal = valorResDiv.getAttribute('style')
    let dividir = valorDiv1 / valorDiv2

    valorResDiv.setAttribute('style', 'font-size: 20px; background-color: midnightblue; box-shadow: 0px 0px 15px 1px blue; transition: all .3s ease-in-out;')
    valorResDiv.textContent = `A Divisão de ${valorDiv1} ÷ ${valorDiv2} = ${dividir}`

    document.getElementById('div1').value = ''
    document.getElementById('div2').value = ''

    setTimeout(() =>{
        valorResDiv.textContent = ''
        valorResDiv.setAttribute('style', estiloOriginal)
        msndivisao()
    }, 5000)

}function msndivisao(){
    let valorResDiv = document.getElementById('resDiv')
    valorResDiv.textContent = 'Digite dois valores para Dividir'
    valorResDiv.setAttribute('style', 'transition: all .3s ease-in-out')
}msndivisao()


//Fim da área de divisão




//Início da área de Subtração

function subtrair(){
    let valorSub1 = Number(document.getElementById('sub1').value)
    let valorSub2 = Number(document.getElementById('sub2').value)
    let valorResSub = document.getElementById('resSub')

    let estiloOriginal = valorResSub.getAttribute('style')
    let subtrair = valorSub1 - valorSub2

    valorResSub.setAttribute('style', 'font-size: 20px; background-color: midnightblue; box-shadow: 0px 0px 15px 1px blue; transition: all .3s ease-in-out;')
    valorResSub.textContent = `A subtração de ${valorSub1} - ${valorSub2} = ${subtrair}`

    document.getElementById('sub1').value = ''
    document.getElementById('sub2').value = ''

    setTimeout(() => {
        valorResSub.textContent = ''
        valorResSub.setAttribute('style', estiloOriginal)
        msnsubtrair()
    }, 5000)
} function msnsubtrair(){
    let valorResSub = document.getElementById('resSub')
    valorResSub.textContent = 'Digite dois valores para Subtrair'
    valorResSub.setAttribute('style', 'transition: all .3s ease-in-out')
}msnsubtrair()


//Fim da área de Subtração




//Início da área do módulo


function resto(){
    let valorRes1 = Number(document.getElementById('res1').value)
    let valorRes2 = Number(document.getElementById('res2').value)
    let valorRes = document.getElementById('res')

    let estiloOriginal = valorRes.getAttribute('style')
    let modulo = valorRes1 % valorRes2

    valorRes.setAttribute('style', 'font-size: 20px; background-color: midnightblue; box-shadow: 0px 0px 15px 1px blue; transition: all .3s ease-in-out;')
    valorRes.textContent = (`O Resto da Divião de ${valorRes1} | ${valorRes2} = ${modulo}`)

    document.getElementById('res1').value = ''
    document.getElementById('res2').value = ''

    setTimeout(() => {
        valorRes.textContent = ''
        valorRes.setAttribute('style', estiloOriginal)
        msnresto()
    }, 5000)
}function msnresto(){
    let valorRes = document.getElementById('res')
    valorRes.textContent = 'Digite dois valores para o Modulo'
    valorRes.setAttribute('style', 'transition: all .3s ease-in-out')
}msnresto()


//Fim da área de módulo