import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ObservationList from './components/ObservationList';
import Obsera from './components/ObservationList'

function App() {
  const [observationData, setObservationData] = useState([
    {
      id: '1',
      point: 'Helsinki',
      observations: [
        {
          date: '19-01-2021',
          value: 1
        }
      ] 
    },
    {
      id: '2',
      point: 'Helsinki',
      observations: [
        {
          date: '19-01-2021',
          value: 1
        }
      ] 
    },
    {
      id: '3',
      point: 'Helsinki',
      observations: [
        {
          date: '19-01-2021',
          value: 1
        }
      ] 
    }
  ]);

  return (
    <div className="App">
      <Header/>
      <ObservationList observations = {observationData}/>
    </div>
  );
}

export default App;
