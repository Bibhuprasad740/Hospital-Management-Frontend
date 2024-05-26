import Patient from './Patient'
import classes from './SideBar.module.css'
import search from '../../../../assets/search.png'
import { DUMMY_DATA } from '../../../../dummyData'

const SideBar = () => {
  return (
    <div className={`${classes.sideBar} card`}>
      {/* Sidebar heading */}
      <div className={`${classes.sideBarHeading} flex-row`}>
        <p className={classes.title}>Patients</p>
        <img src={search} alt="" />
      </div>

      {/* Patients section */}
      <div>
        <Patient data={DUMMY_DATA[0]}/>
        <Patient data={DUMMY_DATA[1]}/>
        <Patient data={DUMMY_DATA[2]}/> 
        {/* <Patient data={DUMMY_DATA[3]}/> 
        <Patient data={DUMMY_DATA[4]}/> 
        <Patient data={DUMMY_DATA[5]}/> 
        <Patient data={DUMMY_DATA[6]}/> 
        <Patient data={DUMMY_DATA[7]}/>  */}
      </div>
    </div>
  )
}

export default SideBar

