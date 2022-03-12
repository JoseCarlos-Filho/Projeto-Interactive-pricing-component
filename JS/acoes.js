var slider = document.getElementById("campo");
var saida = document.getElementsByName("valor");
console.log(slider.value);

saida.innerHTML = slider.value;

slider.oninput = function() {
    saida.innerHTML = this.value;
}

slider.appEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(225, 20%, 60%)' + x + '%)';
    slider.style.background = color;
})