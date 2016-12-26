 function fillcolor(color)
    {
       
        var red= $(".button").text();
        var green= $(".button.button2").text();
        var blue= $(".button.button3").text();
       
         
        
        var cssClass;
        
        if (color == 'red'){
          cssClass = 'red';
        }
        else if (color == 'green'){
          cssClass = 'green';
        }
        else if (color == 'blue'){
          cssClass = 'blue';
        }
        $("#text").addClass(cssClass);
    }                