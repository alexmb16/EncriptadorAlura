const enc = document.querySelector('#encriptar');
const des = document.querySelector('#desencriptar');
const cop = document.querySelector('#copiar');
//Funcion para encriptar
function encriptar(){
    let texto = document.querySelector("#textoArea").value.trim();
    let texto_salida = document.querySelector("#texto_salida");
    let resultado = document.querySelector("#resultado");
    let sinTexto = document.querySelector("#default");
    if (texto.length >0)
    {
        let textoSalida="";
        for(var i=0; i < texto.length; i++)
        {
            if(texto[i] == 'a'){
                textoSalida += "ai";
            }
            else if(texto[i] == 'e'){
                textoSalida += "enter";
            }
            else if(texto[i] == 'i'){
                textoSalida += "imes"; 
            }
            else if(texto[i] == 'o'){
                textoSalida += "ober"; 
            }
            else if(texto[i] == 'u'){
                textoSalida += "ufat"; 
            }
            else{
                textoSalida += texto[i];
            }
        }
        sinTexto.classList.add('invisible');
        resultado.classList.remove('invisible');
        texto_salida.innerHTML = textoSalida;
    }
    else
    {
        sinTexto.classList.remove('invisible');
        resultado.classList.add('invisible');
        texto_salida.innerHTML = " ";
    }
    return;
}
function desencriptar(){
    let texto = document.querySelector("#textoArea").value.trim();
    let texto_salida = document.querySelector("#texto_salida");
    let resultado = document.querySelector("#resultado");
    let sinTexto = document.querySelector("#default");
    if (texto.length >0)
    {
        texto=texto.replaceAll('ai', 'a');
        texto=texto.replaceAll('enter', 'e');
        texto=texto.replaceAll('imes', 'i');
        texto=texto.replaceAll('ober', 'o');
        texto=texto.replaceAll('ufat', 'u');
        
        sinTexto.classList.add('invisible');
        resultado.classList.remove('invisible');
        texto_salida.innerHTML = texto;
    }
    else
    {
        sinTexto.classList.remove('invisible');
        resultado.classList.add('invisible');
        texto_salida.innerHTML = " ";
    }
    return;
}
function clipboard(){
    const texto_salida = document.querySelector("#texto_salida");
    navigator.clipboard.writeText(texto_salida.value);
}

//funciones asignada a botones
enc.onclick=encriptar;
des.onclick=desencriptar;
cop.onclick=clipboard;