// Seletores.

let seletorSwitch = document.querySelector(".switch input"),

    mesAno = document.querySelector(".mes"),
    preco = document.querySelector(".content3 .precofixo"),
    switcher = document.querySelector(".switch"),
    range = document.querySelector(".camposlider");

    // criação do preço no Switch;

    switcher.onclick = function() {

        if(seletorSwitch.checked == true) {

            let precoInt = parseInt(preco.textContent);
            preco.textContent = `${(precoInt - (precoInt * .25)) * 12}`;

            mesAno.textContent = `/year`;
        }
        else {

            upadatePrice()

            mesAno.textContent = `/month`;
        }
    }


    // adiciona seletor no verPage

    let verPage = document.querySelector(".content1 span");

    // adiciona evento listener no input

    range.addEventListener("input", upadatePrice);


// carregando o preço.

function upadatePrice() {

    if(range.value == 1) {
        
        if(seletorSwitch.checked == true) {
            preco.textContent = `${(8 - (8 * .25)) * 12}`;
        }
        else {
            preco.textContent = 8;
        }

        verPage.textContent = "10K";
    }

    if(range.value == 2) {

        if(seletorSwitch.checked == true) {
            preco.textContent = 108;
        }
        else {

            preco.textContent = 12;

        }

        verPage.textContent = "50K";
    }

    if(range.value == 3) {
        
        if(seletorSwitch.checked == true) {
            preco.textContent = 144;
        }
        else {

            preco.textContent = 16;

        }

        verPage.textContent = "100K";
    }

    if(range.value == 4) {
        if(seletorSwitch.checked == true) {
            preco.textContent = 216;
        }
        else {

            preco.textContent = 24;

        }

        verPage.textContent = "500K";
    }

    if(range.value == 5) {
        if(seletorSwitch.checked == true) {
            preco.textContent = 324;
        }
        else {

            preco.textContent = 36;

        }

        verPage.textContent = "1M";
    }
}

// range.addEventListener("mousemove", function(){
//     var x = range.value;
//     var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(225, 20%, 60%)' + x + '%)';
//     range.style.background = color;
// })