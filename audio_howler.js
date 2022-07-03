//https://github.com/goldfire/howler.js#documentation
//<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script>
window.addEventListener('load', function() {

    var sound = new Howl({
        src: ['vistas/audio/iniciodos.mp3'],
        //format: ['dolby', 'webm', 'mp3'],
       // src: ['sound.webm', 'sound.mp3', 'sound.wav'], //Varios Archivos a al vez
        autoplay: true,  //true para iniciar automáticamente la reproducción cuando se cargue el sonido.
        html5: true, //true para forzar el audio HTML5. Evita la espera de desacarga de archivos de audio grandes decodifique el archivo completo antes de reproducirlo.
        loop: true,  //true para repetir automáticamente el sonido para siempre.
        volume: 1.0,  //nivel de volumen de 0.0 hasta 1.0
        rate:1.0, //Default 1.0  tasa de reproducción. 0,5 a 4,0, siendo 1,0 la velocidad normal.
        //mute: true, //truepara cargar el audio silenciado.
        sprite : {   //Sprite de fondo se definen en milisegundos. //si esta activado se tiene que llamar asi sound.play('laser');
            //key1: [dezplazamiento , duracion (bucle)]
            blast : [ 0 ,  3000 ] , 
            laser : [ 4000 ,  1000 ] , 
            winner : [ 6000 ,  5000 ],
            track01: [0, 20000],
            track02: [21000, 41000]
        },
        onplayerror: function() {
            sound.once('unlock', function() {
            sound.play();
            });
        },
        onload: function(){},  //Se dispara cuando se carga el sonido.
        onloaderror: function(){},  //Se dispara cuando el sonido no se puede cargar.
        //onplayerror: function(){},  //Se dispara cuando el sonido no se puede reproducir. El primer parámetro es la ID del sonido y el segundo es el mensaje/código de error.
        onplay: function(){},  //Se dispara cuando el sonido comienza a reproducirse. El primer parámetro es el ID del sonido.
        onpause: function(){},  //Se dispara cuando el sonido ha sido pausado. El primer parámetro es el ID del sonido.
        onstop: function(){},  //Se dispara cuando el sonido se ha detenido. El primer parámetro es el ID del sonido.
        onmute: function(){},  //Se dispara cuando el sonido ha sido silenciado/activado. El primer parámetro es el ID del sonido.
        onvolume : function(){},  //Se dispara cuando el volumen del sonido ha cambiado. El primer parámetro es el ID del sonido.
        onrate  : function(){},  //Se dispara cuando la velocidad de reproducción del sonido ha cambiado. El primer parámetro es el ID del sonido.
        onseek  : function(){}, //Se dispara cuando se ha buscado el sonido. El primer parámetro es el ID del sonido.
        onfade  : function(){},  //Se dispara cuando el sonido actual termina de aparecer/desaparecer gradualmente. El primer parámetro es el ID del sonido.
        onunlock  : function(){},  //Se activa cuando el audio se ha desbloqueado automáticamente a través de un evento de tocar/hacer clic.
        onend: function () { //Se dispara cuando el sonido termina de reproducirse (si está en bucle, se disparará al final de cada bucle). El primer parámetro es el ID del sonido.
            console.log("audiofinish");
            //alert('We finished with the setup!');
        }
        });
        
        //toma un parámetro que puede ser un sprite o una ID de sonido. 
        sound.play(); //sound.play('laser'); //Disparar el laser
        sound.pause([id]); //id:Number (optional)  El ID de sonido. Si no se pasa ninguno, se pausan todos los sonidos del grupo.
        sound.stop([id]) // id:Number (optional)   El ID de sonido. Si no se pasa ninguno, se detienen todos los sonidos del grupo.
        sound.mute([muted], [id]) //muted:Boolean (optional) ---  id:Number (optional) si no se pasa ninguno, se detienen todos los sonidos del grupo. //Silencia el sonido, pero no pausa la reproducción.
        sound.volume(0.5); //sound.volume([volume], [id]); //volume:Number (optional) de 0.0 hasta 1.0 --- id:Number (optional) El ID de sonido. Si no se pasa ninguno, se altera el volumen de todos los sonidos del grupo en relación con su propio volumen. 
        sound.fade(from, to, duration, [id])
            //from:Number Volumen a desvanecer desde ( 0.0 to 1.0).
            //to:Number Volumen a desvanecerse a ( 0.0 to 1.0).
            //duration:Number Tiempo en milisegundos para desvanecerse.
            //id:Number (optional) El ID de sonido. Si no pasa ninguno, todos los sonidos del grupo se desvanecerán.
        sound.rate([rate], [id]) //la velocidad de reproducción de un sonido. rate:Number (optional)  La tasa de reproducción. 0,5 a 4,0, siendo 1,0 la velocidad normal. El ID de sonido opcional cambiará la velocidad de reproducción de todos los sonidos del grupo.
        // Después de un segundo, pausa ambos sonidos en el grupo. 
        setTimeout(function() {
            //sound.pause();;
        }, 1000); 
        


//EJEMPLO FUNCIONANDO
        const startaudio = () => {
            var sound = new Howl({
            src: ['vistas/audio/alien.mp3'],
            //src: ['vistas/audio/iniciotres.mp3'],
            //src: ['sound.webm', 'sound.mp3', 'sound.wav'], //Varios Archivos a al vez
            //format: ['dolby', 'webm', 'mp3'],
            //autoplay: true,  //true para iniciar automáticamente la reproducción cuando se cargue el sonido.
            //html5: true, //true para forzar el audio HTML5. Evita la espera de desacarga de archivos de audio grandes decodifique el archivo completo antes de reproducirlo.
            loop: false,  //true para repetir automáticamente el sonido para siempre.
            volume: 1.0,  //nivel de volumen de 0.0 hasta 1.0
            //rate:1.0, //Default 1.0  tasa de reproducción. 0,5 a 4,0, siendo 1,0 la velocidad normal.
            //mute: true, //truepara cargar el audio silenciado.
            sprite : {   //Sprite de fondo se definen en milisegundos.
                //key1: [dezplazamiento , duracion (bucle)]
                track01 : [ 0 ,  5000 ] , 
                track02: [21000, 41000]
            }, 
            onplayerror: function() {
                sound.once('unlock', function() {
                sound.play('track01');
                });
            },
            //onload: function(){}  //Se dispara cuando se carga el sonido.
            //onloaderror: function(){}  //Se dispara cuando el sonido no se puede cargar.
            //onplayerror: function(){}  Se dispara cuando el sonido no se puede reproducir. El primer parámetro es la ID del sonido y el segundo es el mensaje/código de error.
            //onplay: function(){}  //Se dispara cuando el sonido comienza a reproducirse. El primer parámetro es el ID del sonido.
            //onend: function(){}  //Se dispara cuando el sonido termina de reproducirse (si está en bucle, se disparará al final de cada bucle). El primer parámetro es el ID del sonido.
            //onpause: function(){}  //Se dispara cuando el sonido ha sido pausado. El primer parámetro es el ID del sonido.
            //onstop: function(){}  //Se dispara cuando el sonido se ha detenido. El primer parámetro es el ID del sonido.
            //onmute: function(){}  //Se dispara cuando el sonido ha sido silenciado/activado. El primer parámetro es el ID del sonido.
            //onvolume : function(){}  //Se dispara cuando el volumen del sonido ha cambiado. El primer parámetro es el ID del sonido.
            //onrate  : function(){}  //Se dispara cuando la velocidad de reproducción del sonido ha cambiado. El primer parámetro es el ID del sonido.
            //onseek  : function(){}  //Se dispara cuando se ha buscado el sonido. El primer parámetro es el ID del sonido.
            //onfade  : function(){}  //Se dispara cuando el sonido actual termina de aparecer/desaparecer gradualmente. El primer parámetro es el ID del sonido.
            //onunlock  : function(){}  //Se activa cuando el audio se ha desbloqueado automáticamente a través de un evento de tocar/hacer clic.
            onend: function () {
                console.log("audiofinish");
                //alert('We finished with the setup!');
            }
            });
            //sound.volume(0.5);
            //sound.play();
            //toma un parámetro que puede ser un sprite o una ID de sonido. 
            //sound.play('laser'); Disparar el laser
            //sound.pause([id]); //id:Number (optional)  El ID de sonido. Si no se pasa ninguno, se pausan todos los sonidos del grupo.
            //sound.stop([id]) // id:Number (optional)   El ID de sonido. Si no se pasa ninguno, se detienen todos los sonidos del grupo.
            //sound.mute([muted], [id]) //muted:Boolean (optional) ---  id:Number (optional) si no se pasa ninguno, se detienen todos los sonidos del grupo. //Silencia el sonido, pero no pausa la reproducción.
            //sound.volume([volume], [id]); //volume:Number (optional) de 0.0 hasta 1.0 --- id:Number (optional) El ID de sonido. Si no se pasa ninguno, se altera el volumen de todos los sonidos del grupo en relación con su propio volumen. 
            
            // Después de un segundo, pausa ambos sonidos en el grupo. 
            sound.volume(0.5);
            sound.play('track01');
        };
        
    window.addEventListener('load', function() {
        //console.log('La página ha terminado de cargarse!!');
        startaudio();
    });
});