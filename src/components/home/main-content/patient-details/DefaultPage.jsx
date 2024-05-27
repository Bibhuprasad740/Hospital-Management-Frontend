import classes from './DefaultPage.module.css'
import EmptyPage from '../../../../assets/empty_page.jpg'

const DefaultPage = () => {
  return (
    <div className={`${classes.defaultPage} card`}>
        <div className={`${classes.mainContent} flex-col`}>
          <img src={EmptyPage} alt="" />
          <p className={classes.title}>Please Click On A Patient To See Details</p>
        </div>
    </div>
  )
}

export default DefaultPage
