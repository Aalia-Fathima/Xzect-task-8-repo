import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function CollapsibleDiv() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDiv1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDiv2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen0, setIsOpen0] = useState(false);

    const toggleDiv3 = () => {
        setIsOpen0(!isOpen0);
    };
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleDiv4 = () => {
        setIsOpen4(!isOpen4);
    };
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleDiv5 = () => {
        setIsOpen5(!isOpen5);
    };
    return (
        <>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv}>
                    <p>Q. How Can I Take Your Service?</p>
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
                .collapsible-div {
                    border: 1px solid #ccc;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    margin: 20px;
                    padding: 10px;
                    transition: all 0.3s ease-in-out;
                }
                .question {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    padding: 10px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                }
                .answer {
                    padding: 10px;
                    border-top: 1px solid #ccc;
                    margin-top: 10px;
                }
                .toggle-icon {
                    font-size: 20px;
                }
            `}</style>

            </div>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv1}>
                    <p>Q. How does Your Pricing Work?</p>
                    <FontAwesomeIcon icon={isOpen1 ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen1 && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
            .collapsible-div {
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                margin: 20px;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .answer {
                padding: 10px;
                border-top: 1px solid #ccc;
                margin-top: 10px;
            }
            .toggle-icon {
                font-size: 20px;
            }
        `}</style>
            </div>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv2}>
                    <p>Q. How Does Saas Work?</p>
                    <FontAwesomeIcon icon={isOpen2 ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen2 && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
            .collapsible-div {
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                margin: 20px;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .answer {
                padding: 10px;
                border-top: 1px solid #ccc;
                margin-top: 10px;
            }
            .toggle-icon {
                font-size: 20px;
            }
        `}</style>
            </div>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv3}>
                    <p>Q. Are You Ready to take our roofing service?</p>
                    <FontAwesomeIcon icon={isOpen0 ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen0 && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
            .collapsible-div {
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                margin: 20px;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .answer {
                padding: 10px;
                border-top: 1px solid #ccc;
                margin-top: 10px;
            }
            .toggle-icon {
                font-size: 20px;
            }
        `}</style>
            </div>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv4}>
                    <p>Q. How Supply Includes does Your Pricing?
                    </p>
                    <FontAwesomeIcon icon={isOpen4 ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen4 && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
            .collapsible-div {
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                margin: 20px;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .answer {
                padding: 10px;
                border-top: 1px solid #ccc;
                margin-top: 10px;
            }
            .toggle-icon {
                font-size: 20px;
            }
        `}</style>
            </div>
            <div className="collapsible-div">
                <div className="question" onClick={toggleDiv5}>
                    <p>Q. How Long your warranty Work ?</p>
                    <FontAwesomeIcon icon={isOpen5 ? faMinus : faPlus} className="toggle-icon" />
                </div>
                {isOpen5 && (
                    <div className="answer">
                        <p>Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                    </div>
                )}
                <style jsx>{`
            .collapsible-div {
                border: 1px solid #ccc;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                margin: 20px;
                padding: 10px;
                transition: all 0.3s ease-in-out;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
            }
            .answer {
                padding: 10px;
                border-top: 1px solid #ccc;
                margin-top: 10px;
            }
            .toggle-icon {
                font-size: 20px;
            }
        `}</style>
            </div>
        </>
    );
}
