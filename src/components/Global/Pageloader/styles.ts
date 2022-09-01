import css from 'styled-jsx/css'

// Scoped styles
export default css`
.PageloaderStyles {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  z-index: 99999;
}

.loader {
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #005BE4;
  /* Dark Green */
  border-radius: 50%;
  width: 132px;
  height: 132px;
  animation: spinloader 0.7s linear infinite;
}

.loader img {
  height: 100px;
  width: 100px;
  animation: spinlogo 0.7s linear infinite;
}

@keyframes spinloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinlogo {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}`
