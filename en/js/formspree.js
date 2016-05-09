
var sendEmail = {

	isError: false,

	reset:function(){
		$('#sent').removeClass('sent');
	},

	loading: function(){
		$('#send-icon').css("display","inline");
		$('#submit_button').css('display','none');
		$('#sending').css('display','inline');
	},

	sent: function(){
		$('#sent').css('display','inline');
		$('#sending').css('display','none');

		if ($('#sent').css('display')=='inline-block'){
			$('#sent').addClass('sent');
			
		}
		$('#clear').css('display','inline');
		$('#close-modal').show();
		
	},

	error: function(msg){
		$('#contact-form').append('<div class="alert alert--error">'+msg+'</div>');
		$('#sending').css('display','none');
		$('#sent').css('display','none');
		$('#error').css('display','inline');
		$('#clear').css('display','inline');
	},

	spam: function(){
		if ($('#email2').val()===""){
			return false;
		}else{
			return true;
		}
	},

	clear: function(){
		$('#sent').css('display','none');
		$('#error').css('display','none');
		$('#submit_button').css('display','inline');
		$('#clear').css('display','none');
		$('#name').val("");
		$('#email').val("");
		$('#service').val("");
		$('#service_language').val("");
		$('#phone').val("");
		$('#opinion').val("");
		

		$('#message').val("");
		$('.alert--error').remove();
	},

	tryAgain:function(){
		$('#error').css('display','none');
		$('#submit_button').css('display','inline');
		$('#clear').css('display','none');
		$('.alert--error').remove();
	}

};



	var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
		
		e.preventDefault();
		if (!sendEmail.spam()){
			sendEmail.reset();
			$.ajax({
				url: '//formspree.io/monika.zatylny@gmail.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				beforeSend: function() {
					sendEmail.loading();
				},
				success: function(data) {
					sendEmail.sent();
					sendEmail.isError=false;
				},
				error: function(err) {
					sendEmail.error("Sorry, there was a problem while sending the email. Try again, or send a normal email to davidmartins85gmail.com");
					sendEmail.isError=true;
				}
			});
		}else{

		}
		
	});
	$('#clear').click(function(e) {
		e.preventDefault();
		sendEmail.isError ? sendEmail.tryAgain() : sendEmail.clear();
	});









