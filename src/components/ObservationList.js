import Observation from './Observation'

const ObservationList = ({ observations }) => observations.map(observation => <Observation key={observation.id} observation={observation}/>)

export default ObservationList;
