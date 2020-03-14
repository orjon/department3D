window.addEventListener('DOMContentLoaded', () => {

  const $visualisationSlides = $('#visualisationSlides > .slide')
  const $eventsSlidesLandscape = $('#eventsSlides > .slide:not(.portrait)')
  const $eventsSlidesPortrait = $('#eventsSlides > .slide:not(.landscape)')
  const $designSlides = $('#designSlides > .slide')
  const $printSlides = $('#printSlides > .slide')
  const allSlides = [
    $visualisationSlides,
    $eventsSlidesLandscape,
    $eventsSlidesPortrait,
    $designSlides,
    $printSlides 
    ]

  function incrementSlides(i, slideArray){
    slideArray[i].classList.remove('show')
    if (i === slideArray.length -1) {
      slideArray[0].className = 'slide show'
      i = - 1
    }
    if (i > -1 ) {slideArray[i+1].classList.add('show')}
    setTimeout(function() {
      incrementSlides(++i % slideArray.length, slideArray)
    }, 5000) // show each slide for 5 secs
  }

  setTimeout(function() {
    allSlides.forEach(slideSet =>{
      slideSet[0].classList.add('show')
    })
  }, 0) // show first slide on page load

  setTimeout(function() {
    allSlides.forEach(slideSet =>{
      incrementSlides(0, slideSet)
    })
  }, 5000) // show first slide for 5 secs



})
