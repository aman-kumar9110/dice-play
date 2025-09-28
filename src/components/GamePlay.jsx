import React, { useState } from 'react';
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button } from '../styled/Button';

const Gameplay = () => {
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("you havenot selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 1);
        }
        setSelectedNumber(undefined);
    };


    const resetScore = () => {
        setScore(0);
    }
    return (
        <MainContainer>
            <div className='top_section'>
                <Totalscore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <div className='dice-container'>
                <RoleDice currentDice={currentDice} roleDice={roleDice} />
            </div>
            <div className='btns'>
                <Button onClick={resetScore}>Reset</Button>
                <Button>Show Rules</Button>
            </div>
        </MainContainer>
    );
};

export default Gameplay;

const MainContainer = styled.main`
    padding: 70px;
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .dice-container {
        display: flex;
        justify-content: center;
        margin-top: 20px; /* Add margin to center vertically if needed */
    }
`;