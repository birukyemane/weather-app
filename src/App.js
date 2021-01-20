import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ObservationList from './components/ObservationList';
import EnterObservation from './components/EnterObservation'

function App() {
  const [date, setDate] = useState(new Date())
  const [observationData, setObservationData] = useState([
    {
      id: '1',
      point: 'Helsinki',
      temperatures: [
        {
          date: new Date("October 13, 2014 11:13:00"),
          value: 1
        },
        {
          date: new Date("October 13, 2014 12:13:00"),
          value: 4
        },
        {
          date: new Date("October 13, 2014 14:13:00"),
          value: 5
        }
      ] 
    },
    {
      id: '2',
      point: 'New York',
      temperatures: [
        {
          date: new Date("October 13, 2014 11:13:00"),
          value: 1
        },
        {
          date: new Date("October 13, 2014 12:13:00"),
          value: 4
        },
        {
          date: new Date("October 13, 2014 14:13:00"),
          value: 5
        }
      ] 
    }
  ]);

  const addTemperature = (point, value) => {
    const newObservationData = observationData.map((item) => {
      if (item.point === point) {
        const updatedItem = {
          ...item,
          temperatures: item.temperatures.concat({ value, date: new Date() })
        };
 
        return updatedItem;
      }
 
      return item;
    });
 
    setObservationData(newObservationData);
  }

  return (
    <div className="App">
      <Header date={date}/>
      <EnterObservation handleAdd={addTemperature}/>
      <ObservationList observations={observationData}/>
    </div>
  );
}

export default App;
