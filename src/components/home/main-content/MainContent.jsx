import classes from './MainContent.module.css'
import SideBar from './side-bar/SideBar'

const MainContent = () => {
    return (
        <div className={`${classes.mainContent} flex-row`}>
            <SideBar />
        </div>
    )
}

export default MainContent
