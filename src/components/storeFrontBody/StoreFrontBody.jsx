import React from 'react'
import './storeFrontBody.css';
import { StoreFrontLinks } from '../../components';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';



const StoreFrontBody = () => {
    const [showMustHave, setShowMustHave] = useState(false);
    // const [showKitchen, setShowKitchen] = useState(false);
    // const [showDupes, setShowDupes] = useState(false);
    const [showHygiene, setShowHygiene] = useState(false);
    const [showMakeUp, setShowMakeUp] = useState(false);
    const [showGiftIdeasForHim, setShowGiftIdeasForHim] = useState(false);

    function handleMustHaveClick() {
        setShowMustHave(!showMustHave);
    }
    // function handleKitchenClick() {
    //     setShowKitchen(!showKitchen);
    // }
    // function handleDupesClick() {
    //     setShowDupes(!showDupes);
    // }
    function handleHygieneClick() {
        setShowHygiene(!showHygiene);
    }
    function handleMakeUpClick() {
        setShowMakeUp(!showMakeUp);
    }
    function handleGiftIdeasForHimClick() {
        setShowGiftIdeasForHim(!showGiftIdeasForHim);
    }

    return (
        <div className='mydearest__storefrontbody'>
            <h1>Welcome to my Amazon StoreFront</h1>
            <h3>Hey! thanks for stopping by! Here you will find all my favorite things, most are from my videos. Have Fun shopping!</h3>
            <div className='mydearest__storefrontbody-container'>
                    <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleMustHaveClick}>
                            <h4>Must Haves</h4>
                            {/* {showMore ? 'Hide' : 'Show'} */}
                            {showMustHave ? 'Hide ' : 'Show '}
                            {showMustHave && <StoreFrontLinks name='mustHaveData' />}
                            {/* {mustHave ? <StoreFrontMustHave mustHaveImage={mustHaveImage}/> : <StoreFrontMustHave />} */}
                        </button>
                    </div>
                    <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleMakeUpClick}>
                            <h4>MakeUp</h4>
                            {showMakeUp ? 'Hide ' : 'Show '}
                            {showMakeUp && <StoreFrontLinks name='makeUpData'/>}
                        </button>
                    </div>
                    {/* <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleDupesClick}>
                            <h4>Dupes</h4>
                            {showDupes ? 'Hide ' : 'Show '}
                            {showDupes && <StoreFrontLinks name='mustHaveData'/>}
                        </button>
                    </div> */}
                    <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleHygieneClick}>
                            <h4>Hygiene</h4>
                            {showHygiene ? 'Hide ' : 'Show '}
                            {showHygiene && <StoreFrontLinks name='hygieneData'/>}
                        </button>
                    </div>
                    {/* <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleKitchenClick}>
                            <h4>Kitchen</h4>
                            {showKitchen ? 'Hide ' : 'Show '}
                            {showKitchen && <StoreFrontLinks name='mustHaveData'/>}
                        </button>
                    </div> */}
                    <div className='mydearest__storefrontbody-container_card'>
                        <button onClick={handleGiftIdeasForHimClick}>
                            <h4>Gift Ideas for him</h4>
                            {showGiftIdeasForHim ? 'Hide ' : 'Show '}
                            {showGiftIdeasForHim && <StoreFrontLinks name='giftGuideForHimData'/>}
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default StoreFrontBody