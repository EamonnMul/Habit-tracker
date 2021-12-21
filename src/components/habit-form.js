import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../Pages/context/contex';

const HabitForm = (props) =>
{
  //variable defined to store the input of the HabitForm
  const [input,setInput] = useState('');
  const [uid, setuid] = useState('')

const handleChange = (e)=>{
  setInput(e.target.value);

}

const values = useContext(AuthContext);

//console.log( values.currentUser.uid);



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
    id:Math.floor(Math.random()*10000),
    text: input,
    DayCount: 5,
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false
  });

}


return (
  <div>
  <form onSubmit={handleSubmit}>
  <label> 
   <input
   type='text'
   onChange={handleChange}
   value={input}
   placeholder='new habit :)'
   />
  </label>

  <button onClick={handleSubmit}>Add Habit</button>

  </form>

  </div>
)
}


export default HabitForm;
