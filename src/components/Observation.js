import { minTemp, maxTemp, currentTemp } from '../Utils/utils'

export default function Observation({ observation }) {
    const current = currentTemp(observation.temperatures);
    const minimum = minTemp(observation.temperatures);
    const maximum = maxTemp(observation.temperatures);

    return (
        <div>
            point: {observation.point},
            current: {current.value},
            minimum: {minimum.value},
            maximum: {maximum.value}
        </div>
    );
}