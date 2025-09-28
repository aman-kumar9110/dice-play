import React from 'react'
import styled from 'styled-components';

const Totalscore = ({ score }) => {
    return (
        <div>
            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score</p>
            </ScoreContainer>
        </div>
    )
}

export default Totalscore;
const ScoreContainer = styled.div`
    
max-width:220px;
text-align:center;
    h1 {
        font-size: 100px;
        color: #333;


    }

    p {
        font-size: 24px;
        font-weight: 500; /* Fixed font-weight */
        color: #555;
    }
`;
