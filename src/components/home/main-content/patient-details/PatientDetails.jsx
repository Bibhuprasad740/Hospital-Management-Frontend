import { useSelector } from 'react-redux'
import classes from './PatientDetails.module.css'
import Details from './details/Details'
import History from './history/History'
import { useEffect } from 'react'

const PatientDetails = () => {
  const isChanged = useSelector(state => state.patients.isChanged);
  useEffect(() => { }, [isChanged])
  return (
    <div className={`${classes.patientDetails} flex-row`}>
      <History />
      <Details />
    </div>
  )
}

export default PatientDetails
