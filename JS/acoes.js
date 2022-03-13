var slider = document.querySelector("#campo");
var saida = document.querySelector("#valor");
var precovenda = document.querySelector('#preco');

saida.innerHTML = slider.value;
precovenda.innerHTML = precovenda.value;

slider.oninput = function() {
    saida.innerHTML = this.value;
    var n = saida.innerHTML;
     
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
        else if ((n >= '100') && (n < '500')) {
            precovenda.value = '16.00';
            precovenda.innerHTML = precovenda.value;
        } 
        else if ((n >= '500') && (n < '1000')) {
            precovenda.value = '24.00';
            precovenda.innerHTML = precovenda.value;
        }
        else {
            precovenda.value = '36.00';
            precovenda.innerHTML = precovenda.value;
        }
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(225, 20%, 60%)' + x + '%)';
    slider.style.background = color;
})