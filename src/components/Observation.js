import { minTemp, maxTemp, currentTemp } from '../Utils/utils'
import moment from 'moment'

export default function Observation({ observation }) {
    const {point, temperatures} = observation;

    let filteredTemperatures = temperatures.filter((temperature) => {
        const result = moment().subtract(24, 'hours')
        return moment(temperature.createdAt).isAfter(result);
    })

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