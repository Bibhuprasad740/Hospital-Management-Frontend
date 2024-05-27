import React, { useEffect } from 'react'
import classes from './History.module.css'
import { Line } from 'react-chartjs-2'
import { Chart, registerables, defaults } from 'chart.js'
import arrowUp from '../../../../../assets/arrowUp.png'
import arrowDown from '../../../../../assets/arrowDown.png'
import { DUMMY_DATA } from '../../../../../dummyData'
import HealthOverview from './HealthOverview'

Chart.register(...registerables);
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.font.color = 'black';

const History = () => {
    const diagnosisHistory = DUMMY_DATA[0].diagnosis_history;
    const labels = [];
    for (let i = 0; i < Math.min(diagnosisHistory.length, 6); i++) {
        let labelName = ''
        for (let j = 0; j < 3; j++) {
            labelName += diagnosisHistory[i].month[j];
        }
        labelName += `, ${diagnosisHistory[i].year}`
        labels.push(labelName);
    }

    const systolicData = []
    for (let i = 0; i < Math.min(diagnosisHistory.length, 6); i++) {
        systolicData.push(diagnosisHistory[i].blood_pressure.systolic.value);
    }

    const diastolicData = []
    for (let i = 0; i < Math.min(diagnosisHistory.length, 6); i++) {
        diastolicData.push(diagnosisHistory[i].blood_pressure.diastolic.value);
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                backgroundColor: '#C26EB4',
                borderColor: '#C26EB4'
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                backgroundColor: '#7E6CAB',
                borderColor: '#7E6CAB'
            },
        ],
    }

    const options = {
        elements: {
            line: {
                tension: 0.3,
            }
        }
    }

    const diagnosisList = DUMMY_DATA[0].diagnostic_list;
    return (
        <div className={`${classes.historyPage} flex-col`}>
            <div className={`${classes.history} card`}>
                <p className={classes.header}>Diagnosis History</p>

                {/* chart and the details */}
                <div className={`${classes.chart} flex-row`}>
                    {/* chart */}
                    <div className={`${classes.lineGraph}`}>
                        <Line data={data} options={options} />
                    </div>

                    {/* details */}
                    <div className={`${classes.graphDetails}`}>
                        <div className={`${classes.dataElement} flex-col`}>
                            <div className={`${classes.detailsHeader} flex-row`}>
                                <div className={classes.color1}></div>
                                <p>Systolic</p>
                            </div>
                            <p className={classes.value}>{diagnosisHistory[0].blood_pressure.systolic.value}</p>
                            <div className='flex-row'>
                                <img src={diagnosisHistory[0].blood_pressure.systolic.value > 120 ? arrowUp : arrowDown} alt="" />
                                <p className={classes.feedback} >{diagnosisHistory[0].blood_pressure.systolic.value > 120 ? 'Higher Than Average' : 'Lower Than Average'}</p>
                            </div>
                        </div>

                        <div className={classes.divider}></div>

                        <div className={`${classes.dataElement} flex-col`}>
                            <div className={`${classes.detailsHeader} flex-row`}>
                                <div className={classes.color2}></div>
                                <p>Diastolic</p>
                            </div>
                            <p className={classes.value}>{diagnosisHistory[0].blood_pressure.diastolic.value}</p>
                            <div className='flex-row'>
                                <img src={diagnosisHistory[0].blood_pressure.diastolic.value > 80 ? arrowUp : arrowDown} alt="" />
                                <p className={classes.feedback}>{diagnosisHistory[0].blood_pressure.diastolic.value > 120 ? 'Higher Than Average' : 'Lower Than Average'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* health overview */}
                <HealthOverview data={{ respiratoryRate: diagnosisHistory[0].respiratory_rate, heartRate: diagnosisHistory[0].heart_rate, temperature: diagnosisHistory[0].temperature }} />
            </div>
            <div className={`${classes.list} card`}>
                <p className={classes.header}>Diagnostic List</p>
                <div className={`${classes.tableHeaders} flex-row`}>
                    <div className={`${classes.diagnosis} flex-row`}>
                        <p > Problem </p>
                    </div>
                    <div className={`${classes.description} flex-row `}>
                        <p > Description </p>
                    </div>
                    <div className={`${classes.status} flex-row `}>
                        <p > Status </p>
                    </div>
                </div>

                {diagnosisList.map(item =>
                    <div className={`${classes.tableRows} flex-row`}>
                        <div className={`${classes.diagnosis} flex-row`}>
                            <p > {item.name} </p>
                        </div>
                        <div className={`${classes.description} flex-row `}>
                            <p > {item.description} </p>
                        </div>
                        <div className={`${classes.status} flex-row `}>
                            <p > {item.status} </p>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default History
