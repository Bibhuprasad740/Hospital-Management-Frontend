import classes from './RightSection.module.css'
import doctorPng from '../../../assets/doctor.png'
import settings from '../../../assets/settings.png'
import moreVert from '../../../assets/more_vert.png'

const RightSection = () => {
  return (
    <div className={`${classes.rightSection} flex-row`}>
      {/* profile image */}
      <img className={classes.doctorPng} src={doctorPng} alt="" />

      {/* doctor details */}
      <div className={classes.doctorDetails}>
          <p className={classes.name}>Dr. Jose Simmons</p>
          <p className={classes.title}>General Practitioner</p>
      </div>

      {/* settings */}
      <div className={`${classes.settingsSection} flex-row`}>
        <img className={classes.settings} src={settings} alt="" />
        <img className={classes.moreVert} src={moreVert} alt="" />
      </div>
    </div>
  )
}

export default RightSection
