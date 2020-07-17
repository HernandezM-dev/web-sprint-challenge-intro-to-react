import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
    /* margin: 1%; */
    border-color: Lime;
    border-style: solid;
    /* border-radius: 15%; */
    background-color: black;
    color: white;
    

    img {
        border-radius: 15%;
        width: 90%;
        height: 65%;
        padding-top: 5%
    }
`
const StyledDetails = styled.div`
    display: flex;
    justify-content: space-around
`


const CharacterCard = props =>{

    const {cData} = props
    /* console.log(cData) */

    return(
        <StyledCard className='character-card'>
            <img src={cData.image}/>
            <h4>{cData.name}</h4>
            <StyledDetails className='character-details'>
                <p>{cData.species}</p>
                <p>{cData.gender}</p>
                <p>{cData.status}</p>
            </StyledDetails>
        </StyledCard>
    )
}

export default CharacterCard

{/* name, status, species, type, image */}