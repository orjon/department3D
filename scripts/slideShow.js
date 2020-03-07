window.addEventListener('DOMContentLoaded', () => {

  const visualisationSlides = document.getElementById('visualisationSlides').getElementsByClassName('slide')
  const eventsSlides = document.getElementById('eventsSlides').getElementsByClassName('slide')
  const designSlides = document.getElementById('designSlides').getElementsByClassName('slide')


  function visualisationSlideShow(i){
    visualisationSlides[i].classList.remove('show')
    if (i === visualisationSlides.length -1) {
      visualisationSlides[0].className = 'slide show'
      i = - 1
    }
    if (i > -1 ) { visualisationSlides[i+1].classList.add('show')}
    setTimeout(function() {
      visualisationSlideShow(++i % visualisationSlides.length)
    }, 6000) // show each slide for 5 secs
  }


  function eventsSlideShow(i){
    eventsSlides[i].classList.remove('show')
    if (i === eventsSlides.length -1) {
      eventsSlides[0].className = 'slide show contained'
      i = - 1
    }
    if (i > -1 ) {eventsSlides[i+1].classList.add('show')}

    setTimeout(function() {
      eventsSlideShow(++i % eventsSlides.length)
    }, 5000) // show each slide for 5 secs
  }

  function designSlideShow(i){
    designSlides[i].classList.remove('show')
    if (i === designSlides.length -1) {
      designSlides[0].className = 'slide show contained'
      i = - 1
    }
    if (i > -1 ) {designSlides[i+1].classList.add('show')}

    setTimeout(function() {
      designSlideShow(++i % designSlides.length)
    }, 5000) // show each slide for 5 secs
  }


  setTimeout(function() {
    visualisationSlides[0].classList.add('show')
    eventsSlides[0].classList.add('show')
    designSlides[0].classList.add('show')
  }, 1) // style first slide on page load

  setTimeout(function() {
    visualisationSlideShow(0)
    eventsSlideShow(0)
    designSlideShow(0)
  }, 6000) // show first slide for 5 secs



})
