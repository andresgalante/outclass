$(document).ready(function() {


// Toggle form address ==============================================

$(".toggleCheckbox").click(function() {
  $(".extra-info").slideToggle();
});


// Form Validator ==============================================

var $noEmail = 'O endereço de e-mail é obrigatório.';
var $validEmail = 'Digite um endereço de e-mail válido'; 
var $noPassword = 'Escolha uma senha';
var $noCurrentPassword = 'Digite a sua senha atual';
var $noNewPassword = 'Digite a nova senha';
var $NewPasswordlength = 'A senha deve conter no mínino 6 e no máximo 15 caracteres';
var $NewPasswordDifferent = 'A nova senha deve ser diferente da senha atual';
var $noNewPasswordRepeat = 'Digite novamente a nova senha';
var $NewPasswordRepeatIdentical = 'A confirmação de senha deve ser idêntica a nova senha';
var $noImage = 'Selecione uma imagem antes de submeter';
var $incorrectImage = 'Selecione imagem de acordo com os padrões sugeridos';
var $noUnitName = 'Crie um nome para o setor antes de adicioná-lo';
var $noMessage = 'Digite uma mensagem descrevendo o seu problema, dúvida ou sugestão';
var $noPhone = 'Digite a telefone';
var $noStreetName = 'Digite o nome da Rua';
var $noStreetNumber = 'Digite o número da Rua';
var $incorrectStreetNumber = 'Digite somente números';
var $noCity = 'Digite a cidade';
var $noState = 'Digite o estado';

// var $Messagelength = 'A mensagem pode ter um maximo de 500 caracteres';


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


            phoneIE: {
                validators: {
                    notEmpty: {
                        message: $noPhone
                    },// notEmpty
                    numeric: {
                        message: $incorrectStreetNumber
                    }//numeric                
                }//validators
            },//phone

            passwordCurrent: {
                validators: {
                    notEmpty: {
                        message: $noCurrentPassword
                    }// notEmpty                
                }//validators
            },//passwordCurrent

            streetName: {
                validators: {
                    notEmpty: {
                        message: $noStreetName
                    }// notEmpty                
                }//validators
            },//streetName

            streetNumber: {
                validators: {
                    notEmpty: {
                        message: $noStreetNumber
                    },// notEmpty
                    numeric: {
                        message: $incorrectStreetNumber
                    }//numeric                
                }//validators
            },//streetNumber


            city: {
                validators: {
                    notEmpty: {
                        message: $noCity
                    }// notEmpty                
                }//validators
            },//city

            state: {
                validators: {
                    notEmpty: {
                        message: $noState
                    }// notEmpty                
                }//validators
            },//state


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
                    }// notEmpty
//                    stringLength: {
//                        max: 500,
//                        message: $Messagelength
//                    }// notEmpty
                }//validators
            },//passwordNew


        },//fields
    });//bootstrapValidator








});//document


