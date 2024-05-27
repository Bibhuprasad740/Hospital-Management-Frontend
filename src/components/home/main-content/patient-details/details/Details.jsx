import React from 'react'
import classes from './Details.module.css'
import birthIcon from '../../../../../assets/BirthIcon.svg'
import femaleIcon from '../../../../../assets/FemaleIcon.svg'
import maleIcon from '../../../../../assets/MaleIcon.svg'
import phoneIcon from '../../../../../assets/PhoneIcon.svg'
import insuranceIcon from '../../../../../assets/InsuranceIcon.svg'
import download from '../../../../../assets/download.svg'
import { getSelectedPatientFromLocalStorage } from '../../../../../utils/util'

const Details = () => {
    const patientDetails = getSelectedPatientFromLocalStorage();
    const labResultsList = patientDetails.lab_results;

    function formatDate(dateString) {
        // Create a Date object from the input string
        const dateParts = dateString.split('/');
        const month = parseInt(dateParts[0], 10) - 1; // Months are zero-based in JavaScript Date objects
        const day = parseInt(dateParts[1], 10);
        const year = parseInt(dateParts[2], 10);

        const date = new Date(year, month, day);

        // Array of month names
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Format the date
        const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        return formattedDate;
    }
    const birthDate = formatDate(patientDetails.date_of_birth);
    return (
        <div className={`${classes.rightSection}`}>
            <div className={`${classes.details} card`}>
                <div className={`${classes.profilePicture} flex-row`}>
                    <img src={patientDetails.profile_picture} alt="" />
                </div>
                <p className={classes.name}>{patientDetails.name}</p>
                <div className={`${classes.info} flex-col`}>
                    {/* Date of birth */}
                    <div className={`${classes.infoItem} flex-row`}>
                        <img src={birthIcon} alt="" />
                        <div>
                            <p className={classes.title}>Date of Birth</p>
                            <p className={classes.value}>{birthDate}</p>
                        </div>
                    </div>

                    {/* Gender */}
                    <div className={`${classes.infoItem} flex-row`}>
                        <img src={patientDetails.gender == 'Female' ? femaleIcon : maleIcon} alt="" />
                        <div>
                            <p className={classes.title}>Gender</p>
                            <p className={classes.value}>{patientDetails.gender}</p>
                        </div>
                    </div>

                    {/* Contact details */}
                    <div className={`${classes.infoItem} flex-row`}>
                        <img src={phoneIcon} alt="" />
                        <div>
                            <p className={classes.title}>Contact Info.</p>
                            <p className={classes.value}>{patientDetails.phone_number}</p>
                        </div>
                    </div>

                    {/* Emergency contact */}
                    <div className={`${classes.infoItem} flex-row`}>
                        <img src={phoneIcon} alt="" />
                        <div>
                            <p className={classes.title}>Emergency Contact</p>
                            <p className={classes.value}>{patientDetails.emergency_contact}</p>
                        </div>
                    </div>

                    {/* Insurance */}
                    <div className={`${classes.infoItem} flex-row`}>
                        <img src={insuranceIcon} alt="" />
                        <div>
                            <p className={classes.title}>Insurance Provider</p>
                            <p className={classes.value}>{patientDetails.insurance_type}</p>
                        </div>
                    </div>

                    {/* Show all button */}
                    <div className={`${classes.showAll} flex-row`}>
                        <button>Show All Details</button>
                    </div>
                </div>
            </div>
            <div className={`${classes.labResults} card`}>
                <p className={classes.header}>Lab Results</p>
                <div className={`${classes.resultsList} flex-col`}>
                    {labResultsList.map(item =>
                        <div className={`${classes.resultElement} flex-row`}>
                            <p>{item}</p>
                            <img src={download} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Details
