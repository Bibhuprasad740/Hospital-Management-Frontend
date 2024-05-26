import React from 'react'
import classes from './HealthOverview.module.css'
import lungs from '../../../../../assets/lungs.png'
import temperature from '../../../../../assets/temperature.png'
import heart from '../../../../../assets/heart.png'

const HealthOverview = ({ data }) => {
    return (
        <div className={`${classes.healthOverview} flex-row`}>
            {/* Respiratory rate */}
            <div className={`${classes.container} ${classes.one} flex-col`}>
                <img src={lungs} alt="" />
                <p className={classes.title}>Respiratory Rate</p>
                <p className={classes.value}>{data.respiratoryRate.value + ' bpm'}</p>
                <p className={classes.status}>{data.respiratoryRate.levels}</p>
            </div>

            {/* Temperature */}
            <div className={`${classes.container} ${classes.two} flex-col`}>
                <img src={temperature} alt="" />
                <p className={classes.title}>Temperature</p>
                <p className={classes.value}>{data.temperature.value + '°F'}</p>
                <p className={classes.status}>{data.temperature.levels}</p>
            </div>

            {/* Heart rate */}
            <div className={`${classes.container} ${classes.three} flex-col`}>
                <img src={heart} alt="" />
                <p className={classes.title}>Heart Rate</p>
                <p className={classes.value}>{data.heartRate.value + ' bpm'}</p>
                <p className={classes.status}>{data.heartRate.levels}</p>
            </div>
        </div>
    )
}

export default HealthOverview
