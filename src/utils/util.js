import { redirect } from "react-router-dom";

export const getSelectedPatientFromLocalStorage = () => {
    const person = localStorage.getItem('selected') ? JSON.parse(localStorage.getItem('selected')) : null;

    return person;
}

export const setSelectedPatientInLocalStorage = (person) => {
    localStorage.setItem('selected', JSON.stringify(person));
}

export const protection = () => {
    const selectedPatient = getSelectedPatientFromLocalStorage();
    console.log(selectedPatient);
    if(!selectedPatient){
        return redirect('/')
    }

    return null;
}