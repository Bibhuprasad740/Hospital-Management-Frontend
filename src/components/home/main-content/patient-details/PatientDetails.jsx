import classes from './PatientDetails.module.css'
import Details from './details/Details'
import History from './history/History'

const PatientDetails = () => {
  return (
    <div className={`${classes.patientDetails} flex-row`}>
        <History />
        <Details />
    </div>
  )
}

export default PatientDetails
