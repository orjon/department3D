window.addEventListener('DOMContentLoaded', () => {

  const designSlides = document.getElementById('designSlides').getElementsByClassName('slide')
  const visualisationSlides = document.getElementById('visualisationSlides').getElementsByClassName('slide')

  function designSlideShow(i){
    designSlides[i].classList.remove('show')
    if (i === designSlides.length -1) {
      designSlides[0].className = 'slide show contained'
      i = - 1
    }

    if (i > -1 ) {
      designSlides[i+1].classList.add('show')
    }

    setTimeout(function() {
      designSlideShow(++i % designSlides.length)
    }, 5000) // show each slide for 5 secs
  }

  function visualisationSlideShow(i){
    visualisationSlides[i].classList.remove('show')
    if (i === visualisationSlides.length -1) {
      visualisationSlides[0].className = 'slide show'
      i = - 1
    }

    if (i > -1 ) {
      visualisationSlides[i+1].classList.add('show')
    }

    setTimeout(function() {
      visualisationSlideShow(++i % visualisationSlides.length)
    }, 6000) // show each slide for 5 secs
  }

  setTimeout(function() {
    designSlides[0].classList.add('show')
    visualisationSlides[0].classList.add('show')
  }, 1) // style first slide on page load

  setTimeout(function() {
    designSlideShow(0)
    visualisationSlideShow(0)
  }, 6000) // show first slide for 5 secs



})
