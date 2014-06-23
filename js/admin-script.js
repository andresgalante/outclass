$(document).ready(function() {


// Toggle form address ==============================================

$(".toggleCheckbox").click(function() {
  $(".extra-info").slideToggle();
});


// Form Validator ==============================================

var $noEmail = 'Digite um email';
var $validEmail = 'Isto não é um endereço de email';
var $noPassword = 'Você tem que por um password';
var $noImage = 'Você tem que escolher uma imagem';
var $incorrectImage = 'A imagem é incorreta';
var $noUnitName = 'Digite um nome para o setor';
var $noPhone = 'Digite um numero de telefone';



    $('.validateForm').bootstrapValidator({

        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
                            
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: $noEmail
                    },// notEmpty
                    emailAddress: {
                        message: $validEmail
                    }// emailAddress
                }//validators
            },//email

            password: {
                validators: {
                    notEmpty: {
                        message: $noPassword
                    }// notEmpty                
                }//validators
            },//password

            picture: {
                validators: {
                    notEmpty: {
                        message: $noImage
                    },// notEmpty
                    file: {
                        extension: 'jpeg,jpg,png',
                        type: 'image/jpeg,image/jpg,image/png',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: $incorrectImage
                    }//file
                }//validators
            },//picture

            unitName: {
                validators: {
                    notEmpty: {
                        message: $noUnitName
                    }// notEmpty
                }//validators
            },//unitName


            phone: {
                validators: {
                    notEmpty: {
                        message: $noPhone
                    }// notEmpty
                }//validators
            },//phone




        },//fields
    });//bootstrapValidator








});//document


