// import React, { useState, useEffect, useContext, createContext } from 'react';

// const PatientContext = createContext();


// const PatientProvider = ({ children }) => {
//   const [patients, setPatients] = useState(0); 

  
//   useEffect(() => {
//     console.log(`number of patints is: ${patients}`);
//   }, [patients]); 
  

//   const addPatient = () => {
//     setPatients(patients + 1); 
//   };

//   return (
//     <PatientContext.Provider value={{ patients, addPatient }}>
//       {children}
//     </PatientContext.Provider>
//   );
// };

// const PatientCounter = () => {
//   const { patients } = useContext(PatientContext); 

//   return (
//     <>
//       <h2>number of patients is: {patients}</h2>
  
  
// export default PatientCounter;

// const AddPatient = ()
//   const { addPatient } = useContext(PatientContext); 

//   return 
    
//       <button onClick={addPatient}>increase patient</button>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <PatientProvider>
//       <h1>use React Hooks in order to know number of patients</h1>
//       <PatientCounter />
//       <AddPatient />
//     </PatientProvider>
//   );
// };


