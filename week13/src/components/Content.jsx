import React from 'react'
import { useState } from 'react';
import TabContent from './TabContent';

function Content({tabData, storageWriter }) {
    const [ selectedTab, setSelectedTab] = useState(0);
    const { title, description } = tabData[selectedTab]
    return (
    <>
    <div id='tab-container'>
        {tabData.map(item => <TabContent key={item.key} title={item.title} index={item.key} setFunction={setSelectedTab} storageWriter={storageWriter}/>)}
    </div>

    <div id='content'>
        <div id='content-title'>
            <h2>{title}</h2>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
    </>

  )
}

export default Content