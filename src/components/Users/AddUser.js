import React, {useState , useRef} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser=props=>{
   const  nameInputRef=useRef();
   const  ageInputRef=useRef();
    const [enteredUsername, setEnteredUsername]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const [error, setError]=useState()
    const addUserHandler=(event)=>{
        event.preventDefault()
        console.log(nameInputRef)
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        if (+enteredAge<1)
           {setError({
            title: 'Invalid Age',
            message: 'Please enter a valid age'
        })

            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('')
    }
    const usernameChangeHandler=(event)=>{
       setEnteredUsername(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }
    return( 
        <Wrapper>
   {error && <ErrorModal title={error.title} message={error.message}/>}  
    <Card className={classes.input}>
<form onSubmit={addUserHandler}>
  <label htmlFor="username">Username</label>
    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} ref={nameInputRef}/>

    <label htmlFor="age">Age</label>
    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} ref={ageInputRef}/>

    <Button type = "submit">Add User</Button>
</form>

</Card>
</Wrapper>
    )
}

export default AddUser;