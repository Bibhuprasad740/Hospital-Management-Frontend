import Patient from './Patient'
import classes from './SideBar.module.css'
import search from '../../../../assets/search.png'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const patients = useSelector(state => state.patients.patients);
  return (
    <div className={`${classes.sideBar} card`}>
      {/* Sidebar heading */}
      <div className={`${classes.sideBarHeading} flex-row`}>
        <p className={classes.title}>Patients</p>
        <img src={search} alt="" />
      </div>

      {/* Patients section */}
      <div>
        {patients.map((patient, index) => <Patient data={patient} key={index} />)} 
      </div>
    </div>
  )
}

export default SideBar

