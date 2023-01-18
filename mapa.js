//Arreglo con información
var infoRegiones = [["Región de Arica y Parinacota",["Morro de Arica","Parque Nacional Lauca","Museo San Miguel de Azapa"],"/img/arica.jpg"],
                    ["Región de Tarapacá",["Oficina Salitrera Humberstone","Playa Cavancha","Museo Regional de Iquique"],"/img/tarapaca.jpg"],
                    ["Región de Antofagasta",["La Portada","Mercado Municipal de Antofagasta","Plaza Colón y la Torre del Reloj"],"/img/antofagasta.jpg"],
                    ["Región de Atacama",["Desierto Florido","Playa Virgen y Bahía Inglesa","Volcan Ojos del Salado"],"/img/atacama.jpg"],
                    ["Región de Coquimbo",["Isla Damas","Valle del Elqui","Petroglifos"],"/img/coquimbo.jpg"],
                    ["Región de Valparaíso",["Casco Histórico de Valparaíso","Reloj de Flores","Casa Museo Isla Negra"],"/img/valparaiso.png"],
                    ["Región Metropolitana de Santiago",["Palacio de la Moneda","Cajón del Maipo","Museo de Arte Precolombino"],"/img/santiago.jpg"],
                    ["Región del Libertador General Bernardo O'Higgins",["Reserva Nacional Río Los Cipreses","Museo Colchagua","Playa Punta de Lobos"],"/img/ohiggins.jpg"],
                    ["Región del Maule",["Parque Nacional Radal Siete Tazas","Lago Colbún","Reserva Nacional Altos de Lircay"],"/img/maule.jpg"],
                    ["Región de Ñuble",["Termas de Chillán","Artesanías de Quinchamalí","Casa Museo Violeta Parra"],"/img/ñuble.jpg"],
                    ["Región del Biobío",["Salto del Laja","Pistas de esquí","Balneario de Quillón"],"/img/biobio.jpg"],
                    ["Región de La Araucanía",["Termas Geometricas","Parque Nacional Conguillio","Lago Villarrica"],"/img/araucania.jpg"],
                    ["Región de Los Ríos",["Saltos del Huilo-Huilo","Sistema de Fuertes de Valdivia","Mercado Fluvial de Valdivia"],"/img/rios.jpg"],
                    ["Región de Los Lagos",["Saltos de Petrohué","Volcan Osorno","Lago Llanquihue"],"/img/lagos.jpg"],
                    ["Región de Aysén del General Carlos Ibáñez del Campo",["Glaciar Exploradores","Catedral de Marmol","Parque Nacional Queulat"],"/img/aysen.jpg"],
                    ["Región de Magallanes y de la Antártica Chilena",["Fuerte Bulnes","Parque Nacional Torres del Paine","Cueva del Milodón"],"/img/magallanes.jpg"],]

$("#infoRegion").hide(); //comenzar con informacion oculta

//Mostrar informacion
$("#arica").mouseenter(function(){ //la funcion "mouseenter" funciona cuando el mouse entra en la zona de la etiqueta, mas abajo esta la otra funcion que permite ocultar la etiqueta al salir el mouse
    $("#imagen").attr("src",infoRegiones[0][2]); //modificar src de la etiqueta imagen mediante jquery
    $("#nombreRegion").html(`${infoRegiones[0][0]}`) //modificar el nombre de la region, infoRegiones[0][0] hace alusión a la primera posicion, del primer elemento del arreglo 
    for (let i = 0; i < 3; i++) { //iterador for, que permite agregar etiqueta <li> a la lista con id="listaAtractivos"
        $("#listaAtractivos").append($("<li>").html(infoRegiones[0][1][i]))
    }
    $("#infoRegion").show(); //funcion "show" muestra la tarjeta con info
})


$("#tarapaca").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[1][2]);
    $("#nombreRegion").html(`${infoRegiones[1][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[1][1][i]))
    }
    $("#infoRegion").show();
})

$("#antofagasta").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[2][2]);
    $("#nombreRegion").html(`${infoRegiones[2][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[2][1][i]))
    }
    $("#infoRegion").show();
})

$("#atacama").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[3][2]);
    $("#nombreRegion").html(`${infoRegiones[3][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[3][1][i]))
    }
    $("#infoRegion").show();
})

$("#coquimbo").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[4][2]);
    $("#nombreRegion").html(`${infoRegiones[4][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[4][1][i]))
    }
    $("#infoRegion").show();
})

$("#valparaiso").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[5][2]);
    $("#nombreRegion").html(`${infoRegiones[5][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[5][1][i]))
    }
    $("#infoRegion").show();
})

$("#santiago").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[6][2]);
    $("#nombreRegion").html(`${infoRegiones[6][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[6][1][i]))
    }
    $("#infoRegion").show();
})

$("#ohiggins").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[7][2]);
    $("#nombreRegion").html(`${infoRegiones[7][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[7][1][i]))
    }
    $("#infoRegion").show();
})

$("#maule").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[8][2]);
    $("#nombreRegion").html(`${infoRegiones[8][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[8][1][i]))
    }
    $("#infoRegion").show();
})

