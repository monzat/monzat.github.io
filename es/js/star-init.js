jQuery(document).ready(function () {

        $('.fixed-rating').rating({displayOnly: true, step: 0.5});
        
        $('#rating-input').rating({
              min: 0,
              max: 5,
              step: 1,
              size: 'xs',
              showClear: true,
              showCaption: false
           });
           
        $('#btn-rating-input').on('click', function() {
            $('#rating-input').rating('refresh', {
                showClear:true, 
                disabled: !$('#rating-input').attr('disabled')
            });
        });
        $('#rating-input').on('rating.change', function() {

            $('#stars').val($('#rating-input').val());
        });

       
    });


