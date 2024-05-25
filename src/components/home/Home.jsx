import classes from './Home.module.css';
import Header from './header/Header';
import MainContent from './main-content/MainContent';

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <MainContent />
    </div>
  )
}

export default Home
