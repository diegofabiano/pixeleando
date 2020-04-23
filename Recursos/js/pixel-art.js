// guardo en variables el ID paleta y grillaPixeles
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var numeroDePixeles = 1750; 

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// con esto genero la paleta
function recorroColores(){
  for (var i = 0; i < nombreColores.length; i++) { //recorro lista 
    var color = document.createElement('div'); //creo los divs
    color.className = ('color-paleta'); //le asigno la clase
    color.style.backgroundColor= nombreColores[i]; //le asigno el color que recorre en el for
    paleta.appendChild(color); //agrego a la var color como hijo de paleta
    }
}

recorroColores(); //Creo la paleta de colores en la pantalla

function recorroGrilla() {
  for (var i = 0; i <= numeroDePixeles; i++){
    var cuadrado = document.createElement('div');
    grillaPixeles.appendChild(cuadrado);
  }
}

recorroGrilla(); // creo la grilla de pixeles en pantalla

var indicador = document.getElementById("indicador-de-color"); //guardo el ID del indicador en una variable
paleta.addEventListener("click", cambiaColor); // acciono el cambio de color con un click

function cambiaColor(e){
  indicador.style.backgroundColor = e.target.style.backgroundColor; //función que cambia el color
}


grillaPixeles.addEventListener("click", pintar); // se agrega evento. Ante un click se pinta el pixel seleccionado

function pintar (e){
 e.target.style.backgroundColor = indicador.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value; // Se guarda el color de la rueda en colorActual
    indicador.style.backgroundColor = colorActual; // cambia el indicador al colorActual

  })
);

var cursor = false; // el cursor en false no pinta si no está apretado

grillaPixeles.addEventListener("mousedown", pintarPixel);
grillaPixeles.addEventListener("mouseup", soltar);
grillaPixeles.addEventListener("mouseover", pintarMoviendo);

function pintarPixel(e){
  cursor=true;
}

function soltar(e) {
  cursor = false;
}

function pintarMoviendo(e) {
  if (cursor) {
    pintar(e);
  } 
}


var borrarTodo = $("#grilla-pixeles div"); // guardo en una variable todo el contenido de la grilla
$("#borrar").click (function (){ //selecciono el div borrar y le asigno una función ante el click
  borrarTodo.animate({"backgroundColor": "#ffffff"}, 2000); //cambio los valores con animación
})

$("#flash").click (function(){
  cargarSuperheroe(flash);
})

$("#wonder").click (function(){
  cargarSuperheroe(wonder);
})

$("#batman").click (function(){
  cargarSuperheroe(batman);
})

$("#invisible").click (function(){
  cargarSuperheroe(invisible);
})

$("#guardar").click (function (){
  guardarPixelArt();
})