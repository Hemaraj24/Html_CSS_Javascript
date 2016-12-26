 function Calculate()  
         {
            var tdName = $("#Name");   
            var tdRollNo = $("#Rollno");
            var tdMaths =$("#Maths").val();
            var tdEnglish = $("#English").val();
            var tdHindi = $("#Hindi").val();
            var tdPhysics= $("#Physics").val();
            var tdChemistry =$("#Chemistry").val();
            var Totalmarks =$("#Totalmarks");
            var total;
          
                
           total = parseInt(tdMaths) +  parseInt(tdEnglish) + parseInt(tdHindi) + parseInt(tdPhysics) + parseInt(tdChemistry);
            
           Totalmarks.text(total);
            }