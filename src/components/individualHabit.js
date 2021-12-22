import React , {useState, useEffect} from 'react'
import classes from './habit.module.css';


function IndividualHabit(props) {
   
    
    const [state, setstate] = useState(props.val)
    const handleClickDay = () => {
        setstate(!state);
        props.ChangeDay(props.habit)

    }


    

 

    if (props.habit !== 'id' && props.habit !== 'text' && props.habit !== 'uid' && props.habit !== 'DayCount') {
        return (
            <div
            className={state? classes.tableCell:classes.tableCellDefault}
            onClick={handleClickDay}>
              
                  <p>{props.habit}</p>
              
                
            </div>
        )
        
    }
    else {
        return null
    }
    
}

export default IndividualHabit
