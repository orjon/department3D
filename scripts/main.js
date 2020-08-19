window.addEventListener('DOMContentLoaded', () => {

  const $socialLinks = $('#socialLinks')
  checkInstagram()

  window.onload = function (){
    checkWindowSize()
  }

  window.onresize = function(){
    checkWindowSize()
  }

  function checkInstagram() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
    isInstagram ? $socialLinks.attr( 'class', 'hidden') : $socialLinks.attr( 'class', '');
  }

  function checkWindowSize(){
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (windowWidth < windowHeight){
      document.documentElement.style.setProperty('--oSize', '70vw')
      document.documentElement.style.setProperty('--fontSizeHello', '4vw')
    } else {
      document.documentElement.style.setProperty('--oSize', '70vh')
      document.documentElement.style.setProperty('--fontSizeHello', '4vh')
    }
  }


})
