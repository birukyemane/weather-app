
import { useState } from 'react';

export default function EnterObservation({ handleAdd }) {

    const [temprature, setTemprature] = useState('');
    const [point, setPoint] = useState('Tokio');
    
    function handleTempChange(event) {
        setTemprature(event.target.value);
    }

    function handlePointChange(event) {
        setPoint(event.target.value);
    }
 
    return (
      <div>
        <label>
          Pick observation point:
          <select value={point} onChange={handlePointChange}>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Dubai">Dubai</option>
            <option value="Helsinki">Helsinki</option>
            <option value="New York">New York:</option>
            <option value="Tokio">Tokio:</option>
          </select>
        </label>
        <input type="number" value={temprature} onChange={handleTempChange} />
        <button type="button" onClick={()=> handleAdd(point, temprature)}>
          Add
        </button>
      </div>
    );
}