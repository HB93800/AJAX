$(document).ready (function() {
    console.log('salut');
  
    $('#valid').click( ()=>{
           /* $.ajax({
                url:'contact.html',
                dataType:"text",
                cache:false,
                    success: function (data) {
                    $('.recupAjax').html(data);
                    $('.containerC').removeClass('containerC');
                    $('.recupAjax').addClass('colorrecup');
                    console.log(data);
                    
                    },
                    error: function(xhr) {
                    console.log(xhr.status);
                }
            })
        })
    $('#valid2').click( ()=>{
            $.ajax({
                url:'Apropos2nous.html',
                dataType:"text",
                cache:false,
                    success: function (data) {
                    $('.recupAjax').html(data);
                    $('.containerAp2N').removeClass('containerAp2N');
                    $('.recupAjax').addClass('colorrecup');
                    console.log(data);
                    
                    },
                    error: function(xhr) {
                    console.log(xhr.status);
                    
                }
    
            })
            });
            return false;*/
////////////////////////////  VERSION JSON - LOAD  /////////////////////////////////
            $.ajax({
                url:'essai.json',
                dataType:"json",
                success:function(data) {
                    console.log(data.variable); //.variable pour voir la "variable" du tableau objet de mon fichier essai.json
                },
                error:function(xhr) {
                    console.log(xhr.status);
                }
            })
//return false;
        })
});