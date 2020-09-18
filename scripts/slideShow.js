window.addEventListener('DOMContentLoaded', () => {

  const $visualisationSlidesLandscape = $('#visualisationSlidesLandscape > .slide')
  const $visualisationSlidesPortrait = $('#visualisationSlidesPortrait > .slide')

  const $eventsSlidesLandscape = $('#eventsSlidesLandscape > .slide')
  const $eventsSlidesPortrait = $('#eventsSlidesPortrait > .slide')

  const $designSlidesLandscape = $('#designSlidesLandscape > .slide')
  const $designSlidesPortrait = $('#designSlidesPortrait > .slide')

  const $printSlidesLandscape = $('#printSlidesLandscape > .slide')
  const $printSlidesPortrait = $('#printSlidesPortrait > .slide')

  const $allSlideSets = $('slideSet')


  const slidesAll = [
    $visualisationSlidesLandscape,
    $visualisationSlidesPortrait,
    $eventsSlidesLandscape,
    $eventsSlidesPortrait,
    $designSlidesLandscape,
    $designSlidesPortrait,
    $printSlidesLandscape,
    $printSlidesPortrait,
  ]

  function setBackground() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
    isInstagram ? $socialLinks.attr( 'class', 'hidden') : $socialLinks.attr( 'class', '');
  }


  function incrementSlides(i, slideArray){
    slideArray[i].classList.remove('show')
    if (i === slideArray.length -1) {
      slideArray[0].className = 'slide show'
      i = - 1
    }
  
    if (i > -1 ) {
      slideArray[i+1].classList.add('show')
    }

    setTimeout(function() {
      incrementSlides(++i % slideArray.length, slideArray)
    }, 5000) // show each slide for 5 secs
  }

  setTimeout(function() {
    slidesAll.forEach(slideSet => slideSet[0].classList.add('show'))
  }, 1) // show first slide on page load

  setTimeout(function() {
    slidesAll.forEach(slideSet => incrementSlides(0, slideSet))
  }, 5000) // show first slide for 5 secs

})
