import { Outlet } from 'react-router-dom'
import classes from './MainContent.module.css'
import SideBar from './side-bar/SideBar'

const MainContent = () => {
    return (
        <div className={`${classes.mainContent} flex-row`}>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default MainContent
