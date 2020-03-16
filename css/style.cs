:root {
  --oSize: 70vh;
  --navSize: 100vh;
  --fontSizeHello: 4vh;
}

.width10 {
  width: 10%;
}

.width13 {
  width: 13%;
}

.width15 {
  width: 15%;
}

.width20 {
  width: 20%;
}

.width25 {
  width: 25%;
}

.width30 {
  width: 30%;
}

.width40 {
  width: 40%;
}

.width50 {
  width: 50%;
}

.width65 {
  width: 65%;
}

.width75 {
  width: 75%;
}

.width90 {
  width: 90%;
}

.width100 {
  width: 100%;
}

nav {
  background-color: rgba(68, 68, 68, 0.85);
  font-size: 20px;
  font-weight: 100;
  color: white;
}
nav .leftBox {
  opacity: 1;
  background-color: #444444;
  height: 54px;
  width: 100vw;
  padding: 10px 15px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
nav .leftBox a {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
nav .leftBox a .navLogo {
  max-width: 166px;
  max-height: 34px;
  width: 100%;
  height: auto;
}
nav .leftBox .dotMenu {
  z-index: 11;
  max-height: 34px;
  width: auto;
  height: 100%;
  border: 0px solid orange;
}
nav .rightBox {
  opacity: 0;
  background-color: #444444;
  position: fixed;
  z-index: 10;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10 10px 20px;
  display: none;
}
nav .rightBox .navIcon {
  display: flex;
  margin-top: 5px;
  margin-right: 10px;
  width: 50px;
  width: 50px;
  border: 0px solid orange;
}
nav .rightBox.visible {
  opacity: 1;
  display: flex;
}
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0.25;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideInFromRight {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (min-width: 600px) {
  nav .leftBox {
    will-change: opacity;
    opacity: 1;
    background-color: rgba(68, 68, 68, 0.85);
    will-change: position;
    position: fixed;
    animation: 1.5s ease-out 0s 1 slideInFromTop;
    z-index: 10;
    top: 0px;
    left: 20px;
    height: 12.5vh;
    min-height: 75px;
    width: 250px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  nav .leftBox a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  nav .leftBox a .navLogo {
    max-width: none;
    max-height: none;
    width: 100%;
  }
  nav .leftBox .dotMenu {
    display: none;
  }
  nav .rightBox {
    opacity: 1;
    background-color: rgba(68, 68, 68, 0.85);
    position: fixed;
    will-change: transform;
    animation: 2.5s ease-out 0s 1 slideInFromRight;
    z-index: 10;
    top: 40px;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    padding: 15px 0px 15px 15px;
  }
  nav .rightBox .navIcon {
    display: flex;
    margin-top: 0;
    margin-right: 20px;
    width: 50px;
    border: 0px solid orange;
  }
}

.top {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid red;
}

.logoImage {
  width: 100%;
  max-width: 1750px;
  height: 100%;
  background-image: url("../images/design/cisco2015.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 0px solid cyan;
}

.hidden {
  display: none;
}

.navArrows.landscape .navArrow {
  height: 5vh;
  height: 40px;
  border: 0px solid cyan;
  will-change: opacity;
  opacity: 0.25;
  transition-timing-function: ease-in;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.navArrows.landscape .navArrow:hover {
  opacity: 1;
  transition-timing-function: ease-out;
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}
.navArrows.landscape .left {
  position: fixed;
  top: 50%;
  left: 2vw;
  transform: translate(0%, -50%);
}
.navArrows.landscape .right {
  position: fixed;
  top: 50%;
  right: 2vw;
  transform: translate(0%, -50%);
}
.navArrows.landscape .navPlayPause {
  border: 0px solid pink;
  position: fixed;
  top: 92%;
  right: 2vw;
  transform: translate(0%, -50%);
}
.navArrows.landscape .navPlayPause img {
  height: 30px;
  border: 0px solid red;
}
.navArrows.landscape .navPlayPause .autoPlay {
  border: 0px solid cyan;
  will-change: opacity;
  opacity: 0.25;
  transition-timing-function: ease-in;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.navArrows.landscape .navPlayPause .autoPlay:hover {
  opacity: 1;
  transition-timing-function: ease-out;
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}

.bottom {
  padding-bottom: 1.5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
  color: #333;
  font-family: "Montserrat", monospace;
}
.bottom .description {
  border: 0px solid pink;
  font-size: 17px;
  text-align: center;
}
.bottom .description .descriptionText {
  font-size: 1em;
  padding-top: 0.25em;
  border: 0px solid pink;
}
.bottom .description .descriptionTech {
  font-family: sans-serif;
  font-size: 0.9em;
  padding-top: 0.25em;
  color: #999;
  border: 0px solid pink;
}
.bottom .hidden {
  display: none;
}
.bottom .navArrows.portrait {
  padding-bottom: 1.5%;
  width: 100%;
  border: 0px solid orange;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.bottom .navArrows.portrait .navPlayPause {
  border: 0px solid pink;
  padding-top: 0.55em;
}
.bottom .navArrows.portrait .navPlayPause img {
  height: 50px;
  border: 0px solid red;
}
.bottom .navArrows.portrait .navPlayPause .autoPlay {
  border: 0px solid cyan;
  will-change: opacity;
  opacity: 0.25;
  transition-timing-function: ease-in;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.bottom .navArrows.portrait .navPlayPause .autoPlay:hover {
  opacity: 1;
  transition-timing-function: ease-out;
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}
.bottom .navArrows.portrait .navArrow {
  margin: 0.55em 5%;
  height: 30px;
  border: 0px solid cyan;
  will-change: opacity;
  opacity: 0.25;
  transition-timing-function: ease-in;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.bottom .navArrows.portrait .navArrow:hover {
  opacity: 1;
  transition-timing-function: ease-out;
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}
.bottom .navArrows.portrait .navArrow .left {
  display: inline-block;
  padding: 10%;
}
.bottom .navArrows.portrait .navArrow .right {
  display: inline-block;
  padding: 10%;
}
#visualisationSlides.visible img.slide,
#eventsSlides.visible img.slide,
#designSlides.visible img.slide {
  object-fit: cover;
}
#visualisationSlides.visible img.slide.contained,
#eventsSlides.visible img.slide.contained,
#designSlides.visible img.slide.contained {
  object-fit: cover;
  position: absolute;
}
@media (min-width: 600px) {
  #visualisationSlides.visible img.slide.contained,
#eventsSlides.visible img.slide.contained,
#designSlides.visible img.slide.contained {
    object-fit: contain;
  }
}

#visualisationSlides.visible,
#eventsSlides.visible,
#designSlides.visible {
  width: 100%;
  height: 100%;
  border: 0px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#visualisationSlides.visible img.slide,
#eventsSlides.visible img.slide,
#designSlides.visible img.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 3s;
  transition: opacity 3s;
}
#visualisationSlides.visible img.slide.p,
#eventsSlides.visible img.slide.p,
#designSlides.visible img.slide.p {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 3s;
  transition: opacity 3s;
}
#visualisationSlides.visible img.slide.show,
#eventsSlides.visible img.slide.show,
#designSlides.visible img.slide.show {
  opacity: 1;
}
#visualisationSlides.visible .slideShowButton,
#eventsSlides.visible .slideShowButton,
#designSlides.visible .slideShowButton {
  width: 40px;
  height: 40px;
  background: rgba(68, 68, 68, 0.85);
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 0px solid orange;
}
#visualisationSlides.visible .playPause,
#eventsSlides.visible .playPause,
#designSlides.visible .playPause {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0px solid red;
  mix-blend-mode: color-dodge;
}

#slideShow {
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#slideShow a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0px solid cyan;
}
#slideShow a img.background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.5;
}
#slideShow a img.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 3s;
  transition: opacity 3s;
}
#slideShow a img.slide.p {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 3s;
  transition: opacity 3s;
}
@media (min-width: 600px) {
  #slideShow a img.slide.p {
    object-fit: contain;
  }
}
#slideShow a img.slide.show {
  opacity: 1;
}
#slideShow .slideShowButton {
  width: 40px;
  height: 40px;
  background: rgba(68, 68, 68, 0.85);
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 0px solid orange;
}
#slideShow .playPause {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0px solid red;
  mix-blend-mode: color-dodge;
}

