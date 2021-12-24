import './Modal.css'

function Modal(props) {

    return (
      <div className='modal'>
        <p>{props.text}</p>
        <button onClick={props.cancel} className='btn btn--alt' >
          Cancel
        </button>
        <button onClick={props.yesclick} className='btn' >
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;