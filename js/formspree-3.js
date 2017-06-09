
var sendEmail3 = {

	isError: false,

	reset:function(){
		$('#sent-3').removeClass('sent');
	},

	loading: function(){
		$('#send-icon-3').css("display","inline");
		$('#submit_button-3').css('display','none');
		$('#sending-3').css('display','inline');
	},

	sent: function(){
		$('#sent-3').css('display','inline');
		$('#sending-3').css('display','none');

		if ($('#sent-3').css('display')=='inline-block'){
			$('#sent-3').addClass('sent');
			
		}
		$('#clear').css('display','inline');
		$('#close-modal').show();
		
	},

	error: function(msg){
		$('#contact-form-3').append('<div class="alert alert--error">'+msg+'</div>');
		$('#sending-3').css('display','none');
		$('#sent-3').css('display','none');
		$('#error-3').css('display','inline');
		$('#clear-3').css('display','inline');
	},

	spam: function(){
		if ($('#email3-3').val()===""){
			return true;
		}else{
			return false;
		}
	},

	clear: function(){
		$('#sent-3').css('display','none');
		$('#error-3').css('display','none');
		$('#submit_button-3').css('display','inline');
		$('#clear-3').css('display','none');
		$('#name-3').val("");
		$('#email-3').val("");
		$('#service-3').val("");
		$('#service_language-3').val("");
		$('#phone-3').val("");
		$('#opinion-3').val("");
		

		$('#message-3').val("");
		$('.alert--error-3').remove();
	},

	tryAgain:function(){
		$('#error-3').css('display','none');
		$('#submit_button-3').css('display','inline');
		$('#clear-3').css('display','none');
		$('.alert--error-3').remove();
	}

};



	var $contactForm3 = $('#contact-form-3');
	$contactForm3.submit(function(e) {
		e.preventDefault();
		if (!sendEmail3.spam()){
			sendEmail3.reset();
			$.ajax({
				url: '//formspree.io/monika.zatylny@gmail.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				beforeSend: function() {
					sendEmail3.loading();
				},
				success: function(data) {
					sendEmail3.sent();
					sendEmail3.isError=false;
				},
				error: function(err) {
					sendEmail3.error("Sorry, there was a problem while sending the email. Try again, or send a normal email to davidmartins85gmail.com");
					sendEmail3.isError=true;
				}
			});
		}else{

		}
		
	});
	$('#clear-3').click(function(e) {
		e.preventDefault();
		sendEmail3.isError ? sendEmail3.tryAgain() : sendEmail3.clear();
	});









