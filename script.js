$(document).ready(function(){
    $('#navigation li').hover(function(){
        $(this)
            .stop(true)
            .animate(
                {height:'60px'},
                {duration: 600, easing: 'easeOutBounce'}
            )
    },
    function(){
        $(this)
        .stop(true)
        .animate(
            {height:'20px'},
            {duration:500, easing: 'easeOutCirc'}
        )
    })
 
     
    $('p:first')
        .effect('shake', {times:3}, 300)
        .effect('highlight', {}, 3000)
        .hide('explode', {}, 1000 );  
       
    $('#news').scroll(function (){
        $('#header').append('<span class="scrolled">You scrolled</span>')
    })

    $(window).scroll(function(){
        $('#navigation').css('top', $(document).scrollTop())
    });

    var $window = $(window),
    $navigation = $('#navigation');

    $(window).scroll (function (){
        if(!$navigation.hasClass('fixed')&& ($window.scrollTop > 
            $navigation.offset().top)) {
                $navigation.addClass('fixed').data('top',
                 $navigation.offset().top);
            } else if ($navigation.hasClass('fixed')&& ($window.scrollTop <
                $navigation.data("top"))){
                    $navigation.removeClass('fixed');
                }
    })

    $('a[href="#"]').click(function(){
    $.scrollTo(0, 'slow');
       e.preventDefault
    })

    $('#fine_print').jScrollPane({
        verticalGutter:20
    })

   /* $(window).resize(function () {
        alert("You resized the window!")
    })*/

    stylesheetToggle();
    $(window).resize(stylesheetToggle);
 

    function stylesheetToggle() {
    if($('body').width() > 900) {
        $('<link rel="stylesheet" href="wide.css" type="text/css" media="screen" charset="utf-8"/>')
            .appendTo('head');
    } else {
        $('link[href="wide.css"]').remove();
    } 
};

  $('p').resizable();

  $('textarea').resizable({
      grid:[20,20],
      minWidth:153,
      minHeight:30,
      maxHeight:220,
      containment: 'parent'
  });

  $('#splitter > div:first').resizable ({
      handles: 'e',
      minWidth: '100',
      maxWidth: '400',
      resize:function () {
          var remainingSpace = $ (this).parent().height()-
          $(this).outerHeight();
        var divTwo =$(this).next();
        var divTwoHeight= remainingSpace - (divTwo.outerHeight()- divTwo.height());
        divTwo.css('height', divTwoHeight + 'px');
      }
  });

  $('a.lightbox').click(function(e) {
    alert('pios'),
    $('body').css('overflow-y', 'hidden'); // hide scrollbars!
    
    $('<div id="overlay"></div>')
      .css('top', $(document).scrollTop())
      .css('opacity', '0')
      .animate({'opacity': '0.5'}, 'slow')
      .appendTo('body');
      
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
      
    $('<img>')
      .attr('src', $(this).attr('href'))
      .load(function() {
        positionLightboxImage();
      })
      .click(function() {
        removeLightbox();
      })
      .appendTo('#lightbox');
    
    return false;
  });
});

function positionLightboxImage() {
    alert('lighbox')
  var top = ($(window).height() - $('#lightbox').height()) / 2;
  var left = ($(window).width() - $('#lightbox').width()) / 2;
  $('#lightbox')
    .css({
      'top': top + $(document).scrollTop(),
      'left': left
    })
    .fadeIn();
}

function removeLightbox() {
  $('#overlay, #lightbox')
    .fadeOut('slow', function() {
      $(this).remove();
      $('body').css('overflow-y', 'auto'); // show scrollbars!
    });
}

