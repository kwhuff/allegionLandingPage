var expandButton = document.getElementsByClassName('expandButton')
var pillarText = document.getElementsByClassName('pillarText')
var collapseButton = document.getElementsByClassName('collapseButton')
var vids = ['6PsDyZQz5R8','20JZRw7xWas','WxDI252wTZI'];
var grayBackground = document.getElementsByClassName('bhhggf')
var headerImage = document.getElementsByClassName('headerImage')
// var allText = document.getElementsByClassName('.pillarText')
// var newText = document.getElementById('#testy')

function headerResizer(){
  var pictureWidth = $(headerImage).width()
  var newHeight = pictureWidth/3
  $(grayBackground).height(newHeight + 56.072)
  $(headerImage).height(newHeight)
}
$(window).on('resize', function(){
  var pictureWidth = $(headerImage).width()
  var newHeight = pictureWidth/3
  $(grayBackground).height(newHeight + 56.072)
  $(headerImage).height(newHeight)
});

$(document).ready(function() {
  headerResizer()
  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: ($(this).offset().top)-250
      }, 1000);
    });
  }
  $.fn.scrollView2 = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: ($(this).offset().top)-250
      }, 500);
    });
  }

$('.ceoSection').click(function(event){
  event.preventDefault();
  $('#ceoScrollCatch').scrollView();
})
$('.growthPillars1').click(function(event){
  event.preventDefault();
  $('#pillarsScrollCatch').scrollView();
})
$('.ourEmployees').click(function(event){
  event.preventDefault();
  $('#employeesScrollCatch').scrollView();
})
$('.moreInfo').click(function(event){
  event.preventDefault();
  $('#infoScrollCatch').scrollView();
})

// Expanding the 5 Pillars Section
$(expandButton).click(function(e){
  var collBtn = $(e.target).siblings('button')
  var collapseBtn= collBtn[0]
  var test = $(e.target).parents('div.col-sm-10')
  var test2 = test[0].children[0]
  var text = $(' > div.pillarText1', test2)
  var finalText = text[0]
  var finalTextHeight = $(finalText).height()
  $(finalText).toggleClass('pillarTextExpanded', 'pillarText1')
  $(collapseBtn).removeClass('hidden')
  $(e.target).addClass('hidden')
  var expandedHeight = $(finalText).siblings('pillarTextExpanded')
})

//Collapsing the 5 Pillars Section
$(collapseButton).click(function(e){
  var expBtn = $(e.target).siblings('button')
  var expandBtn= expBtn[0]
  var test = $(e.target).parents('div.col-sm-10')
  var test2 = test[0].children[0]
  var text = $(' > div.pillarText1', test2)
  var finalText = text[0]
  $(finalText).toggleClass('pillarTextExpanded', 'pillarText1')
  $(expandBtn).removeClass('hidden')
  $(e.target).addClass('hidden')
  $(finalText).scrollView2();
})

//CEO Letter Expand
var letterText = document.getElementsByClassName('panelCEO')
var collapseLetterButton = document.getElementById('collapseLetterBtn')
$('#readTheLetter').click(function(){
  $('#readTheLetter').toggleClass('hidden')
  $('#readLetterSwap').toggleClass('hidden')
  $(letterText).toggleClass('expandedCEOLetter', 'panelCEO')
  $(collapseLetterButton).toggleClass('hidden', 'letterCollapse')
})
$('#collapseLetterBtn').click(function(){
  closeLetter()
  $('#ceoScrollCatch').scrollView();
})
$('#readLetterSwap').click(function(){
  closeLetter()
})
function closeLetter(){
  $(letterText).toggleClass('expandedCEOLetter', 'panelCEO')
  $(collapseLetterButton).toggleClass('hidden')
  $('#readLetterSwap').toggleClass('hidden')
  $('#readTheLetter').toggleClass('hidden')
}


// var body = document.body
// var modal = document.getElementById('vid-modal');

// var modal2 = document.getElementById('myModal2')
// var modal3 = document.getElementById('myModal3')
// var modal1Clone = $(modal1).clone()
// var modal2Clone = $(modal2).clone()
// var modal3Clone = $(modal3).clone()
// var x1 = modal1Clone.clone()
// var x2 = modal2Clone.clone()
// var x3 = modal3Clone.clone()

//Checking to see if any modal is active or visible
//$(body).click(function(){
  // if($(modal1).css('display') == 'block' || $(modal2).css('display') == 'block' || $(modal3).css('display') == 'block')
  // setTimeout(stopModal, 500)

//})
//Stopping the video when modal closes
// function stopModal(){
//     $(modal1).replaceWith(x1)
//     $(modal2).replaceWith(x2)
//     $(modal3).replaceWith(x3)
// }

  $('.videoItem img').off().on('click',function(e){
    var t = e.target;
    initVid($(t).attr('data-index'));
  });

}); //end onDoc ready
function initVid(i){
  $('#vidModal .modal-body').empty().append('<iframe id="youTubeVideo" src="https://www.youtube.com/embed/'+vids[i]+'?rel=0" frameborder="0" allowfullscreen name="youTubeVideo"></iframe>');
 $(document.body).on('click',function(){
   if($('#vidModal').css('display') == 'block'){
    modalKill();
  }
  });
}

function modalKill(){
  setTimeout(function(){$('#youTubeVideo').remove();}, 700)
  $('.container-fluid').off('click',modalKill);
  $('body').off();
}
