
var fn={
    
    ready: function(){             document.addEventListener("deviceready",fn.init,false);
    }
    
    init:function()
    { 
    alert("Hola");
    $('#bar').tap(fn.vibrar);
     }


    vibrar:function(){
        // Vibrate for 3 seconds
        alert("vibrar");
      navigator.vibrate(3000);
    }
}

$(fn.ready);