import Observation from './Observation'

const ObservationList = ({ observations }) => {
    return (
        <div>
            {observations.length ?  observations.map(observation => <Observation key={observation._id} observation={observation}/>)
            : <p>No observation to Show</p>}
        </div>
    )
}

export default ObservationList;
