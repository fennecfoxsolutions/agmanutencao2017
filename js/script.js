function rolar_para(elemento) {
    $('html, body').animate({ scrollTop: $(elemento).offset().top -50}, 2000);
}//função para deslizar o menu

$(function(){   
    var nav = $('#menuHeader');
    var topo = $('#slide_container_topo').height();
    $(window).scroll(function () { 
        if ($(this).scrollTop() > topo) { 
            nav.addClass("navbar-fixed-top");
        } else { 
            nav.removeClass("navbar-fixed-top");
        } 
    });  
}); //função para fixar o menu no topo da página

$(function() {
    $('ul.nav li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});//função para mudar a cor do link ativo

/******************/

function fechar_menu(elemento) {
    $('#bs-example-navbar-collapse-1').removeClass('in');
    console.log('fechar_menu');
}//função para fechar após clicar no link

/*****************Enviar email**********************/
$(document).ready(function(){
    $("#form_contato").submit(function(event){
        // Stop form form submitting normally
        event.preventDefault();

        //Get some values from elements on the page:
        var $form = $(this),
            nome = $form.find("input[id='nome']").val(),
            telefone = $form.find("input[id='telefone']").val(),
            email = $form.find("input[id='email']").val(),
            msg = $form.find("input[id='msg']").val(),
            url = $form.attr("action");
        
        //Send the data using post
        var posting = $.post(url, {
            'Nome': nome,
            'Telefone': telefone,
            'Email': email,
            'Mensagem': msg

        });

        // Put the results in a div
        posting.done(function(data){
            swal('Mensagem enviada com sucesso!');
            //$('#form_contato input').val("");
        });
    });
});

/****************Máscara telefone*******************/
$(document).ready(function(){
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };
      
      $('.sp_celphones').mask(SPMaskBehavior, spOptions);
});

/**************Validação do form ************/
// $("#form_contato").validate({
//     rules:{
//         nome:{
//             required: true,
//             minlength:3
//         },
//         telefone:{
//             required: true,
//             minlength: 14
//         },
//         email:{
//             required:true,
//             email: true
//         },
//         msg:{
//             required:true
//         }                                
//     },
//     messages:{
//         nome:{
//             required:"Por favor, informe seu nome",
//             minlength:"O nome deve ter pelo menos 3 caracteres"
//         },
//         telefone:{
//             required:"Por favor, informe um telefone para contato",
//             minlength: "Por favor, insira o número de telefone com DDD"
//         },
//         email:{
//             required:"É necessário informar um email válido"
//         },
//         msg:{
//             required:"A mensagem não pode ficar em branco"
//         }     
//     }
// });
$("#form_contato").validate();