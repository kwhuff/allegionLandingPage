var expandButton = document.getElementsByClassName('expandButton')
var pillarText = document.getElementsByClassName('pillarText')
var collapseButton = document.getElementsByClassName('collapseButton')


$(document).ready(function() {

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

$('#readTheLetter').click(function(){
  var letterText = document.getElementsByClassName('panelCEO')
  $(letterText).toggleClass('expandedCEOLetter', 'panelCEO')
})

var vidPlayer = document.getElementsByClassName('youTubeVideo')
var allModals = document.getElementsByClassName('modal')
var modal1 = document.getElementById('myModal1')
var modal2 = document.getElementById('myModal2')
var modal3 = document.getElementById('myModal3')
var body = document.body
var modal1Clone = $(modal1).clone()
var modal2Clone = $(modal2).clone()
var modal3Clone = $(modal3).clone()
var replacementClone = modal1Clone.clone()

$(body).click(function(){
  var modal1 = document.getElementById('myModal1')
  var modal2 = document.getElementById('myModal2')
  var modal3 = document.getElementById('myModal3')
  var x1 = modal1Clone.clone()
  var x2 = modal2Clone.clone()
  var x3 = modal3Clone.clone()
  if($(modal1).css('display') == 'block'){
    $(modal1).replaceWith(x1)
  }
  else if($(modal2).css('display') == 'block'){
    $(modal2).replaceWith(x2)
  }
  else if($(modal3).css('display') == 'block'){
    $(modal3).replaceWith(x3)
  }
})
})
