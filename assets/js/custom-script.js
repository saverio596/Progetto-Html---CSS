jQuery(document).ready(function($){
  $(".button a").click(function(e){
    e.preventDefault();
    $(".overlay").fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
  $('.overlay').on('click', function(){
  $(".overlay").fadeToggle(200);   
  $(".button a").toggleClass('btn-open').toggleClass('btn-close');
});

jQuery(window).on('scroll', function () {
	if (jQuery(this).scrollTop() > 10) { // Set position from top
			jQuery('.sticky_header').addClass("shrink");
	}else{
			jQuery('.sticky_header').removeClass("shrink");
	}
	});
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previeni il reload della pagina

    emailjs.sendForm('service_8m2uyab', 'template_qv4yt89', this)
      .then(function() {
        alert('Email inviata con successo!');
      }, function(error) {
        alert('Errore nell\'invio: ' + JSON.stringify(error));
      });
});
};
