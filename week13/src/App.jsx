import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'


function App() {
    const tabData = [{key : 0, title : 'TAB1', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iure incidunt dignissimos voluptatum similique vero impedit quasi ratione aliquid omnis magni obcaecati expedita, explicabo libero tempora, perferendis ullam possimus fugiat?'},
    {key : 1, title : 'TAB2', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iure incidunt dignissimos voluptatum similique vero impedit quasi ratione aliquid omnis magni obcaecati expedita, explicabo libero tempora, perferendis ullam possimus fugiat?'},
    {key : 2, title : 'TAB3', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iure incidunt dignissimos voluptatum similique vero impedit quasi ratione aliquid omnis magni obcaecati expedita, explicabo libero tempora, perferendis ullam possimus fugiat?'},
    {key : 3, title : 'TAB4', description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iure incidunt dignissimos voluptatum similique vero impedit quasi ratione aliquid omnis magni obcaecati expedita, explicabo libero tempora, perferendis ullam possimus fugiat?'}
  ];

  const readLocalStorage  = () => {
    let temp;
    localStorage.length ? temp = localStorage.getItem('currentTab') :  temp  = 0; 
    return temp;   
    }

    const writeLocalStorage = (value) =>{
      localStorage.setItem('currentTab', value);
      tabData.forEach(tab => tab.isActive = false);
      tabData[value].isActive = true;
    }
  return (
    <>
    <Header tabData={tabData}/>
    <Content tabData={tabData} storageWriter={writeLocalStorage} storageReader={readLocalStorage} />
    </>
  )
}


export default App;