#visualisationTextBox,
#eventsTextBox,
#designTextBox {
  cursor: pointer;
  animation: 3s ease-out 0s 1 fadeIn;
  opacity: 1;
  -webkit-transition: opacity 1s;
  transition: opacity 1s;
  position: fixed;
  bottom: 25px;
  background-color: rgba(68, 68, 68, 0.85);
  width: 90vw;
  padding: 18px;
  padding-top: 8px;
  color: white;
  font-size: 20pt;
  text-align: justify-content;
}
#visualisationTextBox p,
#eventsTextBox p,
#designTextBox p {
  border: 0px solid lightgrey;
  text-align: justify;
}
#visualisationTextBox .hidden,
#eventsTextBox .hidden,
#designTextBox .hidden {
  display: none;
}

@media (min-width: 800px) {
  #visualisationTextBox,
#eventsTextBox,
#designTextBox {
    cursor: pointer;
    animation: 3s ease-out 0s 1 fadeIn;
    opacity: 1;
    -webkit-transition: opacity 1s;
    transition: opacity 1s;
    position: fixed;
    bottom: 15%;
    left: 12.5%;
    background-color: rgba(68, 68, 68, 0.85);
    width: 80vw;
    padding: 18px;
    padding-top: 8px;
    color: white;
    font-size: 25pt;
    text-align: justify-content;
  }
  #visualisationTextBox p,
#eventsTextBox p,
#designTextBox p {
    border: 0px solid lightgrey;
    text-align: justify;
  }
  #visualisationTextBox .hidden,
#eventsTextBox .hidden,
#designTextBox .hidden {
    display: none;
  }
}
#visualisationTextBox.hidden,
#eventsTextBox.hidden,
#designTextBox.hidden {
  display: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#contact {
  color: white;
  font-size: 20pt;
  margin: 10%;
  max-width: 750px;
  text-align: justify;
  z-index: 5;
}
@media (min-width: 600px) {
  #contact {
    font-size: 25pt;
  }
}
#contact .contactDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
#contact .contactDetails a {
  color: white;
  text-decoration: none;
}

footer {
  z-index: 10;
}
footer #siteVersion {
  color: #999;
  position: fixed;
  bottom: 0.5%;
  right: 0.5%;
  font-family: sans-serif;
  font-size: 1.6222222222vh;
  display: none;
}
footer #siteVersion a {
  text-decoration: none;
  color: #ccc;
  font-family: sans-serif;
}
footer #siteVersion.hidden {
  display: none;
}
@media (min-width: 600px) {
  footer #siteVersion {
    display: flex;
  }
}

* {
  box-sizing: border-box;
  user-select: none;
  text-decoration: none;
  font-family: "Jura", sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  text-decoration: none;
}

body {
  width: 100vw;
  height: 100vh;
  color: black;
  background-color: black;
  font-weight: 300;
}

#screenContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid orange;
}
#screenContainer nav {
  border: 0px solid blue;
}
#screenContainer .content {
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0px solid blue;
}

.o {
  width: var(--oSize);
  height: var(--oSize);
}

body::-webkit-scrollbar {
  width: 0 !important;
}

/*# sourceMappingURL=style.cs.map */
