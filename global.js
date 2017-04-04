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
})