$("#ñuble").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[9][2]);
    $("#nombreRegion").html(`${infoRegiones[9][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[9][1][i]))
    }
    $("#infoRegion").show();
})

$("#biobio").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[10][2]);
    $("#nombreRegion").html(`${infoRegiones[10][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[10][1][i]))
    }
    $("#infoRegion").show();
})

$("#araucania").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[11][2]);
    $("#nombreRegion").html(`${infoRegiones[11][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[11][1][i]))
    }
    $("#infoRegion").show();
})

$("#rios").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[12][2]);
    $("#nombreRegion").html(`${infoRegiones[12][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[12][1][i]))
    }
    $("#infoRegion").show();
})

$("#lagos").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[13][2]);
    $("#nombreRegion").html(`${infoRegiones[13][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[13][1][i]))
    }
    $("#infoRegion").show();
})

$("#aysen").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[14][2]);
    $("#nombreRegion").html(`${infoRegiones[14][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[14][1][i]))
    }
    $("#infoRegion").show();
})

$("#magallanes").mouseenter(function(){
    $("#imagen").attr("src",infoRegiones[15][2]);
    $("#nombreRegion").html(`${infoRegiones[15][0]}`)
    for (let i = 0; i < 3; i++) {
        $("#listaAtractivos").append($("<li>").html(infoRegiones[15][1][i]))
    }
    $("#infoRegion").show();
})

//Ocultar informacion

$("#arica").mouseleave(function(){ //funcion "mouseleave" entra en accion cuando el mouse deja el area de la etiqueta 
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#tarapaca").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#antofagasta").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#atacama").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#coquimbo").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#valparaiso").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#santiago").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#ohiggins").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#maule").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#ñuble").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#biobio").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#araucania").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#rios").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#lagos").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#aysen").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

$("#magallanes").mouseleave(function(){
    $("#infoRegion").hide();
    $("#listaAtractivos").empty()
})

// Código para que informacion siga al mouse

var mouse = document.getElementById('infoRegion').style;

function seguir() {
    mouse.top = parseInt(window.event.pageY + 5) + "px";
    mouse.left = parseInt(window.event.pageX + 5) + "px";
  }

//Modificación de valores
var tituloNuevo = "";
$("#cambioTitulo").hide();
$("#selectorRegion").hide()
$("#selectorAtributo").hide();
$("#cambioAtributos").hide();
$("#cambioImagen").hide();

 
$("#selectorCambio").change(function(){
    switch($("#selectorCambio").val()){
        case "titulo":
            $("#selectorRegion").empty();
            $("#selectorRegion").show();
            $("#cambioTitulo").show();
            $("#selectorAtributo").hide();
            $("#cambioAtributos").hide();
            $("#selectorCambio").append($("<option>").html("Modificar").attr("value",""));
            for (let i = 0; i < 16; i++) {
                $("#selectorRegion").append($("<option>").html(infoRegiones[i][0]).attr("value",i))
            }
            break;
        case "atributos":
            $("#selectorRegion").empty();
            $("#selectorRegion").show();
            $("#cambioAtributos").show(); 
            $("#atributoNuevo").show();
            $("#selectorAtributo").show();
            $("#cambioTitulo").hide();
            $("#selectorRegion").append($("<option>").html("Modificar").attr("value",""));
            for (let i = 0; i < 16; i++) {
                $("#selectorRegion").append($("<option>").html(infoRegiones[i][0]).attr("value",i))
            }
            break;
        case "imagen":
            $("#selectorRegion").empty();
            $("#selectorRegion").show();
            $("#selectorRegion").append($("<option>").html("Modificar").attr("value",""));
            for (let i = 0; i < 16; i++) {
                $("#selectorRegion").append($("<option>").html(infoRegiones[i][0]).attr("value",i))
            }
            $("#cambioImagen").show();
            break;

    }
})

$("#selectorRegion").change(function(){
    $("#selectorAtributo").empty();
    $("#selectorAtributo").append($("<option>").html("Modificar").attr("value",""));
    for (let i = 0; i < 3; i++) {
        $("#selectorAtributo").append($("<option>").html(infoRegiones[parseInt($("#selectorRegion").val())][1][i]).attr("value",i))
    }
})

function guardarTitulo(){
    let valueRegion = parseInt($("#selectorRegion").val());
    var titulo =  $("#tituloNuevo").val();
    titulo = titulo.split(" ");
    for (let i = 0; i < titulo.length; i++) {
    titulo[i] = titulo[i][0].toUpperCase() + titulo[i].substr(1);
    }
    titulo = titulo.join(" ");
    console.log(titulo);
    infoRegiones[valueRegion][0] = titulo;
    $("#cambioTitulo").hide();
    $("#selectorRegion").hide();
    
}

function guardarAtributo(){
    let valueRegion = parseInt($("#selectorRegion").val());
    let valueAtributo = parseInt($("#selectorAtributo").val());
    var atributo =  $("#atributoNuevo").val();
            atributo = atributo[0].toUpperCase() + atributo.slice(1);
            infoRegiones[valueRegion][1][valueAtributo] = atributo;
            $("#cambioAtributo").hide();
            $("#selectorRegion").hide();
            $("#selectorAtributo").hide();
            $("#cambioAtributos").hide();
}

function guardarImagen(){ //no pude
    
    $("#selectorRegion").hide()
    $("#selectorAtributo").hide();
    $("#cambioImagen").hide();
}