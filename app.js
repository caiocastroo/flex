let euro, real, conversao

function calcular() {
    //entrada
    euro = Number(frmEuro.inputEuro.value)
    real = Number(frmEuro.inputReal.value)
 
    //processamento
    conversao = real * euro
    //saída
    frmEuro.inputconversao.value = conversao.toFixed(2)
    //return false
}