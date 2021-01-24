import { minTemp, maxTemp, currentTemp, filterTamperatures } from '../Utils/utils'

export default function Observation({ observation }) {
    const {point, temperatures} = observation;

    const filteredTemperatures = filterTamperatures(temperatures);
    const current = currentTemp(filteredTemperatures);
    const minimum = minTemp(filteredTemperatures);
    const maximum = maxTemp(filteredTemperatures);

    return (
       
        <div className="flex-column">
            <div className="flex-row margin">    
                <div className="title info">{point}</div>
                <div className="title info">{(current !=='NULL'? `${current.value} °c` : 'No Data')}</div>
                <div className="title info">{(minimum !=='NULL'? `${minimum.value} °c`:  'No Data')}</div>
                <div className="title info">{(maximum !=='NULL'? `${maximum.value} °c` :  'No Data')}</div>
            </div>               
        </div>  
    );
}