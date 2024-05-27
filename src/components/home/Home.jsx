import { useEffect } from 'react';
import classes from './Home.module.css';
import Header from './header/Header';
import MainContent from './main-content/MainContent';
import axios from 'axios';
import {useDispatch } from 'react-redux'
import { patientsActions } from '../../store/patientsSlice';

const BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev'
const auth = {
  Username: 'coalition',
  Password: 'skills-test'
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic coalition skills-test`
}

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllPatients = async () => {
      try {
        const response = await axios.get(BASE_URL,
          {
            auth: {
              username: 'coalition',
              password: 'skills-test'
            }
          });
          dispatch(patientsActions.setPatients(response.data));
      } catch (error) {
        console.log('Can not get patients!', error);
      }
    }

    fetchAllPatients();
  }, [BASE_URL, auth]);
  return (
    <div className={classes.home}>
      <Header />
      <MainContent />
    </div>
  )
}

export default Home
