let divCripto = document.getElementById('divCripto');
let divCriptoVazio = document.getElementById('divCriptoVazia');

document.getElementById('divBotaoCripto').addEventListener('click', function() {
   let conteudo = document.getElementById('divInput').value;
   
   if(conteudo){
      if (validarTexto(conteudo.trim())) {
         trocaDivDeLugar('existeConteudo');
         document.getElementById('divResposta').value = criptografar(conteudo);
     } else {
         alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
     }
   } else {
      trocaDivDeLugar()
   }
});

document.getElementById('divBotaoCripto2').addEventListener('click', function() {
   let conteudo = document.getElementById('divInput').value;
   if(conteudo){
      if (validarTexto(conteudo.trim())) {
         trocaDivDeLugar('existeConteudo');
         document.getElementById('divResposta').value = descriptografar(conteudo);
     } else {
         alert("Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.");
     }
   } else {
      trocaDivDeLugar()
   }
});

function trocaDivDeLugar(situacao) {
   if(situacao === 'existeConteudo'){
      divCripto.style.display = 'none';
      divCriptoVazio.style.display = 'flex';
   } else {     
      divCripto.style.display = 'flex';
      divCriptoVazio.style.display = 'none';
      setTimeout(() => {
         alert("Digite um texto!")     
      }, 100);
   }
}

function criptografar(texto) {
   return texto
       .replaceAll('e', 'enter')
       .replaceAll('i', 'imes')
       .replaceAll('a', 'ai')
       .replaceAll('o', 'ober')
       .replaceAll('u', 'ufat');
}

function descriptografar(texto) {
   return texto
       .replaceAll('enter', 'e')
       .replaceAll('imes', 'i')
       .replaceAll('ai', 'a')
       .replaceAll('ober', 'o')
       .replaceAll('ufat', 'u');
}

function validarTexto(texto) {
   for (let i = 0; i < texto.length; i++) {
       let char = texto[i];
       if (char < 'a' || char > 'z') {
           if (char !== ' ') return false;  
       }
   }
   return true;
}

document.getElementById('divBotaoCopiar').addEventListener('click', function() {
   const textoArea = document.getElementById('divResposta');
   textoArea.select();
   textoArea.setSelectionRange(0, 99999);
   document.execCommand('copy');
});

