import classes from './Patient.module.css'

const Patient = ({ data }) => {
  return (
    <div className={`${classes.patient} flex-row`}>
      <img src={data.profile_picture} alt="" />
      <div>
        <p className={classes.name}>{data.name}</p>
        <p className={classes.details}>{`${data.gender} ${data.age}`}</p>
      </div>
      
    </div>
  )
}

export default Patient
