
import { useState } from 'react';

export default function EnterObservation({ handleAdd }) {

    const [temprature, setTemprature] = useState('');
    const [point, setPoint] = useState('Tokyo');
    
    function handleTempChange(event) {
        setTemprature(event.target.value);
    }

    function handlePointChange(event) {
        setPoint(event.target.value);
    }

    function handleOnClick(event) {
      handleAdd(point, temprature)
      setPoint('Tokyo');
      setTemprature('');
  }
 
    return (
      <div className="flex-column">
        <h2 className="flex-row">Want to enter current temperature observation?</h2>
        <div className="flex-row">        
            <div className="inline margin">
                <select className="input-field" value={point} onChange={handlePointChange}>
                  <option value="Amsterdam">Amsterdam</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Helsinki">Helsinki</option>
                  <option value="New York">New York</option>
                  <option value="Tokyo">Tokyo</option>
                </select>
            </div>
            <div className="inline margin">
              <input className="input-field" type="number" placeholder="Enter temperature" value={temprature} onChange={handleTempChange} />
            </div>
            <div className="inline margin">
              <button  className="button-primary" type="button" onClick={handleOnClick}>
                Add
              </button>
            </div>
        </div>
      </div>
    );
}