import React, {useEffect} from 'react';
import {TheTeamContainer} from "./TheTeamCard.styles";
import { projectInfo } from "../../data/mock-data";



const TheTeamCard = () => {
  
    //const {openings} = projectInfo;
    useEffect(() => {
      console.log(projectInfo.openings)
    }, [])
    
   
    return (
    <TheTeamContainer>
        <h3>The Team</h3>
        <h4>What do we need?</h4>
        {projectInfo.openings.map((opening, i) => {
            return (
                <div key={i}>{opening.position}</div>
            )
        })}
    </TheTeamContainer>
  )
}

export default TheTeamCard