import { useNavigate } from 'react-router-dom'
import classes from './Patient.module.css'
import { setSelectedPatientInLocalStorage } from '../../../../utils/util';
import { useDispatch } from 'react-redux';
import { patientsActions } from '../../../../store/patientsSlice';

const Patient = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patientClickHandler = () => {
    localStorage.clear();
    setSelectedPatientInLocalStorage(data);
    dispatch(patientsActions.setIsChanged());
    navigate(`/${data.name}`);
  }
  return (
    <div onClick={patientClickHandler} className={`${classes.patient} flex-row`}>
      <img src={data.profile_picture} alt="" />
      <div>
        <p className={classes.name}>{data.name}</p>
        <p className={classes.details}>{`${data.gender} ${data.age}`}</p>
      </div>
      
    </div>
  )
}

export default Patient
