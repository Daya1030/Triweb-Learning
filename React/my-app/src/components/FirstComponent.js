
function FirstComponent(props){

    
    return <div className="modal">
      <h1>{props.owner} Application</h1>
      <p>This is an application for {props.reason}</p>
      <button onClick={props.closeModal}>Close</button>
    </div>
}
export default FirstComponent;