
function esconde(frase, imagem){
frase.addEventListener('click', function(){
    imagem.style.display = '';
})
frase.addEventListener('dblclick', function(){
    imagem.style.display = 'none';
})
}

function estender(frase, imagem){
    frase.addEventListener('click', function(){
        imagem.style.display = '';
        frase.style.display = 'none';
    })
    imagem.addEventListener('mouseleave', function(){
        imagem.style.display = 'none';
        frase.style.display = '';
    })
    }




export  {esconde, estender};