  $(document).ready(function() {

   $( "#service" ).change(function() {
        $('#service').val()=="Other" ?  $('#service-other').show() : $('#service-other').hide(); $('#service-other input').val("");
    });
});

