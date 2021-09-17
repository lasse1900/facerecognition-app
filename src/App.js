import './App.css';
import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: "780aa9f8b3fa4098aa967044b7caffba",
});

const particleOptions = {
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

onButtonSubmit = () => {
  console.log("click");
  app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      // THE JPG
      "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

render() {
  return (
    <div className="App">
      <Particles className='particles' params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit} />
      {/*<FaceRecognition /> */}
    </div>
  )
}
}

export default App;
