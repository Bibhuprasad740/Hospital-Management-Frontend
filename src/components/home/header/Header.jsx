import classes from './Header.module.css'
import RightSection from './RightSection'

import logo from '../../../assets/logo.svg'
import home from '../../../assets/home.png'
import patients from '../../../assets/group.png'
import schedule from '../../../assets/calendar.png'
import message from '../../../assets/message.png'
import transaction from '../../../assets/wallet.png'

const Header = () => {
    return (
        <div className={`${classes.header} flex-row`}>
            <img className={classes.logo} src={logo} alt="" />

            <nav>
                <ul className={`${classes.navBar} flex-row`}>
                    <li>
                        <div className={`${classes.navElement} flex-row`}>
                            <img src={home} alt="" />
                            <p>Overview</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${classes.navElement} flex-row`}>
                            <img src={patients} alt="" />
                            <p>Patients</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${classes.navElement} flex-row`}>
                            <img src={schedule} alt="" />
                            <p>Schedule</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${classes.navElement} flex-row`}>
                            <img src={message} alt="" />
                            <p>Message</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${classes.navElement} flex-row`}>
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
