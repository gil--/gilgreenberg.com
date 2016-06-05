$(document).ready(function() {
  var brandColors = new Array();
  brandColors['instagram'] = '88,81,219,.5';
  brandColors['twitter'] = '85,172,238,.5';
  brandColors['github'] = '102,102,102,.5';
  brandColors['linkedin'] = '0,119,181,.5';

  $(document).on('mouseover', '.section__intro .social-links a', function() {
  	var brand = $(this).data('brand');
  	var brandColor = brandColors[brand];
  	$(this).closest('.section__intro').css('background-color', 'rgba(' + brandColor + ')');
  }).on('mouseout', '.section__intro .social-links a', function() {
  	$(this).closest('.section__intro').css('background-color', 'transparent');
  });

  $('.about__words').each(function(){
         // get current ul
         var $ul = $(this);
         // get array of list items in current ul
         var $liArr = $ul.children('li');
         // sort array of list items in current ul randomly
         $liArr.sort(function(a,b){
               // Get a random number between 0 and 10
               var temp = parseInt( Math.random()*10 );
               // Get 1 or 0, whether temp is odd or even
               var isOddOrEven = temp%2;
               // Get +1 or -1, whether temp greater or smaller than 5
               var isPosOrNeg = temp>5 ? 1 : -1;
               // Return -1, 0, or +1
               return( isOddOrEven*isPosOrNeg );
         })
         // append list items to ul
         .appendTo($ul);
   });
});
