
var sendEmail = {

	isError: false,

	reset:function(n){
		$('#sent'+n).removeClass('sent');
	},

	loading: function(n){
		$('#send-icon'+n).css("display","inline");
		$('#submit_button'+n).css('display','none');
		$('#sending'+n).css('display','inline');
	},

	sent: function(n){
		$('#sent'+n).css('display','inline');
		$('#sending'+n).css('display','none');

		if ($('#sent'+n).css('display')=='inline-block'){
			$('#sent'+n).addClass('sent');
			
		}
		$('#clear'+n).css('display','inline');
		$('#close-modal'+n).show();
		
	},

	error: function(msg,n){
		$('#contact-form'+n).append('<div class="alert alert--error">'+msg+'</div>');
		$('#sending'+n).css('display','none');
		$('#sent'+n).css('display','none');
		$('#error'+n).css('display','inline');
		$('#clear'+n).css('display','inline');
	},

	spam: function(){
		if ($('#emails').val()===""){
			return false; //no spam
		}else{
			return true;
		}
	},

	clear: function(n){
		$('#sent'+n).css('display','none');
		$('#error'+n).css('display','none');
		$('#submit_button'+n).css('display','inline');
		$('#clear'+n).css('display','none');
		$('#name'+n).val("");
		$('#email'+n).val("");
		$('#service'+n).val("");
		$('#phone'+n).val("");
		$('#service_language'+n).val("");
		$('#country'+n).val("");
		$('#opinion'+n).val("");
		

		$('#message'+n).val("");
		$('.alert--error'+n).remove();
	},

	tryAgain:function(n){
		$('#error'+n).css('display','none');
		$('#submit_button'+n).css('display','inline');
		$('#clear'+n).css('display','none');
		$('.alert--error'+n).remove();
	}

};


function formSpree(n,target){

	if (n==1){n=''}else{n='-'+n}

	var $contactForm = $('#'+target);
	$contactForm.submit(function(e) {
		
		e.preventDefault();
		if (!sendEmail.spam()){
			sendEmail.reset(n);
			$.ajax({
				url: '//formspree.io/monika.zatylny@gmail.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				beforeSend: function() {
					sendEmail.loading(n);
				},
				success: function(data) {
					sendEmail.sent(n);
					sendEmail.isError=false;
				},
				error: function(err) {
					sendEmail.error("Sorry, there was a problem while sending the email. Try again, or send a normal email to davidmartins85gmail.com",n);
					sendEmail.isError=true;
				}
			});
		}else{

		}
		
	});
	$('#clear'+n).click(function(e) {
		e.preventDefault();
		sendEmail.isError ? sendEmail.tryAgain(n) : sendEmail.clear(n);
	});
};

	









