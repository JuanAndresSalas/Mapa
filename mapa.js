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
$("#arica").on({
    mouseenter: function() { //la funcion "mouseenter" funciona cuando el mouse entra en la zona de la etiqueta, mas abajo esta la otra funcion que permite ocultar la etiqueta al salir el mouse
        $("#imagen").attr("src",infoRegiones[0][2]); //modificar src de la etiqueta imagen mediante jquery
        $("#nombreRegion").html(`${infoRegiones[0][0]}`) //modificar el nombre de la region, infoRegiones[0][0] hace alusión a la primera posicion, del primer elemento del arreglo 
        for (let i = 0; i < 3; i++) { //iterador for, que permite agregar etiqueta <li> a la lista con id="listaAtractivos"
            $("#atractivos").append($("<li>").html(infoRegiones[0][1][i]))
        }
        $("#infoRegion").show(); //funcion "show" muestra la tarjeta con info
        },
    mouseleave: function() { //funcion "mouseleave" entra en accion cuando el mouse deja el area de la etiqueta 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#tarapaca").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[1][2]);
        $("#nombreRegion").html(`${infoRegiones[1][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[1][1][i]))
        }
        $("#infoRegion").show(); 
        },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#antofagasta").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[2][2]);
        $("#nombreRegion").html(`${infoRegiones[2][0]}`)
        for (let i = 0; i < 3; i++) {
        $("#atractivos").append($("<li>").html(infoRegiones[2][1][i]))
        }
        $("#infoRegion").show(); 
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#atacama").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[3][2]);
        $("#nombreRegion").html(`${infoRegiones[3][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[3][1][i]))
        }
        $("#infoRegion").show(); 
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#coquimbo").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[4][2]);
        $("#nombreRegion").html(`${infoRegiones[4][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[4][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#valparaiso").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[5][2]);
        $("#nombreRegion").html(`${infoRegiones[5][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[5][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#santiago").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[6][2]);
        $("#nombreRegion").html(`${infoRegiones[6][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[6][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#ohiggins").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[7][2]);
        $("#nombreRegion").html(`${infoRegiones[7][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[7][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#maule").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[8][2]);
        $("#nombreRegion").html(`${infoRegiones[8][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[8][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#ñuble").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[9][2]);
        $("#nombreRegion").html(`${infoRegiones[9][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[9][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#biobio").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[10][2]);
        $("#nombreRegion").html(`${infoRegiones[10][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[10][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#araucania").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[11][2]);
        $("#nombreRegion").html(`${infoRegiones[11][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[11][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#rios").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[12][2]);
        $("#nombreRegion").html(`${infoRegiones[12][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[12][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#lagos").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[13][2]);
        $("#nombreRegion").html(`${infoRegiones[13][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[13][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#aysen").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[14][2]);
        $("#nombreRegion").html(`${infoRegiones[14][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[14][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

$("#magallanes").on({
    mouseenter: function() { 
        $("#imagen").attr("src",infoRegiones[15][2]);
        $("#nombreRegion").html(`${infoRegiones[15][0]}`)
        for (let i = 0; i < 3; i++) {
            $("#atractivos").append($("<li>").html(infoRegiones[15][1][i]))
        }
        $("#infoRegion").show();
    },
    mouseleave: function() { 
        $("#infoRegion").hide();
        $("#atractivos").empty();
    }
});

// Código para que informacion siga al mouse
var mouse = document.getElementById('infoRegion').style;

function seguir() {
    mouse.top = parseInt(window.event.pageY + 5) + "px";
    mouse.left = parseInt(window.event.pageX + 5) + "px";
  }

//Modificación de valores

$("#arica").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[0][0]);
    $("#inputAtractivos").text(infoRegiones[0][1]);
    $("#botonGuardar").on("click",function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[0][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[0][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[0][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;
        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
        
    })
}
)



$("#tarapaca").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[1][0]);
     $("#inputAtractivos").text(infoRegiones[1][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[1][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[1][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[1][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;
        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#antofagasta").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[2][0]);
    $("#inputAtractivos").text(infoRegiones[2][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[2][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[2][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[2][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
       
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
    })
}
)
$("#atacama").on("click",function(){
    $document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[3][0]);
    $("#inputAtractivos").text(infoRegiones[3][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[3][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[3][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[3][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#coquimbo").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[4][0]);
    $("#inputAtractivos").text(infoRegiones[4][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[4][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[4][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[4][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;
        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }

        
    })
}
)
$("#valparaiso").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[5][0]);
    $("#inputAtractivos").text(infoRegiones[5][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[5][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[5][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[5][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#santiago").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[6][0]);
    $("#inputAtractivos").text(infoRegiones[6][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[6][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[6][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[6][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#ohiggins").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[7][0]);
    $("#inputAtractivos").text(infoRegiones[7][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[7][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[7][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[7][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#maule").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[8][0]);
    $("#inputAtractivos").text(infoRegiones[8][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[8][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[8][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[8][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
    })
}
)
$("#ñuble").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[9][0]);
    $("#inputAtractivos").text(infoRegiones[9][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[9][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[9][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[9][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#biobio").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[10][0]);
    $("#inputAtractivos").text(infoRegiones[10][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[10][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[10][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[10][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        if(!img){
            $("#imagen").attr("src",infoRegiones[0][0]);
        }else{
            img = img.slice(12);
            infoRegiones[0][2] = "/img/" + img;
        }
        
    })
}
)
$("#araucania").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[11][0]);
    $("#inputAtractivos").text(infoRegiones[11][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[11][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[11][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[11][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        
        img = img.slice(12);
        
        infoRegiones[11][2] = "/img/" + img;
        console.log(infoRegiones[0][2])
        
    })
}
)
$("#rios").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[12][0]);
    $("#inputAtractivos").text(infoRegiones[12][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[12][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[12][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[12][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        
        img = img.slice(12);
        
        infoRegiones[13][2] = "/img/" + img;
        console.log(infoRegiones[0][2])
        
    })
}
)
$("#lagos").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[13][0]);
    $("#inputAtractivos").text(infoRegiones[13][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[13][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[13][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[13][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        
        img = img.slice(12);
        
        infoRegiones[14][2] = "/img/" + img;
        console.log(infoRegiones[0][2])
        
    })
}
)
$("#aysen").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[14][0]);
    $("#inputAtractivos").text(infoRegiones[14][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[14][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[14][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[14][1] = atractivoNuevo;
        atractivoNuevo = "";
        
        }
        var img = document.getElementById("inputImagen").value;

        
        img = img.slice(12);
        
        infoRegiones[14][2] = "/img/" + img;
       
        
    })
}
);

$("#magallanes").on("click",function(){
    document.getElementById("nombreNuevo").value = "";
    $("#nombreActual").text(infoRegiones[15][0]);
    $("#inputAtractivos").text(infoRegiones[15][1]);
    $("#botonGuardar").click(function(){
        var nombreNuevo = document.getElementById("nombreNuevo").value;
        if(nombreNuevo != ""){
        infoRegiones[15][0] = nombreNuevo;
        }
        var atractivoNuevo =  document.getElementById("inputAtractivos").value;
        if(nombreNuevo != $("#inputAtractivos").text(infoRegiones[15][1])){
        atractivoNuevo = atractivoNuevo.split(",");
        infoRegiones[15][1] = atractivoNuevo;
        atractivoNuevo = "";
        }
        var img = document.getElementById("inputImagen").value;

        
        img = img.slice(12);
        
        infoRegiones[15][2] = "/img/" + img;
        
        
    })
}
)

   