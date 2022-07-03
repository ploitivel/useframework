//EJemplo uso html2cnavas
//https://programmerclick.com/article/6818939965/


/* html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
 */
$('#descargar').click(function() {
    var w = document.getElementById("content").offsetWidth;
    var h = document.getElementById("content").offsetHeight;

    //dpi: 300, // Set to 300 DPI
    //scale: 3, // Adjusts your resolution
        html2canvas(document.querySelector("#content"),{imageTimeout: 5000, useCORS: true}).then(canvas => {

         // Devuelve dataURL de imagen, parámetros: formato y definición de imagen (0-1)
            var img = canvas.toDataURL("image/jpeg", 1); //image/png
        
            /*  var w = document.getElementById("content").offsetWidth;
            var h = document.getElementById("content").offsetHeight;
            var doc = new jsPDF('L', 'pt', [w, h]); */
            
            
            // La orientación es vertical por defecto, tamaño ponits, formato a4 [595.28,841.89]
            const doc = new jsPDF({
                orientation: 'p', //"landscape"
                unit: 'px',  //in
                format: 'a4', //[4, 2]
                hotfixes: ['px_scaling'],
              });
            //var pdf = new jsPDF('', 'pt', 'a4');
            //let pdf = new JsPDF('portrait', 'mm', 'a4')
            //var doc = new jsPDF('L', 'pt', [w, h]);

            // Los dos últimos parámetros de addImage controlan el tamaño de la imagen agregada, aquí la altura de la página se comprime de acuerdo con la columna de relación de aspecto del papel a4
            //pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28/canvas.width * canvas.height );
            //doc.addImage(img, 'JPEG', 0, 0, w, h);
            //doc.addImage(img, 'PNG', 10, 10);
            //pdf.addImage(img, 'JPEG', 5, 5, 200, 287)
            //doc.addImage(img, "PNG", 140, 10, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

            doc.save('sample-file.pdf');
        });
});



$("#descargar").click(function () {
    var doc = new jsPDF("p", "mm", "a4");
  
    html2canvas(document.querySelector("#content")).then(function (canvas) {

      var imgData = canvas.toDataURL("image/png");
      var pageHeight = 295;
      var imgWidth = (canvas.width * 50) / 210;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var position = 15;
  
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.output("dataurlnewwindow");
      doc.save(Date.now() + ".pdf");
    });
  }); 

  