import "./_spinner.scss";
import React from 'react';
import styled from 'styled-components';

const Spinner = ({ type, backgroundColor, spinnerColor }) => {

    var defaultBackground = "rgba(90, 90, 90, 0.5)";

    const SpinnerBackground = styled.div`
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        background: ${backgroundColor === undefined || backgroundColor.length === 0 ? (defaultBackground) : (backgroundColor)};

        display: flex;
        justify-content: center;
        align-items: center;
    `

    const SpinnerCircle = styled.div`
         div:after{
            background:${spinnerColor === undefined  || spinnerColor.length === 0 ? (defaultBackground) : (spinnerColor)};
        }
    `

    const SpinnerSquare = styled.div`
        
        :nth-child(1) > * {
            background: ${spinnerColor === undefined  || spinnerColor.length === 0 ? (defaultBackground) : (spinnerColor)};
        }
    `

    const renderSwitch = (param) => {
        switch (param) {
            case 'square':
                return (
                    <SpinnerSquare className="spinner">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </SpinnerSquare>
                )
            case 'circle':
                return (
                    <SpinnerCircle className="spinner__circle">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </SpinnerCircle>
                )
            case undefined:
                return (
                    <SpinnerSquare className="spinner">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </SpinnerSquare>
                )
            default:
                return (
                    <p>There is no such type</p>
                );
        }
    }

    return (
        <SpinnerBackground>
            {renderSwitch(type)}
        </SpinnerBackground>

    );
}

export default Spinner;
