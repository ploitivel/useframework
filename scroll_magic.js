$(function () {// esperar a que el documento esté listo

    //Solo es necesario llamarlo una vez
    var controller = new ScrollMagic.Controller();

     // build scene // construir escena //Craemos una ecena
    var ecena =  new ScrollMagic.Scene({
        triggerElement:".trigger", // Cuando el objeto .trigger pasa por el trigger marcador se detona la animación tween
        duration: 100, // la escena debe durar una distancia de desplazamiento de 100px
        offset: 500, // comienza esta escena después de desplazarte por 50px
    });

    // build tween // construir interpolación
    var tween = TweenMax.to("#animate", 0.5, {scale: 3, ease: Linear.easeNone});
    ecena.setTween(tween)
    // ecena.setTween(".div_consola", 1, { className: "+=animate__rubberBand" })
    // ecena.setTween("#animate", 1, { className: "+=extender" })


    // fija el elemento durante la duración de la escena
    ecena.setPin("#animate")
    //.setPin(".div_consola") 

    //ecena.setClassToggle(".div_consola" , "animate__rubberBand")
    //ecena.setClassToggle(".consola_uno_contacto , .consola_dos_contacto" , "animate__fadeInDown")


    ecena.addIndicators({name: "resize"}) // add indicators (requires plugin)

    ecena.addTo(controller);  // asigna la escena al controlador


    // add listeners
    //FORMA UNO
    function callback (event) {
        console.log("Event fired! (" + event.type + ")");
    }
     //cambiar actualizar progreso inicio fin entrar salir
    ecena.on("change update progress start end enter leave", callback);
    //FROMA DOS
    ecena.on("enter leave", function (e) {
        //document.querySelector("#animate").textContent = e.type == "enter" ? "inside" : "outside";
    });  
    //FORMA TRES
    ecena.on("change update progress start end enter leave", () => {
        //document.querySelector(".header-home").css({"background-position":"0 -100px"});
    }); 

 

});

//EJEMPLO NUMERO DOS

$(function () {// esperar a que el documento esté listo
      // controlador de inicio
     var controller = new ScrollMagic.Controller();
     
     // build tween // construir interpolación
     var tween = TweenMax.to("#animate", 0.5, {scale: 3, ease: Linear.easeNone});
     
     // build scene // construir escena
     var scene = new ScrollMagic.Scene({
         triggerElement: "#multiDirect", 
         duration: 400, 
         offset: 250
     })

     .setTween(tween)
     .setPin("#animate")
     .addIndicators({name: "resize"}) // add indicators (requires plugin)
     .addTo(controller); 
 
 
     
     // init controller horizontal // controlador de inicio horizontal
     var controller_h = new ScrollMagic.Controller({vertical: false});
     
     // build tween horizontal // construir interpolación horizontal
     var tween_h = TweenMax.to("#animate", 0.5, {rotation: 360, ease: Linear.easeNone});
     
     // build scene // construir escena
     var scene_h = new ScrollMagic.Scene({duration: 700})
     .setTween(tween_h)
     .setPin("#animate")
     .addIndicators({name: "rotate"}) // add indicators (requires plugin)
     .addTo(controller_h); 
 
 });
 

     
//EJEMPLO NUMERO TRES
 $(function () {// esperar a que el documento esté listo

        // controlador de inicio 
        // controlador de inicio donde creamos una nueva instancia y la asignamos a una variable,
        var controller = new ScrollMagic.Controller();
      
        // assign handler "scene" and add it to Controller // asignar manejador "escena" y agregarlo a Controlador
        //var scene = new ScrollScene({duration: 100})
        var ecena_uno =  new ScrollMagic.Scene({
            triggerElement:".scrollmagic_terminaluno", 
        })
        ecena_uno.setClassToggle(".div_uno" , "animate__fadeInRight") 

        
        var ecena_dos =  new ScrollMagic.Scene({
            triggerElement:".scrollmagic_terminaldos", 
        })
        ecena_dos.setClassToggle(".div_dos" , "animate__fadeInLeftBig")  
        //.addIndicators({ name: "marcador" }) // add indicators (requires plugin)
         //.setTween("#animate", 1, { className: "+=extender" })
        
        //Se agrgan las encenas una por una al controlador
        //.addTo(controller);
        controller.addScene([
            ecena_uno,
            ecena_dos,
            //scene1,
            //scene2,
            //scene3
        ]); 

        // add multiple scenes at once // agregar varias escenas a la vez
        //var scene2;
        //controller.add([
        //    scene, // add above defined scene // agregar escena definida arriba
        //    scene2 = new ScrollScene({duration: 200}), // add scene and assign handler "scene2" // agregar escena y asignar controlador "scene2"
        //    new ScrollScene({offset: 20}) // add anonymous scene // añadir escena anónima
        //]); 

        // add listeners

        //function callback (event) {
        //    console.log("Event fired! (" + event.type + ")");
        //}
        //ecena_uno.on("change update progress start end enter leave", callback);
        //.on("enter leave", function (e) {
        //    //document.querySelector("#animate").textContent = e.type == "enter" ? "inside" : "outside";
        //});  
        ecena_uno.on("change update progress start end enter leave", () => {
            //document.querySelector("#scrollDirection").textContent = e.target.controller().info("scrollDirection");
            //document.querySelector(".consola_carrusel_uno").classList.add("animate__bounce");
        });   
        ecena_dos.on("change update progress start end enter leave", () => {
            //document.querySelector("#scrollDirection").textContent = e.target.controller().info("scrollDirection");
            //document.querySelector(".consola_carrusel_uno").classList.add("animate__bounce");
            //document.querySelector("#scrollDirection").textContent = e.target.controller().info("scrollDirection");
            //document.querySelector(".header-home").css({"background-position-y":"-100px"});
            //document.querySelector(".header-home").css({"background-position":"0 -100px"});
        });   
 });

//EJEMPLO NUMERO CUATRO ECENAS ILIMITADAS
 $(function () {// esperar a que el documento esté listo

        //Solo es necesario llamarlo una vez
        var controller = new ScrollMagic.Controller();

        //botones activos de menu de navegacion
        new ScrollMagic.Scene({
                triggerElement:".trigger", // Cuando el objeto .trigger pasa por el trigger marcador se detona la animación tween
                //triggerElement:".div", 
                duration: "800px" // 100, 200% // la escena debe durar una distancia de desplazamiento de 100px
                //offset: 10, // comienza esta escena después de desplazarte por 50px
            })
                .setClassToggle(".div_anim_uno", "animate__rollIn") 
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        new ScrollMagic.Scene({triggerElement:".div_tigger", duration: "800px",})
                .setClassToggle(".div_anim_dos", "animate__fadeInUp") 
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        new ScrollMagic.Scene({triggerElement:".div_tigger", duration: "900px",})
                .setClassToggle(".p", "animate__backInDown") 
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        new ScrollMagic.Scene({triggerElement:".div_tres",})
                .setClassToggle(".section", "animate__backInLeft") 
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        var ecene_sonido = new ScrollMagic.Scene({ triggerElement:".scroll_magic_tigger",  })
        ecene_sonido.addTo(controller);
        ecene_sonido.on("enter", () => {
            audiostart("dezp5.wav");
            setTimeout(function() {
            audiostart("Glitch03.mp3");
        }, 800); 
        });

 });