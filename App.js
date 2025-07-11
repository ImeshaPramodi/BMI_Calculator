import React, { useState } from 'react';
import './index.css';

import underweightImg from './images/underweight.png';
import normalweightImg from './images/normalweight.png';
import overweightImg from './images/overweight.png';
import obeseImg from './images/obese.png';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [imgSrc, setImgSrc] = useState(null);

  const calculateBMI = event => {
    event.preventDefault();
    if (!weight || !height) {
      alert('Please enter valid weight and height');
      return;
    }
    const bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
      setImgSrc(underweightImg);
    } else if (bmiValue < 24.9) {
      setMessage('You are normal weight');
      setImgSrc(normalweightImg);
    } else if (bmiValue < 29.9) {
      setMessage('You are overweight');
      setImgSrc(overweightImg);
    } else {
      setMessage('You are obese');
      setImgSrc(obeseImg);
    }
  };

  const reload = () => window.location.reload();

  return (
    <div className="App">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <div><label>Weight (Kg)</label><input value={weight} onChange={e => setWeight(e.target.value)} /></div>
          <div><label>Height (m)</label><input value={height} onChange={e => setHeight(e.target.value)} /></div>
          <div>
            <button className="btn" type="submit">Calculate BMI</button>
            <button type="button" onClick={reload} className="btn btn-outline">Refresh</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          {imgSrc && <img src={imgSrc} alt={message} />}
        </div>
      </div>
    </div>
  );
}

export default App;
