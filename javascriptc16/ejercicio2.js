function sumar(n) {
    let resultado = 0;
    for (let i = 0; i < n.length; i++)
        resultado += Number(n[i].value);
    return resultado;
}

const RegistroForm2 = document.getElementById("ejercicio2")
RegistroForm2.addEventListener('submit'), (e) => {
    e.preventDefault();

    let numeros = registroForm2.querySelectorAll('input');

    function sumar(numeros);

    document.getElementById("Mensaje2").innerHTML = `El resultado de la suma es: ${resultado}`;
}