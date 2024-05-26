import React from 'react'
import classes from './History.module.css'
import { DUMMY_DATA } from '../../../../../dummyData'

const History = () => {
    const diagnosisHistory = DUMMY_DATA[0].diagnosis_history;
    // console.log(DUMMY_DATA[0].name)
    // console.log(diagnosisHistory)
  return (
    <div className={`${classes.history} card`}>
      
    </div>
  )
}

export default History
