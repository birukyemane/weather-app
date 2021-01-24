import Observation from './Observation'

const ObservationList = ({ observations }) => {
    let header =  <div className="flex-column">
        <h2 className="flex-row">Here are temperature observations over the last 24 hours</h2>
        <div className="flex-row margin">
            <div className="title">Point</div>
            <div className="title">Current</div>
            <div className="title">Min</div>
            <div className="title">Max</div>
        </div>
    </div>;


    observations = observations.map(observation => <Observation key={observation._id} observation={observation}/>)

    return (
        observations.length ?  
            <div>
                {header}
                {observations}
            </div>: 
            <h3 className="flex-row margin">No observation to Show</h3>
    )
}

export default ObservationList;
