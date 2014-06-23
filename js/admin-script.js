$(document).ready(function() {


// Toggle form address ==============================================

$(".toggleCheckbox").click(function() {
  $(".extra-info").slideToggle();
});


// Form Validator ==============================================

var $noEmail = 'Digite um email';
var $validEmail = 'Isto não é um endereço de email';
var $noPassword = 'Digite sua senha';
var $noCurrentPassword = 'Digite sua senha atual';
var $noNewPassword = 'Digite a nova senha';
var $NewPasswordlength = 'A senha tem que ter mais de 6 digitos e menos de 15';
var $NewPasswordDifferent = 'A nova senha tem que ser diferente da senha atual';
var $noNewPasswordRepeat = 'Digite a nova senha novamente';
var $NewPasswordRepeatIdentical = 'A novas senhas tem que ser iguais';
var $noImage = 'Você tem que escolher uma imagem';
var $incorrectImage = 'A imagem é incorreta';
var $noUnitName = 'Digite um nome para o setor';
var $noPhone = 'Digite um numero de telefone';
var $noMessage = 'Digite uma mensagem';
var $Messagelength = 'A mensagem pode ter um maximo de 500 caracteres';

    $('.validateForm').bootstrapValidator({

        live: 'submitted',

        feedbackIcons: {
          valid: 'fa fa-check',
          invalid: 'fa fa-times',
          validating: 'fa fa-refresh'        
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


            passwordCurrent: {
                validators: {
                    notEmpty: {
                        message: $noCurrentPassword
                    }// notEmpty                
                }//validators
            },//passwordCurrent


            passwordNew: {
                validators: {
                    notEmpty: {
                        message: $noNewPassword
                    },// notEmpty
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: $NewPasswordlength
                    },// notEmpty
                    different: {
                        field: 'passwordCurrent',
                        message: $NewPasswordDifferent
                    }                                                      
                }//validators
            },//passwordNew


            passwordNewRepeat: {
                validators: {
                    notEmpty: {
                        message: $noNewPasswordRepeat
                    },// notEmpty
                    identical: {
                        field: 'passwordNew',
                        message: $NewPasswordRepeatIdentical
                    }                
                }//validators
            },//passwordNewRepeat

            message: {
                validators: {
                    notEmpty: {
                        message: $noMessage
                    },// notEmpty
                    stringLength: {
                        max: 500,
                        message: $Messagelength
                    }// notEmpty
                }//validators
            },//passwordNew


        },//fields
    });//bootstrapValidator








});//document


