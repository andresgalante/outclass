
jQuery(function($){

// $.stellar();

$('.store-button, .change_language').tooltip();
//$('nav a').tooltip();




// Cache selectors
var lastId,
    topMenu = $("nav ul"),
    topMenuHeight = topMenu.outerHeight()-0,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove current class
       menuItems
         .parent().removeClass("current")
         .end().filter("[href=#"+id+"]").parent().addClass("current");
   }                   
});




//$(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() == $(document).height()) {
//         $("nav li").removeClass("current")
//         $("nav li:last-child").addClass("current")
//   }
//});



//$(function() {
//  $('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
//});



//
//$(window).on('mousewheel', function() {
//
//  $("nav").css("background","red");
//
//});
//






var imagenes = ["#slider01", "#slider02", "#slider03", "#slider04", "#slider05", "#slider06"];
var itemAnterior = 0;

setInterval(function(){
var nuevo = (itemAnterior + 1);
if(nuevo >= imagenes.length)
{ 
nuevo = 0
}


var $nuevo = $(imagenes[nuevo]);
var $viejo = $(imagenes[itemAnterior]);

itemAnterior = nuevo;

$nuevo.fadeIn() 
$viejo.fadeOut()
 
//{ queue  : false}

},3000);
});












jQuery(function($){

    $('#supportForm').submit(function(){

        var data = {}, $form = $(this);
        $("[type=submit]", $form).attr("disabled", "disabled").addClass("disabled").after('<i class="fa-li fa fa-spinner fa-spin loader"></i>');

        $("input", this).each(function(){
            data[$(this).attr("name")] = $(this).val();
        });

        $("select", this).each(function(){
            data[$(this).attr("name")] = $(this).val();
        });


        data.ajax = true;
        $.ajax({
            url: $(this).attr("action"),
            type: "post",
            data: data,
            success: function()
            {
                showOk();
                $form.slideUp().fadeOut();
            },
            error: function()
            {
                $("[type=submit]", $form).removeAttr("disabled").removeClass("disabled").text("Enviar!");
                $(".loader").fadeOut(function(){$(this).remove()});
                showError();
            }
        });
        return false;
    });


    $('#contactForm').submit(function(){
       var data = {}, $form = $(this);
        $("[type=submit]", $form).attr("disabled", "disabled").addClass("disabled").after('<i class="fa-li fa fa-spinner fa-spin loader"></i>');

        $("input", this).each(function(){
           data[$(this).attr("name")] = $(this).val();
        });

        $("select", this).each(function(){
            data[$(this).attr("name")] = $(this).val();
        });


        data.ajax = true;
        $.ajax({
           url: $(this).attr("action"),
           type: "post",
           data: data,
           success: function()
           {
               $("#myModal").modal("show");
           },
           error: function()
           {
               $("[type=submit]", $form).removeAttr("disabled").removeClass("disabled").text("Enviar!");
               $(".loader").fadeOut(function(){$(this).remove()});
               showError();
           }
        });
        return false;
    });


    $("body").on("click","[data-contacttype]",function(){
       console.log($(this).data("contacttype"));
        $('#myModal').modal('hide');

        $.ajax({
            url: "sendDetails.php",
            type: "post",
            data: {email: $("#email").val(), contacttype: $(this).data("contacttype")}
        });

        $('#contactForm').slideUp().fadeOut();
        showOk();
        return false;
    });

	function showOk()
	{
		var $message = $('<div class="alert alert-success"><strong>Muito obrigado.</strong> Aguarde o nosso breve contato.</div>').hide();
		$("#avisos").empty().append($message);
		$message.show("fast");
	}
	
	function showError()
	{
		var $message = $('<div class="alert alert-danger"><strong>Ups, desculpa!</strong> Por favor tenta de novo.</div>').hide();
		$("#avisos").empty().append($message);
		$message.show("fast");
	}	
});
	
	

