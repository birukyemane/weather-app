import { minTemp, maxTemp, currentTemp } from '../Utils/utils'

export default function Observation({ observation }) {
    const {point, temperatures} = observation;
    const current = currentTemp(temperatures);
    const minimum = minTemp(temperatures);
    const maximum = maxTemp(temperatures);

    /*
         <div>
            point: {observation.point},
            current: {(current !=='NULL'? current.value: 'No Data')},
            minimum: {(minimum !=='NULL'? minimum.value: 'No Data')},
            maximum: {(maximum !=='NULL'? maximum.value: 'No Data')},
        </div>
    */

    return (
       
        <div className="flex-column">
            <div className="flex-row">         
                <div className="flex-row ">
                    <div className="stat-title">Observation point :</div>
                    <div className="stat-info">{point}</div> 
                </div>
                <div  className="flex-row ">
                    <div className="stat-title"> Current temperature :</div>
                    <div className="stat-info">{current.value} degree celcius</div>
                </div>
                <div  className="flex-row ">
                    <div className="stat-title">Minimum temperature : </div>
                    <div className="stat-info">{minimum.value} degree celcius</div>
                </div>         
                <div  className="flex-row ">
                    <div className="stat-title">NMaximum temperature : </div>
                    <div className="stat-info">{maximum.value} degree celcius</div>
                </div>
            </div>               
        </div>  
    );
}