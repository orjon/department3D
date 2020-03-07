/* eslint-disable no-unused-vars */
$(() => {

  // const currentPage = document.querySelector('.navText').innerHTML
  const navIcons = document.querySelectorAll('.navIcon')
  const dotMenu = document.querySelector('.dotMenu')
  const iconMenu = $('.rightBox')

  const iconVisualisation = document.querySelector('.navIcon.visualisation')
  const iconDesign = document.querySelector('.navIcon.design')
  const iconContact = document.querySelector('.navIcon.contact')

  const $visualisationSlides = $('#visualisationSlides')
  const $eventsSlides = $('#eventsSlides')
  const $designSlides = $('#designSlides')

  const visualisationText = document.getElementById('visualisationText')
  const designText = document.getElementById('designText')

  const slideSets = document.querySelectorAll('.slides')
  const currentNav = document.querySelector('.current')

  const contactPage = document.getElementById('contact')
  const siteVersion = document.getElementById('siteVersion')

  const textBoxMinWidth = 45
  const textBoxMaxWidth = 75
  const textBoxPadding = 5
  const textBox = document.querySelector('.textBox')
  const $visualisationTextBox = $('#visualisationTextBox')
  const $eventsTextBox = $('#eventsTextBox')
  const $designTextBox = $('#designTextBox')

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


  $('.dotMenu').mousedown(function() {
    $(this).attr('src', './images/icons/squareMenuB.png')
    hideMenu()
  })



  $('.dotMenu').mouseout(function() {
    if (iconMenu.hasClass('visible')) {
    } else {
      $(this).attr('src', './images/icons/squareMenuAA.png')
    }
  })

  function hideMenu() {
    iconMenu.toggleClass('visible')
  }

  function resetMenu() {
    hideMenu()
    $('.dotMenu').attr('src', './images/icons/squareMenuAA.png')
  }



  navIcons.forEach(icon => {
    icon.addEventListener('mouseover', (e) => {
      if ($(e.target).hasClass('visualisation')) {
        $(e.target).attr('src', './images/icons/visualisationThinWhtByellow.png')
      } else if ($(e.target).hasClass('events')) {
        $(e.target).attr('src', './images/icons/eventsThinWhtB.png')
      } else if ($(e.target).hasClass('design')) {
        $(e.target).attr('src', './images/icons/designThinWhtB2.png')
      } else if ($(e.target).hasClass('contact')) {
        $(e.target).attr('src', './images/icons/contactThinWhtB.png')
      }
    })

    icon.addEventListener('mousedown', (e) => {
      resetNavIcons()
      textBoxPosition()
      resetMenu()
      if ($(e.target).hasClass('visualisation')) {
        $visualisationSlides.attr('class','visible')
        $visualisationTextBox.removeClass('hidden')
        $eventsSlides.attr('class','hidden')
        $eventsTextBox.addClass('hidden')
        $designSlides.attr('class','hidden')
        $designTextBox.addClass('hidden')
        contactPage.classList.add('hidden')
        siteVersion.className = 'hidden'
        $('.navIcon.visualisation').addClass('current')

      } else if ($(e.target).hasClass('events')) {
        $visualisationSlides.attr('class','hidden')
        $visualisationTextBox.addClass('hidden')
        $eventsSlides.attr('class','visible')
        $eventsTextBox.removeClass('hidden')
        $designSlides.attr('class','hidden')
        $designTextBox.addClass('hidden')
        contactPage.classList.add('hidden')
        siteVersion.className = 'hidden'
        $('.navIcon.events').addClass('current')

      } else if ($(e.target).hasClass('design')) {
        $visualisationSlides.attr('class','hidden')
        $visualisationTextBox.addClass('hidden')
        $eventsSlides.attr('class','hidden')
        $eventsTextBox.addClass('hidden')
        $designSlides.attr('class','visible')
        $designTextBox.removeClass('hidden')
        contactPage.classList.add('hidden')
        siteVersion.className = 'hidden'
        $('.navIcon.design').addClass('current')

      } else if ($(e.target).hasClass('contact')) {
        document.querySelector('.leftBox').classList.add('contact')
        $visualisationSlides.attr('class','hidden')
        $visualisationTextBox.addClass('hidden')
        $eventsSlides.attr('class','hidden')
        $eventsTextBox.addClass('hidden')
        $designSlides.attr('class','hidden')
        $designTextBox.addClass('hidden')
        contactPage.className = 'visible'
        siteVersion.className = ''
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
    $('.navIcon.visualisation').attr('src', './images/icons/visualisationThinWhtA.png')
    $('.navIcon.events').attr('src', './images/icons/eventsThinWhtA.png')
    $('.navIcon.design').attr('src', './images/icons/designThinWhtA.png')
    $('.navIcon.contact').attr('src', './images/icons/contactThinWhtA.png')

    $('.navIcon.visualisation.current').attr('src', './images/icons/visualisationThinWhtByellow.png')
    $('.navIcon.events.current').attr('src', './images/icons/eventsThinWhtB.png')
    $('.navIcon.design.current').attr('src', './images/icons/designThinWhtB2.png')
    $('.navIcon.contact.current').attr('src', './images/icons/contactThinWhtB.png')
  }


})
