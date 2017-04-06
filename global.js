var expandButton = document.getElementsByClassName('expandButton')
var pillarText = document.getElementsByClassName('pillarText')
var collapseButton = document.getElementsByClassName('collapseButton')
var ceoSection = document.getElementById('ceoSection')
var growthPillars = document.getElementById('growthPillars')
var ourEmployees = document.getElementById('ourEmployees')
var moreInfo = document.getElementById('moreInfo')
var vids = ['6PsDyZQz5R8','20JZRw7xWas','WxDI252wTZI'];




$(document).ready(function() {

  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: ($(this).offset().top)-220
      }, 1000);
    });
  }


$('#ceoSection').click(function(event){
  event.preventDefault();
  $('#ceoScrollCatch').scrollView();
})
$('#growthPillars').click(function(event){
  event.preventDefault();
  $('#pillarsScrollCatch').scrollView();
})
$('#ourEmployees').click(function(event){
  event.preventDefault();
  $('#employeesScrollCatch').scrollView();
})
$('#moreInfo').click(function(event){
  event.preventDefault();
  $('#infoScrollCatch').scrollView();
})

// Expanding the 5 Pillars Section
$(expandButton).click(function(e){
  var collBtn = $(e.target).siblings('button')
  var collapseBtn= collBtn[0]
  var test = $(e.target).parents('div.col-sm-10')
  var test2 = test[0].children[0]
  var text = $(' > p.pillarText', test2)
  var finalText = text[0]
  $(finalText).addClass('pillarTextExpanded')
  $(collapseBtn).removeClass('hidden')
  $(e.target).addClass('hidden')
})

//Collapsing the 5 Pillars Section
$(collapseButton).click(function(e){
  var expBtn = $(e.target).siblings('button')
  var expandBtn= expBtn[0]
  var test = $(e.target).parents('div.col-sm-10')
  var test2 = test[0].children[0]
  var text = $(' > p.pillarText', test2)
  var finalText = text[0]
  $(finalText).removeClass('pillarTextExpanded')
  $(expandBtn).removeClass('hidden')
  $(e.target).addClass('hidden')
})

//CEO Letter Expand
var letterText = document.getElementsByClassName('panelCEO')
var collapseLetterButton = document.getElementById('collapseLetterBtn')
$('#readTheLetter').click(function(){
  $(letterText).toggleClass('expandedCEOLetter', 'panelCEO')
  $(collapseLetterButton).toggleClass('hidden', 'letterCollapse')
})
$('#collapseLetterBtn').click(function(){
  $(letterText).toggleClass('expandedCEOLetter', 'panelCEO')
  $(collapseLetterButton).toggleClass('hidden')
})


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
    console.log($(t));
    initVid($(t).attr('data-index'));
  });

}); //end onDoc ready

function initVid(i){
  $('#vidModal .modal-body').empty().append('<iframe id="youTubeVideo" width="100%" height="400px" src="https://www.youtube.com/embed/'+vids[i]+'?rel=0" frameborder="0" allowfullscreen name="youTubeVideo"></iframe>');
 $('.container-fluid').on('click',function(){
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
