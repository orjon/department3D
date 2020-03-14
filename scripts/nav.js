/* eslint-disable no-unused-vars */
$(() => {
  // const currentPage = document.querySelector('.navText').innerHTML
  const navIcons = document.querySelectorAll('.navIcon')
  const $boxMenu = $('.boxMenu')
  const iconMenu = $('.rightBox')

  const iconVisualisation = document.querySelector('.navIcon.visualisation')
  const iconDesign = document.querySelector('.navIcon.design')
  const iconContact = document.querySelector('.navIcon.contact')


  const $visualisationSlides = $('#visualisationSlides')
  const $eventsSlides = $('#eventsSlides')
  const $designSlides = $('#designSlides')
  const $printSlides = $('#printSlides')
  const $contactPage = $('#contact')
  // const siteVersion = document.getElementById('siteVersion')


  const visualisationText = document.getElementById('visualisationText')
  const designText = document.getElementById('designText')

  const slideSets = document.querySelectorAll('.slides')
  const currentNav = document.querySelector('.current')


  const textBoxMinWidth = 45
  const textBoxMaxWidth = 75
  const textBoxPadding = 5
  const $textBoxes = $('.textBox')
  const $visualisationTextBox = $('#visualisationTextBox')
  const $eventsTextBox = $('#eventsTextBox')
  const $designTextBox = $('#designTextBox')
  const $printTextBox = $('#printTextBox')

  let textBoxWidth = undefined
  let textBoxXPosition = undefined
  let textBoxYPosition = undefined

  function textBoxPosition() {
    if ($(window).width() > 800) {
      textBoxWidth = (textBoxMinWidth + Math.floor(Math.random() * (textBoxMaxWidth-textBoxMinWidth))+1)
      textBoxXPosition = (textBoxPadding + Math.floor(Math.random() * ((100-textBoxWidth-textBoxPadding)-textBoxPadding))+ 1)
      textBoxYPosition = (textBoxPadding + Math.floor(Math.random() * (30-textBoxPadding))+ 1)
      $visualisationTextBox.css({width:`${textBoxWidth}vw`, left: `${textBoxXPosition}vw`,bottom: `${textBoxYPosition}vh`})
      textBoxWidth = (textBoxMinWidth + Math.floor(Math.random() * (textBoxMaxWidth-textBoxMinWidth))+1)
      textBoxXPosition = (textBoxPadding + Math.floor(Math.random() * ((100-textBoxWidth-textBoxPadding)-textBoxPadding))+ 1)
      textBoxYPosition = (textBoxPadding + Math.floor(Math.random() * (40-textBoxPadding))+ 1)
      $designTextBox.css({width:`${textBoxWidth}vw`, left: `${textBoxXPosition}vw`,bottom: `${textBoxYPosition}vh`})
    }
    // Hide Textbox after X secs
    // setTimeout(function() {
    //   $visualisationTextBox.addClass('hidden')
    //   $designTextBox.addClass('hidden')
    // }, 6000)
  }

  $(window).resize(function() {
    textBoxPosition()
  })

  textBoxPosition()


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
    iconMenu.toggleClass('visible')
    if (iconMenu.hasClass('visible')) {
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
    if (iconMenu.hasClass('visible')) {
      $(this).attr('src', './images/icons/box-open.png')
    } else {
      $(this).attr('src', './images/icons/box-closed.png')
    }

  }

  function hideSections(){

    $visualisationSlides.attr('class','slideSet hidden')
    $eventsSlides.attr('class','slideSet hidden')
    $designSlides.attr('class','slideSet hidden')
    $printSlides.attr('class','slideSet hidden')

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
          $(e.target).attr('src', './images/icons/visualisationD.png')
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
      textBoxPosition()
      resetMenu()
      hideSections()
      if ($(e.target).hasClass('visualisation')) {
        $visualisationSlides.attr('class','slideSet visible')
        $visualisationTextBox.removeClass('hidden')
        $('.navIcon.visualisation').addClass('current')

      } else if ($(e.target).hasClass('events')) {
        $eventsSlides.attr('class','slideSet visible')
        $eventsTextBox.removeClass('hidden')
        $('.navIcon.events').addClass('current')

      } else if ($(e.target).hasClass('design')) {
        $designSlides.attr('class','slideSet visible')
        $designTextBox.removeClass('hidden')
        $('.navIcon.design').addClass('current')

      } else if ($(e.target).hasClass('print')) {
        $printSlides.attr('class','slideSet visible')
        $printTextBox.removeClass('hidden')
        $('.navIcon.print').addClass('current')


      } else if ($(e.target).hasClass('contact')) {
        document.querySelector('.leftBox').classList.add('contact')
        $contactPage.removeClass('hidden')
        $('.navIcon.contact').addClass('current')
      }
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
