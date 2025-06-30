import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'


function App() {
    const tabData = [{key : 0, title : 'TAB 1', header : 'Content 1' , description : "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard placeholder ever since the 1500s, when an unknown printer scrambled a galley of type to make a type specimen book."},
    {key : 1, title : 'TAB 2', header : 'Content 2' , description : "This placeholder text is often used to demonstrate the visual form of a document without relying on meaningful content. Designers use it to focus on layout and typography rather than the distraction of readable English."},
    {key : 2, title : 'TAB 3', header : 'Content 3' , description : "While the words may look structured, they have no real meaning. The goal is purely visual—to fill space, test fonts, and preview how the final design will appear once actual content is inserted later."},
    {key : 3, title : 'TAB 4', header : 'Content 4' , description : "Dummy text like this helps simulate a finished product during the early stages of a project. It gives clients, developers, and designers a better idea of the overall balance and appearance before the real copy is ready."}
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
