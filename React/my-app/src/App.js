import FirstComponent from './components/FirstComponent'
import Backdrop from './components/Backdrop'
import { useState } from "react";

function App() {
  const [modalopen, setModalOpen] = useState(false);

  const modalcloseHandler = ()=>{
    setModalOpen(false);
  }

  const openModalHandler = ()=> {
    setModalOpen(true);
  }

  return (
   <div>
      <h1>Its my application</h1>
      {modalopen?<FirstComponent owner="Daya" reason="For Demo" closeModal={modalcloseHandler}/>:null}
      {modalopen?<Backdrop />:null}
      <button onClick={openModalHandler}>Open Modal</button>
    </div> 
  );
}

export default App;
