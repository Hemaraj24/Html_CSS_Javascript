 function filltable(){
       
        var value= $("#number").val();
        var box= $("#box").val();
       /* var red= $(".button").text();
        var green= $(".button.button2").text();
        var blue= $(".button.button3").text(); */
       
       
        var cssClass;
        
        for(var box= 0; box<=value; box ++){
        cssClass='.button4';
            /*if (c == 'red'){
            cssClass = 'red';
            }
            else if (color == 'green'){
            cssClass = 'green';
            }
            else if (color == 'blue'){
            cssClass = 'blue';
            }*/
        $("box").addClass(cssClass);
        }
        
    }                