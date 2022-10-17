import React from 'react'
import PresentPie from './PieChart/HealthPieChart/PresentPie';
import ProspectivePie from './PieChart/HealthPieChart/ProspectivePie';

const Countries = () => {
    return ( 
        <>
            <PresentPie />
            <ProspectivePie />
        </>
     );
}
 
export default Countries;