import React from 'react';
import "./App.css";
import OperationalTasks from "./Dashboards/OperationalTasks";
import { StateServiceProvider } from "./HOC/StateServiceProvider";


const App = () => {
    return (
           <>
               <StateServiceProvider >
               <OperationalTasks />
               </StateServiceProvider>
           </>
    )
}

export default App;
