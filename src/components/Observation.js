import { minTemp, maxTemp, currentTemp } from '../Utils/utils'

export default function Observation({ observation }) {
    const current = currentTemp(observation.temperatures);
    const minimum = minTemp(observation.temperatures);
    const maximum = maxTemp(observation.temperatures);

    return (
        <div>
            point: {observation.point},
            current: {(current !=='NULL'? current.value: 'No Data')},
            minimum: {(minimum !=='NULL'? minimum.value: 'No Data')},
            maximum: {(maximum !=='NULL'? maximum.value: 'No Data')},
        </div>
    );
}