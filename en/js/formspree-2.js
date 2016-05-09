
var sendEmail = {

	isError: false,

	reset:function(){
		$('#sent').removeClass('sent');
	},

	loading: function(){
		$('#send-icon-2').css("display","inline");
		$('#submit_button-2').css('display','none');
		$('#sending-2').css('display','inline');
	},

	sent: function(){
		$('#sent-2').css('display','inline');
		$('#sending-2').css('display','none');

		if ($('#sent-2').css('display')=='inline-block'){
			$('#sent-2').addClass('sent');
			
		}
		$('#clear').css('display','inline');
		$('#close-modal').show();
		
	},

	error: function(msg){
		$('#contact-form-2').append('<div class="alert alert--error">'+msg+'</div>');
		$('#sending-2').css('display','none');
		$('#sent-2').css('display','none');
		$('#error-2').css('display','inline');
		$('#clear-2').css('display','inline');
	},

	spam: function(){
		if ($('#email2-2').val()===""){
			return false;
		}else{
			return true;
		}
	},

	clear: function(){
		$('#sent-2').css('display','none');
		$('#error-2').css('display','none');
		$('#submit_button-2').css('display','inline');
		$('#clear-2').css('display','none');
		$('#name-2').val("");
		$('#email-2').val("");
		$('#service-2').val("");
		$('#service_language-2').val("");
		$('#phone-2').val("");
		$('#opinion-2').val("");
		

		$('#message-2').val("");
		$('.alert--error-2').remove();
	},

	tryAgain:function(){
		$('#error-2').css('display','none');
		$('#submit_button-2').css('display','inline');
		$('#clear-2').css('display','none');
		$('.alert--error-2').remove();
	}

};



	var $contactForm2 = $('#contact-form-2');
	$contactForm2.submit(function(e) {
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
	$('#clear-2').click(function(e) {
		e.preventDefault();
		sendEmail.isError ? sendEmail.tryAgain() : sendEmail.clear();
	});









