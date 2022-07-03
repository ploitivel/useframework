
//https://www.npmjs.com/package/jspdf-html2canvas
//Errror de bordes blancos
//https://stackoverflow.com/questions/57936607/why-there-is-a-white-space-on-the-top-on-html2canvas

//Configuracion html canvas
//https://html2canvas.hertzen.com/configuration
//Configuraicon jsPDF
//https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
//http://raw.githack.com/MrRio/jsPDF/master/docs/module-javascript.html#~addJS

//Libraris
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
//<script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"></script>
//<script src="https://cdn.jsdelivr.net/npm/jspdf-html2canvas@latest/dist/jspdf-html2canvas.min.js"></script> 

//FORMAS DE OBTENER EL TAMAÑO DEL CONTENEDOR

//var w = document.getElementById("content").offsetWidth;
//var h = document.getElementById("content").offsetHeight;

//var w = document.getElementById("content").clientWidth;
//var h = document.getElementById("content").clientHeight;

//var w = document.getElementById("content").scrollWidth;
//var h = document.getElementById("content").scrollHeight;
var w = document.getElementById("content").getBoundingClientRect().width;
var h = document.getElementById("content").getBoundingClientRect().height;


//Seleccionar el boton de desacargar
let btn = document.getElementById('btn_descargar');
//Seleccionar el contenedor
let page = document.getElementById('content');

btn.addEventListener('click', function(){
//jsPDF-html2canvas
  html2PDF(page, {
    jsPDF: {
        unit: 'px',   //unit: Unidad de medida Los valores posibles son "pt" (puntos), "mm", "cm", "in", "px", "pc", "em" o "ex". 
        format: 'government-letter',  //formato: por defecto a4, a0 - a10 b0 - b10,c0 - c10,dl,letter,government-letter,legal,junior-legal,ledger,tabloid,credit-card 
        orientation: 'portrait', // Orientacion: defecto "portrait",  "landscape" (o abreviaturas "p" o "l").
        precision: 16, // Precisión de las posiciones de los elementos. (Opcional)
      },
      html2canvas: {
        imageTimeout: 15000, //Tiempo de espera para cargar una imagen (en milisegundos). 
        logging: true, //Habilitar el registro con fines de depuración
        useCORS: true, //Ya sea para intentar cargar imágenes desde un servidor usando CORS
        scale: 2, //La escala que se usará para renderizar. El valor predeterminado es la proporción de píxeles del dispositivo del navegador.
        width: w, //El ancho de lacanvas
        height: h, //la altura de lacanvas
        //x:'',   //Coordenada x del lienzo de recorte
        //y:50,   //Coordenada Y del lienzo de recorte
        //scrollX: 0, //Si hay algún espacio en blanco en la parte superior del archivo PDF generado, podría deberse al problema de desplazamiento, 
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth, //Ancho de la ventana para usar al renderizar Element,
        windowHeight: document.documentElement.offsetHeight //Altura de la ventana para usar al renderizar Element
        },
      //enableLinks: 'true', //los hipervínculos de PDF se agregan automáticamente encima de todas las etiquetas de anclaje.
      imageType: 'image/jpeg',  //Tipo de Imagen default: image/jpeg --> solo admite 'png', 'jpeg' y 'webp'------ image/jpeg, image/png, image/webp
      imageQuality: 1, //La calidad de la imagen, de 0 a 1. Esta configuración solo se usa para jpeg/webp (no png).
      margin: { //Margen PDF (en unidades jsPDF). Puede ser un solo número, default: 0
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      //filename:'file.pdf', //El nombre de archivo predeterminado del PDF exportado.
      output: 'jspdf-generate.pdf',  //Definir el nombre del archivo PDF de salida
      init: function() {}, //definir algunos init para jspdf iniciando antes de imprimir
      success: function(pdf) {
        pdf.save(this.output);
      }
  });


 /*  var element = document.getElementById('element-to-print');
    var opt = {
    margin:       1,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    html2pdf(element, opt); */
  
});
