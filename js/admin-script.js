






$(document).ready(function() {
    $('.loginForm').bootstrapValidator({
    
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },//feedbackIcons
        
        
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },// notEmpty
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }// emailAddress
                }//validators
            },//email
        },//fields
    });//bootstrapValidator
});//document


//
//$('li').click(function(){
//  
//  $(this).addClass('active')
//       .siblings()
//       .removeClass('active');
//    
//});
//
/*

Inspired by Asif Aleem's work: http://www.freebiesgallery.com/responsive-website-navigation/

Feel free to fork it and make it better, AND use it however u want, the whole functionality could, of course, have been done with jQuery alone, but I thought I'd try to do it with CSS3, to make use of media query transitions, and of course, just to practice more.
You can use this when changing orientation on a tablet or smart phone for example.. and of course, use ur creative minds for any more uses u can come up with :)

Follow me on Twitter: http://twitter.com/SaraSoueidan

*/