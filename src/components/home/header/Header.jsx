import classes from './Header.module.css'
import RightSection from './RightSection'

import logo from '../../../assets/logo.svg'
import home from '../../../assets/home.png'
import patients from '../../../assets/group.png'
import schedule from '../../../assets/calendar.png'
import message from '../../../assets/message.png'
import transaction from '../../../assets/wallet.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
    const [selected, setSelected] = useState ('patients')
    const selectNavItemHandler = (value) => {
        setSelected(value);
    }

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <div className={`${classes.header} flex-row`}>
            <img onClick={navigateToHome} className={classes.logo} src={logo} alt="" />

            <nav>
                <ul className={`${classes.navBar} flex-row`}>
                    <li>
                        <div onClick={() => selectNavItemHandler('overview')} className={`${classes.navElement} flex-row ${selected === 'overview' ? classes.active : '' }`}>
                            <img src={home} alt="" />
                            <p>Overview</p>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => selectNavItemHandler('patients')} className={`${classes.navElement} flex-row ${selected === 'patients' ? classes.active : '' }`}>
                            <img src={patients} alt="" />
                            <p>Patients</p>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => selectNavItemHandler('schedule')} className={`${classes.navElement} flex-row ${selected === 'schedule' ? classes.active : '' }`}>
                            <img src={schedule} alt="" />
                            <p>Schedule</p>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => selectNavItemHandler('message')} className={`${classes.navElement} flex-row ${selected === 'message' ? classes.active : '' }`}>
                            <img src={message} alt="" />
                            <p>Message</p>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => selectNavItemHandler('transaction')} className={`${classes.navElement} flex-row ${selected === 'transaction' ? classes.active : '' }`}>
                            <img src={transaction} alt="" />
                            <p>Transactions</p>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className={`${classes.rightSection} flex-row`}>
                <RightSection />
            </div>
        </div>
    )
}

export default Header
