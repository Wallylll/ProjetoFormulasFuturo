/*Script Defeituoso

const clicavel = document.querySelectorAll('a');

clicavel.forEach(link => {

    link.addEventListener('mousedown', ()=> {
        link.classList.toggle('efeito_clicavel')
    });
    link.addEventListener('mouseup', ()=> {
        link.classList.toggle('efeito_clicavel')
    });

});
*/

/*const { createElement } = require("react");*/
const fechar = document.querySelector('#botaoFechar');
const pdf = document.querySelector('#pdf_container');

function abrirPDF(caminho){
    document.querySelector('#viewPDF').src = caminho;
    pdf.style.display = 'block';
}

fechar.addEventListener('click', ()=>{
    pdf.style.display = 'none';
})

function download(caminho){
    document.querySelector('#viewPDF').download = caminho;
}