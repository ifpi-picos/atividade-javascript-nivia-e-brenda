const button = document.querySelector('button');
const divConteudo = document.querySelector('.conteudo');

button.addEventListener("mouseover", function() {
    divConteudo.style.display = "block";  
});

button.addEventListener("mouseout", function() {
    divConteudo.style.display = "none"; 
})