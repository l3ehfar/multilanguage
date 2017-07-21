
$(document).ready(function(){

  /*>>>>>>>>>>>>>>>>>>>>>persian<<<<<<<<<<<<<<<<<<<<<*/

  $('#persian').click(function(){

    /*header text*/

    if($('#french_header_text').css('display') == 'none')
    {
      $('#english_header_text').fadeOut('slow',function(){
        $('#persian_header_text').fadeIn('slow');
      });
    } else{
      $('#french_header_text').fadeOut('slow',function(){
        $('#persian_header_text').fadeIn('slow');
      });
    }

    /*navbar*/
    $('#one').fadeOut('slow',function(){
      $(this).text("صفحه اصلی").fadeIn();
      $(this).css('font-family','Samim');
    });
    $('#two').fadeOut('slow',function(){
      $(this).text("درباره ما").fadeIn();
      $(this).css('font-family','Samim');
    });
    $('#three').fadeOut('slow',function(){
      $(this).text("ارتباط با ما").fadeIn();
      $(this).css('font-family','Samim');
    });

    /*hide titles*/
    $('#persian_title_1').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 600);
    $('#persian_title_2').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 600);
    
    /*other parts*/
    if($('#english_example').css('display') == 'none')
    {
      $('#french_example').fadeOut('slow',function(){
        $('#persian_example').fadeIn('slow');
      });
    } else{
      $('#english_example').fadeOut('slow',function(){
        $('#persian_example').fadeIn('slow');
      });
    }

     if($('#english_example_2').css('display') == 'none')
    {
      $('#french_example_2').fadeOut('slow',function(){
        $('#persian_example_2').fadeIn('slow');
      });
    } else{
      $('#english_example_2').fadeOut('slow',function(){
        $('#persian_example_2').fadeIn('slow');
      });
    }


  });



  /*>>>>>>>>>>>>>>>>>>>>>english<<<<<<<<<<<<<<<<<<<<<*/

  $('#english').click(function(){

    /*header text*/
    if($('#persian_header_text').css('display') == 'none')
    {
      $('#french_header_text').fadeOut('slow',function(){
        $('#english_header_text').fadeIn('slow');
      });
    } else{
      $('#persian_header_text').fadeOut('slow',function(){
        $('#english_header_text').fadeIn('slow');
      });
    }

    /*navbar*/
    $('#one').fadeOut('slow',function(){
      $(this).text("HOME").fadeIn();
      $(this).css('font-family','Raleway Light');
    });
    $('#two').fadeOut('slow',function(){
      $(this).text("ABOUT").fadeIn();
      $(this).css('font-family','Raleway Light');
    });
    $('#three').fadeOut('slow',function(){
      $(this).text("CONTACT").fadeIn();
      $(this).css('font-family','Raleway Light');
    });


    /*show titles*/
    $('#persian_title_1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1200);
    $('#persian_title_2').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1200);

    /*other parts*/
    if($('#persian_example').css('display') == 'none')
    {
      $('#french_example').fadeOut('slow',function(){
        $('#english_example').fadeIn('slow');
      });
    } else{
      $('#persian_example').fadeOut('slow',function(){
        $('#french_example').fadeIn('slow');
      });
    }

        if($('#persian_example_2').css('display') == 'none')
    {
      $('#french_example_2').fadeOut('slow',function(){
        $('#english_example_2').fadeIn('slow');
      });
    } else{
      $('#persian_example_2').fadeOut('slow',function(){
        $('#french_example_2').fadeIn('slow');
      });
    }

  });



  /*>>>>>>>>>>>>>>>>>>>>>french<<<<<<<<<<<<<<<<<<<<<*/

  $('#french').click(function(){

    /*header text*/
    if($('#english_header_text').css('display') == 'none')
    {
      $('#persian_header_text').fadeOut('slow',function(){
        $('#french_header_text').fadeIn('slow');
      });
    } else{
      $('#english_header_text').fadeOut('slow',function(){
        $('#french_header_text').fadeIn('slow');
      });
    }

    /*navbar*/
    $('#one').fadeOut('slow',function(){
      $(this).text("ACCUEIL").fadeIn();
      $(this).css('font-family','simhei');
    });
    $('#two').fadeOut('slow',function(){
      $(this).text("PROPOSE").fadeIn();
      $(this).css('font-family','simhei');
    });
    $('#three').fadeOut('slow',function(){
      $(this).text("CONTACT").fadeIn();
      $(this).css('font-family','simhei');
    });

    /*other parts*/
    if($('#english_example').css('display') == 'none')
    {
      $('#persian_example').fadeOut('slow',function(){
        $('#french_example').fadeIn('slow');
      });
    } else{
      $('#english_example').fadeOut('slow',function(){
        $('#french_example').fadeIn('slow');
      });
    }

        if($('#english_example_2').css('display') == 'none')
    {
      $('#persian_example_2').fadeOut('slow',function(){
        $('#french_example_2').fadeIn('slow');
      });
    } else{
      $('#english_example_2').fadeOut('slow',function(){
        $('#french_example_2').fadeIn('slow');
      });
    }

  });

});

