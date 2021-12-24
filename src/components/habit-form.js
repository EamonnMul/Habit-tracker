import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../Pages/context/contex';
import './habit-form.css';

const HabitForm = (props) =>
{
  //variable defined to store the input of the HabitForm
  const [input,setInput] = useState('');
  const [uid, setuid] = useState('')

const handleChange = (e)=>{
  setInput(e.target.value);

}

const values = useContext(AuthContext);

//generates random id;
let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}







useEffect(() => {
  if (values.SignedOut) {
    setuid(null)
    return;
  }else {
    setuid(values.currentUser.uid);
    return;
  }
  
  }, [values])


const handleSubmit = (e) => {
  e.preventDefault();
  props.addToHabits({
    uid: uid,
    id: guid(),
    text: input,
    streak: 0,
    DayCount: 5,
    Days: {
      day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false
    }
    
  });

}


return (
  <div>
  <form onSubmit={handleSubmit}>
  <label> 
   <input className={'form'}
   type='text'
   onChange={handleChange}
   value={input}
   placeholder='new habit :)'
   />
  </label>

  <button className={'btn'} onClick={handleSubmit}>Add Habit</button>

  </form>

  </div>
)
}


export default HabitForm;
