const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// form.addEventListener("submit", sumaInputValues);

// function sumaInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener("click", sumaInputValues);

function sumaInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

// const p = document.querySelector("p");
// const parrafito = document.getElementsByClassName("parrafito");
// const pid = document.getElementById("pid");

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = "Patito <br> Feo";
// h1.innerText = "Patito <br> Feo";
// // console.log(h1.getAttribute("verde"));
// // h1.setAttribute("class", "rojo");

// h1.classList.add("rojo");
// h1.classList.remove("verde");
// // h1.classList.toggle("verde");
// // h1.classList.contains("verde");

// input.value = "456";

// const img = document.createElement("img"); // Creamos una imagen con document.creat...
// img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png"); // Le pusimos los atributos y cosas que queriamos hacerle.
// console.log(img); // Imprimimos la imagen en la consola(link).

// pid.append(img); // Insertamos la imagen dentro de otro contenedor que ya existia.
