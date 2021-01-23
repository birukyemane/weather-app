import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import ObservationList from './components/ObservationList';
import EnterObservation from './components/EnterObservation';


function App() {
  const [observationData, setObservationData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/observations',
    })
    .then(function (response) {
      setObservationData(response.data)
    })
    .catch(err => console.log(err))
  }, []);

  const addTemperature = (point, value) => {
    axios.put('http://localhost:3001/observations', {
      point,
      value
    })
    .then((response) => {
      if(response.data !== {}){
        const newObservationData = observationData.map((item) => {
          if (item.point === response.data.point) {
            return response.data;
          }
     
          return item;
        });
        setObservationData(newObservationData);
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <Header/>
      <EnterObservation handleAdd={addTemperature}/>
      <ObservationList observations={observationData}/>
      <footer className="flex-row">Reaktor task</footer>
    </div>
  );
}

export default App;
