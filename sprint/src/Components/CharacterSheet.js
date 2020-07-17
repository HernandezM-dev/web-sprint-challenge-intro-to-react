import React from "react";
import CharacterCard from './CharacterCard'
import styled from 'styled-components';

const StyledSheet = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CharacterSheet = (props) =>{
    const {characsData} = props
    // console.log(Object.values(characsData));

    return(
        <StyledSheet className='character-sheet'>
            {
                characsData.map(cData =>
                     <CharacterCard cData={cData}/>
                )
            }

        </StyledSheet>
    )
}

export default CharacterSheet;