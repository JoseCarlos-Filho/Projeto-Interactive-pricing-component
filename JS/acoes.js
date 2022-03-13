var slider = document.querySelector("#campo");
var saida = document.querySelector("#valor");
var precovenda = document.querySelector('#preco');
var desconto = document.querySelector('#toggle');
console.log(desconto.checked);

saida.innerHTML = slider.value;

slider.oninput = function() {
    saida.innerHTML = this.value;
    var n = saida.innerHTML;
    var total_desc = precovenda.value;
    if (desconto.checked = 'false') {
        if ((n >= 0) && (n < 8)) {
            precovenda.value = '0.00';
            precovenda.innerHTML = precovenda.value;
        }
        else if ((n >= 8) && (n < 50)) {
            precovenda.value = '8.00';
            precovenda.innerHTML = precovenda.value;
        }
        else if ((n >= 50) && (n < 100)) {
            precovenda.value = '12.00';
            precovenda.innerHTML = precovenda.value;
        }
        else if ((n >= 100) && (n < 500)) {
            precovenda.value = '16.00';
            precovenda.innerHTML = precovenda.value;
        } 
        else if ((n >= 500) && (n < 1000)) {
            precovenda.value = '24.00';
            precovenda.innerHTML = precovenda.value;
        }
        else {
            precovenda.value = '36.00';
            precovenda.innerHTML = precovenda.value;
        }
    }
    else {
        if ((n >= 0) && (n < 8)) {
            precovenda.value = 0;
            total_desc.value = (precovenda.value * 0.25);
            precovenda.innerHTML = total_desc.value;
        }
        else if ((n >= 8) && (n < 50)) {
            precovenda.value = 8;
            total_desc.value = (precovenda.value * 0.25);
            console.log(tota_desc.value);
            precovenda.innerHTML = total_desc;
        }
        else if ((n >= 50) && (n < 100)) {
            precovenda.value = '12.00';
            total_desc = (precovenda.value * 0.25);
            precovenda.innerHTML = total_desc;
        }
        else if ((n >= 100) && (n < 500)) {
            precovenda.value = '16.00';
            total_desc = (precovenda.value * 0.25);
            precovenda.innerHTML = total_desc;
        } 
        else if ((n >= 500) && (n < 1000)) {
            precovenda.value = '24.00';
            total_desc = (precovenda.value * 0.25);
            precovenda.innerHTML = total_desc;
        }
        else {
            precovenda.value = '36.00';
            total_desc = (precovenda.value * 0.25);
            precovenda.innerHTML = total_desc;
        }
    }
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(225, 20%, 60%)' + x + '%)';
    slider.style.background = color;
})