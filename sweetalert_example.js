Swal.fire({
    //Propiedades del contenido
    icon:'warning error success info and question', //El icono de la ventana emergente.
    iconColor:'#fff', //cambiar el color del icono.
    iconHtml:'<i class="fa fa-long-arrow-right" aria-hidden="true"></i>', //El contenido HTML personalizado para un icono.

    imageUrl: 'vistas/partials/img/ruletalucespequena.png', //Agregue un ícono personalizado para la ventana emergente. Debe contener una cadena con la ruta o URL de la imagen.
    imageWidth:'200px',  //Si se establece imageUrl, puede especificar imageWidth para describir el ancho de la imagen en px.	
    imageHeight:'', //Altura de imagen personalizada en px.
    imageAlt:'', //Un texto alternativo para el icono de imagen personalizado.

    title: `<h1>¡Bienvenid@ a SweetAlert!</h1>`, //El título de la ventana emergente, como HTML.
    titleText:'¡Bienvenid@ a SweetAlert!',//El título de la ventana emergente, como texto. Útil para evitar la inyección de HTML.
    text:'', //Descripción para la ventana emergente.
    html: //Una descripción HTML para la ventana emergente.
            '<p>Ya puedes probar tu suerte y disfrutar de esta experiencia única e inigualable</p>' +
            '<div id="sonido" style="display:none;"><audio src="vistas/partials/sonido/magia/magiatres.mp3" id="notificacion"></audio></div>',
    footer:'<b>Ventana de Sweet Alert</b>', //El pie de página de la ventana emergente. Puede ser texto sin formato o HTML.    
    target:'', //(body)El elemento contenedor para agregar una ventana emergente.
    input:'text email password number tel range textarea select radio checkbox file url.', //El tipo de campo de entrada del input
    
    
    //Propiedades de la ventana
    width: '100%',  // Ancho de la ventana emergente, incluidos los rellenos ( box-sizing: border-box ). Puede estar en px o % . El ancho predeterminado es 32rem . 
    height:' 100%',  // // Alto de la ventana emergente, 
    heightAuto: false, // SweetAlert2 establece la altura de CSS de html y body en auto !important
    position: 'center', //Posición de la ventana emergente, 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
    padding: '1.25rem',  //Relleno de ventana emergente. El relleno predeterminado es 1.25rem .
    background: 'rgb(0, 0, 0,0.8)', //Fondo de ventana emergente (propiedad de fondo CSS). El fondo predeterminado es '#fff' .
    color:'rgb(231, 231, 231)', //Color para título, contenido y pie de página ( propiedad de color CSS ). El color predeterminado es '#545454' .
    grow:'fullscreen',    //dirección en la que debe crecer la ventana emergente 'row', 'column', 'fullscreen', or false.
    timer: 20000, //Temporizador de cierre automático de la ventana emergente. Establecido en ms (milisegundos).
    timerProgressBar: false, //Si se establece en verdadero, el temporizador tendrá una barra de progreso en la parte inferior de una ventana emergente. Principalmente, esta característica es útil con brindis.
    customClass: {  //Una clase CSS personalizada para la ventana emergente:
        container: '...',
        popup: '...',
        header: '...',
        title: '...',
        closeButton: '...',
        icon: '...',
        image: '...',
        content: '...',
        htmlContainer: '...',
        input: '...',
        inputLabel: '...',
        validationMessage: '...',
        actions: '...',
        confirmButton: '...',
        denyButton: '...',
        cancelButton: '...',
        loader: '...',
        footer: '....',
        timerProgressBar: '....',
    },
    showClass: { //Clases de CSS para animaciones cuando se muestra una ventana emergente (aparición gradual)
        popup: 'animate__animated animate__bounceInDown',
        //popup: 'swal2-show',
        //backdrop: 'swal2-backdrop-show',
        //icon: 'swal2-icon-show'
    },
    hideClass: { //Clases de CSS para animaciones al ocultar una ventana emergente (desvanecimiento)
        popup: 'animate__animated animate__bounceOutDown',
        //popup: 'swal2-hide',
        //backdrop: 'swal2-backdrop-hide',
        //icon: 'swal2-icon-hide'
    },


    backdrop:false,  //Si SweetAlert2 debe mostrar o no un fondo de pantalla completa con clic para descartar. 
    toast: true,  //como una notificación de brindis.//Si una alerta debe tratarse o no como una notificación del sistema. Esta opción normalmente se combina con el parámetro de posición y un temporizador. Las tostadas NUNCA se enfocan automáticamente.
    allowOutsideClick: false, //  Si se establece en false , el usuario no puede descartar la ventana emergente haciendo clic fuera de ella.
    allowEscapeKey:true, //Si se establece en false , el usuario no puede descartar la ventana emergente presionando la Esctecla 
    allowEnterKey:true, //Si se establece en false , el usuario no puede confirmar la ventana emergente presionando las teclas Entero Space, a menos que enfoque manualmente el botón de confirmación.
    stopKeydownPropagation:true, //Si se establece en false , SweetAlert2 permitirá la propagación de eventos keydown al documento.
    keydownListenerCapture:false, //Útil para aquellos que usan SweetAlert2 junto con modales Bootstrap. De manera predeterminada , keydownListenerCapture es falso , lo que significa que cuando un usuario Escpresiona , se cerrarán los modos SweetAlert2 y Bootstrap. Establezca keydownListenerCapture en verdadero para corregir ese comportamiento.
    
    //BOtones
    showConfirmButton:true, //Si se establece en falso , no se mostrará el botón "Confirmar".
    showDenyButton:false, //Si se establece en verdadero , se mostrará un botón "Denegar". Puede ser útil cuando desea una ventana emergente con 3 botones.
    showCancelButton:false, //Si se establece en verdadero , se mostrará un botón "Cancelar", en el que el usuario puede hacer clic para descartar el modal.
    confirmButtonText:'ok ENTENDIDO', //Use esto para cambiar el texto en el botón "Confirmar". 
    denyButtonText:'No', //Use esto para cambiar el texto en el botón "Denegar".
    cancelButtonText:'cancelar', //Use esto para cambiar el texto en el botón "Cancelar".
    confirmButtonColor:'#3085d6', //Use esto para cambiar el color de fondo del botón "Confirmar". El color predeterminado es #3085d6
    denyButtonColor:'#dd6b55', //Use esto para cambiar el color de fondo del botón "Denegar". El color predeterminado es #dd6b55
    cancelButtonColor:#aaa, //Use esto para cambiar el color de fondo del botón "Cancelar". El color predeterminado es #aaa
    confirmButtonAriaLabel:true, //Use esto para cambiar la etiqueta aria-label para el botón "Confirmar".
    denyButtonAriaLabel:true, //Use esto para cambiar la etiqueta aria-label para el botón "Denegar".
    cancelButtonAriaLabel:true, //Use esto para cambiar la etiqueta aria-label para el botón "Cancelar".
    buttonsStyling:true, //Aplicar estilo predeterminado a los botones. Si desea utilizar sus propias clases (p. ej., clases de Bootstrap), establezca este parámetro en false .
    reverseButtons:true,  //Establézcalo en verdadero si desea invertir las posiciones predeterminadas de los botones (botón "Confirmar" en el lado derecho).
    focusConfirm:true, //Establézcalo en falso si desea enfocar el primer elemento en orden de tabulación en lugar del botón "Confirmar" de forma predeterminada.
    returnFocus:true, //Establézcalo en falso si no desea devolver el foco al elemento que invocó el modal después de cerrar el modal.
    focusDeny:true, //Establézcalo en verdadero si desea enfocar el botón "Denegar" de forma predeterminada.
    focusCancel:true, //Establézcalo en verdadero si desea enfocar el botón "Cancelar" de forma predeterminada.
    showCloseButton:false, //Establézcalo en verdadero para mostrar el botón de cierre en la esquina superior derecha de la ventana emergente
    closeButtonHtml:'&times;', //Use esto para cambiar el contenido del botón de cerrar.
    closeButtonAriaLabel:'Cerrar este cuadro de diálogo',  //Use esto para cambiar la etiqueta aria para el botón de cerrar.
    loaderHtml:'', //Use esto para cambiar el contenido HTML del cargador.
    showLoaderOnConfirm:false, //Establézcalo en verdadero para deshabilitar los botones y mostrar el cargador en lugar del botón Confirmar. Úselo en combinación con el parámetro preConfirm .
    showLoaderOnDeny:false, //Establézcalo en verdadero para deshabilitar los botones y mostrar el cargador en lugar del botón Denegar. Úselo en combinación con el parámetro preDeny .
    scrollbarPadding:true, //Establézcalo en falso para deshabilitar el ajuste del relleno del cuerpo cuando la barra de desplazamiento de la página se oculta mientras se muestra la ventana emergente
    preConfirm:'', //Función a ejecutar antes de confirmar, puede ser async (Promise-returning) o sync.
    preDeny:'', //La función a ejecutar antes de denegar, puede ser asíncrona (Promise-returning) o sync.
    returnInputValueOnDeny:false, //Si desea devolver el valor de entrada como resultado. valor al negar la ventana emergente, establezca en verdadero . De lo contrario, la negación establecerá result.value en false .


    //Propiedades de los input
    inputLabel:'', //Etiqueta de campo de entrada.
    inputPlaceholder:'', //Marcador de posición del campo de entrada.
    inputValue:'', //Valor inicial del campo de entrada.
                   //Si el tipo de entrada es select, inputValue representará a los selected <option> etiqueta.
                   //Si el tipo de entrada es checkbox,inputValue representará el checked estado.
                   //Si el tipo de entrada es text, email, number, tel or textarea una Promesa puede ser aceptada como inputValue.
    inputOptions:'',
    inputAutoTrim:true, //Elimina automáticamente los espacios en blanco de ambos extremos de una cadena de resultados. Establezca este parámetro en falso para deshabilitar el recorte automático.
    inputAttributes:{}, //Atributos de entrada HTML (por ejemplo , min, max, autocomplete, accept ), que se agregan al campo de entrada. Las claves de objetos representarán nombres de atributos, los valores de objetos representarán valores de atributos.
    inputValidator:'',  //El validador para el campo de entrada puede ser asíncrono (promesa de devolución) o sincronizado.
                        //El valor devuelto (o resuelto) puede ser:
                        //un valor falsy ( undefined, null, false ) para indicar el éxito
                        //un valor de string (mensaje de error) para indicar falla
    validationMessage:'', //Un mensaje de validación personalizado para los validadores predeterminados (correo electrónico, URL).
    progressSteps:[], //Pasos de progreso, útil para las colas.
    currentProgressStep:'', //Paso de progreso activo actual.
    progressStepsDistance:'', //Distancia entre pasos de progreso.

    willOpen:'', //Gancho de ciclo de vida emergente. Se ejecuta sincrónicamente antes de que se muestre la ventana emergente en la pantalla. Proporciona un elemento DOM emergente como argumento.
    //willOpen: () => playsonido(),
    didOpen:'', //Gancho de ciclo de vida emergente. Se ejecuta de forma asincrónica después de que se haya mostrado la ventana emergente en la pantalla. Proporciona un elemento DOM emergente como argumento.
    didOpen() {
        const startsonido = () => {
                setTimeout(function() {
                    /* function playsonido(){
                        //document.querySelector('#sonidocielo').play();
                        $(".audio")[0].play();
                    } 
                    playsonido();  */
                    $("#notificacion")[0].play();
                    //document.querySelector('#sonidocielo').play();
                }, 200); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
            };
        startsonido();
    } ,
    didRender:'', //Gancho de ciclo de vida emergente. Se ejecuta sincrónicamente después de que se haya actualizado el DOM emergente (es decir, justo antes de que se vuelva a pintar la ventana emergente en la pantalla).
    //Proporciona un elemento DOM emergente como argumento.
    //Por lo general, esto sucederá después de Swal.fire() o Swal.update() .
    //Si desea realizar cambios en el DOM de la ventana emergente, que sobreviven a Swal.update() , prefiera didRender sobre willOpen .
    willClose:'', //Gancho de ciclo de vida emergente. Se ejecuta sincrónicamente cuando la ventana emergente se cierra por la interacción del usuario (y no debido a que se activa otra ventana emergente). Proporciona un elemento DOM emergente como argumento.
    didClose:'', //Gancho de ciclo de vida emergente. Se ejecuta de forma asíncrona después de que la ventana emergente haya sido eliminada por la interacción del usuario (y no debido a que se active otra ventana emergente).
    didDestroy:'', //Gancho de ciclo de vida emergente. Se ejecuta sincrónicamente después de que la ventana emergente haya sido destruida por la interacción del usuario o por otra ventana emergente.
    //Si tiene operaciones de limpieza que necesita ejecutar de manera confiable cada vez que se cierra una ventana emergente, prefiera didDestroy sobre didClose .

   
   
}).then((result)=>{
    if (result.isConfirmed) {
        alert_ruleta();
    }else{
        alert_ruleta();
    }
});