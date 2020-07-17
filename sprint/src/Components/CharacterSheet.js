import React from "react";

const CharacterSheet = (props) =>{
    const {characsData} = props
    console.log(characsData);

    return(
        <div className='character-sheet'>
            <h3>List of Characters</h3>
            {
                characsData.map(cData =>{
                     
                })
            }

        </div>
    )
}

export default CharacterSheet;