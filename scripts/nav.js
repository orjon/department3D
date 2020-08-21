/* eslint-disable no-unused-vars */
$(() => {

  let orientation = undefined
  const navIcons = document.querySelectorAll('.navIcon')
  const $boxMenu = $('.boxMenu')
  const $iconMenu = $('.rightBox')

  const $visualisationSlidesLandscape = $('#visualisationSlidesLandscape')
  const $visualisationSlidesPortrait = $('#visualisationSlidesPortrait')
  const $eventsSlidesLandscape = $('#eventsSlidesLandscape')
  const $eventsSlidesPortrait = $('#eventsSlidesPortrait')
  const $designSlidesLandscape = $('#designSlidesLandscape')
  const $designSlidesPortrait = $('#designSlidesPortrait')
  const $printSlidesLandscape = $('#printSlidesLandscape')
  const $printSlidesPortrait = $('#printSlidesPortrait')
  const $contactPage = $('#contact')

  const textBoxMinWidth = 45
  const textBoxMaxWidth = 70
  const textBoxPadding = 5

  const $visualisationTextBox = $('#visualisationTextBox')
  const $eventsTextBox = $('#eventsTextBox')
  const $designTextBox = $('#designTextBox')
  const $printTextBox = $('#printTextBox')

  let textBoxWidth = undefined
  let textBoxXPosition = undefined
  let textBoxYPosition = undefined

  window.onload = function (){
    console.log('department3D v1.3')
    console.log('design & build: orjon.com')
    orientation = checkOrientation()
    console.log(orientation)
    setOrienation()
  }

  window.onresize = function(){
    let oldOrientation = orientation
    orientation = checkOrientation()
    if (!oldOrientation === orientation){
    } else {
      setOrienation()
    }
  }

  function checkOrientation() {
    if(window.innerHeight > window.innerWidth){
      return 'Portrait'
    } else {
      return 'Landscape'
    }
  }

  function setOrienation(){
    if (orientation === 'Portrait'){
      $visualisationSlidesLandscape.addClass('hiddenOrientation')
      $eventsSlidesLandscape.addClass('hiddenOrientation')
      $designSlidesLandscape.addClass('hiddenOrientation')
      $printSlidesLandscape.addClass('hiddenOrientation')
      $visualisationSlidesPortrait.removeClass('hiddenOrientation')
      $eventsSlidesPortrait.removeClass('hiddenOrientation')
      $designSlidesPortrait.removeClass('hiddenOrientation')
      $printSlidesPortrait.removeClass('hiddenOrientation')
    } else {
      $visualisationSlidesLandscape.removeClass('hiddenOrientation')
      $eventsSlidesLandscape.removeClass('hiddenOrientation')
      $designSlidesLandscape.removeClass('hiddenOrientation')
      $printSlidesLandscape.removeClass('hiddenOrientation')
      $visualisationSlidesPortrait.addClass('hiddenOrientation')
      $eventsSlidesPortrait.addClass('hiddenOrientation')
      $designSlidesPortrait.addClass('hiddenOrientation')
      $printSlidesPortrait.addClass('hiddenOrientation')
    }
  }

  function textBoxPositions() {
    let textBoxes = [$visualisationTextBox, $eventsTextBox,$designTextBox]
    if ($(window).width() > 800) {
      textBoxWidth = (textBoxMinWidth + Math.floor(Math.random() * (textBoxMaxWidth-textBoxMinWidth))+1)
      textBoxXPosition = (textBoxPadding + Math.floor(Math.random() * ((100-textBoxWidth-textBoxPadding)-textBoxPadding))+ 1)
      textBoxYPosition = (textBoxPadding + Math.floor(Math.random() * (10-textBoxPadding))+ 1)
      for (let i=0; i<textBoxes.length; i++){
        textBoxes[i].css({width:`${textBoxWidth}vw`, left: `${textBoxXPosition}vw`,bottom: `${textBoxYPosition}vh`})
      }
    }
    // Hide Textbox after X secs
    // setTimeout(function() {
    //   visualisationTextBox.classList.add('hidden')
    //   designTextBox.classList.add('hidden')
    // }, 6000)
  }

  $(window).resize(function() {
    textBoxPositions()
  })

  textBoxPositions()

  $visualisationTextBox.mousedown(function() {
    $visualisationTextBox.addClass('hidden')
  })
  $eventsTextBox.mousedown(function() {
    $eventsTextBox.addClass('hidden')
  })
  $designTextBox.mousedown(function() {
    $designTextBox.addClass('hidden')
  })
  $printTextBox.mousedown(function() {
    $printTextBox.addClass('hidden')
  })


  $boxMenu.mousedown(function() {
    toggleMenu()
  })


  $boxMenu.mouseover(function() {
    if ($boxMenu.hasClass('closed')) {
      $boxMenu.attr('src', './images/icons/box-open.png')
    } 
  })

  $boxMenu.mouseout(function() {
    if ($boxMenu.hasClass('closed')) {
      $boxMenu.attr('src', './images/icons/box-closed.png') 
    }
  })


  function toggleMenu() {
    $iconMenu.toggleClass('visible')
    if ($iconMenu.hasClass('visible')) {
      $(this).attr('src', './images/icons/box-open.png')
      $boxMenu.attr('src', './images/icons/box-open.png')
      $boxMenu.removeClass('closed')
    } else {
      $(this).attr('src', './images/icons/box-closed.png')
      $boxMenu.attr('src', './images/icons/box-closed.png')
      $boxMenu.addClass('closed')
    }
  }

  function resetMenu() {
    toggleMenu()
    if ($iconMenu.hasClass('visible')) {
      $(this).attr('src', './images/icons/box-open.png')
    } else {
      $(this).attr('src', './images/icons/box-closed.png')
    }

  }

  function hideSections(){
    $visualisationSlidesPortrait.attr('class','slideSet hidden')
    $visualisationSlidesLandscape.attr('class','slideSet hidden')
    $eventsSlidesPortrait.attr('class','slideSet hidden')
    $eventsSlidesLandscape.attr('class','slideSet hidden')
    $designSlidesPortrait.attr('class','slideSet hidden')
    $designSlidesLandscape.attr('class','slideSet hidden')
    $printSlidesPortrait.attr('class','slideSet hidden')
    $printSlidesLandscape.attr('class','slideSet hidden')

    $visualisationTextBox.addClass('hidden')
    $eventsTextBox.addClass('hidden')
    $designTextBox.addClass('hidden')
    $printTextBox.addClass('hidden')
    $contactPage.attr('class','hidden')
  }



  navIcons.forEach(icon => {

    icon.addEventListener('mouseover', (e) => {
      if (!$(e.target).hasClass('current')) {
        if ($(e.target).hasClass('visualisation')) {
          $(e.target).attr('src', './images/icons/visualisationC.png')
        } else if ($(e.target).hasClass('events')) {
          $(e.target).attr('src', './images/icons/eventsC.png')
        } else if ($(e.target).hasClass('design')) {
          $(e.target).attr('src', './images/icons/designC.png')
        } else if ($(e.target).hasClass('print')) {
          $(e.target).attr('src', './images/icons/printC.png')
        } else if ($(e.target).hasClass('contact')) {
          $(e.target).attr('src', './images/icons/contactC.png')
        }
      }
    })

    icon.addEventListener('mousedown', (e) => {
      resetNavIcons()
      resetMenu()
      hideSections()
      textBoxPositions()
      if ($(e.target).hasClass('visualisation')) {
        $visualisationSlidesPortrait.attr('class','slideSet visible')
        $visualisationSlidesLandscape.attr('class','slideSet visible')
        $visualisationTextBox.removeClass('hidden')
        $('.navIcon.visualisation').addClass('current')

      } else if ($(e.target).hasClass('events')) {
        $eventsSlidesPortrait.attr('class','slideSet visible')
        $eventsSlidesLandscape.attr('class','slideSet visible')
        $eventsTextBox.removeClass('hidden')
        $('.navIcon.events').addClass('current')

      } else if ($(e.target).hasClass('design')) {
        $designSlidesPortrait.attr('class','slideSet visible')
        $designSlidesLandscape.attr('class','slideSet visible')
        $designTextBox.removeClass('hidden')
        $('.navIcon.design').addClass('current')

      } else if ($(e.target).hasClass('print')) {
        $printSlidesPortrait.attr('class','slideSet visible')
        $printSlidesLandscape.attr('class','slideSet visible')
        $printTextBox.removeClass('hidden')
        $('.navIcon.print').addClass('current')

      } else if ($(e.target).hasClass('contact')) {
        document.querySelector('.leftBox').classList.add('contact')
        $contactPage.removeClass('hidden')
        $('.navIcon.contact').addClass('current')
      }
      setOrienation()
      setNavIcons()
    })

    icon.addEventListener('mouseout', (e) => {
      setNavIcons()
    })

  })


  function resetNavIcons() {
    navIcons.forEach(icon => {
      if (icon.classList.contains('current')) {
        icon.classList.remove('current')
      }
    })
  }

  function setNavIcons() {
    $('.navIcon.visualisation').attr('src', './images/icons/visualisationA.png')
    $('.navIcon.events').attr('src', './images/icons/eventsA.png')
    $('.navIcon.design').attr('src', './images/icons/designA.png')
    $('.navIcon.print').attr('src', './images/icons/printA.png')
    $('.navIcon.contact').attr('src', './images/icons/contactA.png')

    $('.navIcon.visualisation.current').attr('src', './images/icons/visualisationC.png')
    $('.navIcon.events.current').attr('src', './images/icons/eventsC.png')
    $('.navIcon.design.current').attr('src', './images/icons/designC.png')
    $('.navIcon.print.current').attr('src', './images/icons/printC.png')
    $('.navIcon.contact.current').attr('src', './images/icons/contactC.png')
  }


})
