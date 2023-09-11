import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentsDeets = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        firstName:'',
        lastName:'',
        class:'',
        age:''
    })

    const inputfunc = (e) => {
        setInput({...input, [e.target.name]:e.target.value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const dataForm = {
             firstName:input.firstName,
             lastName:input.lastName,
             class:input.class,
             age:input.age
        }

        const response = await fetch(`https://student-s-table-default-rtdb.firebaseio.com/students.json`, {
            method:"POST",  
            body : JSON.stringify(dataForm), 
            headers:{'Content-Type':'application/json'}
        }).then (() => {
            navigate('/data')
        })

        // if(!response.ok) {alert ('something went wrong')}
    
        
    }

    return ( 
        <div>
            <form className="fullform" onSubmit={handleSubmit}>

                <div className="inputBox mt-4"> <input className= "" name="firstName"  value={input.firstName}  onChange={inputfunc} />   <span> FirstName</span></div>
                <div className="inputBox mt-4"> <input className="" name="lastName"  value={input.lastName}  onChange={inputfunc} />  <span> LastName</span></div> 
                <div className="inputBox mt-4"> <input className="" name="class"  value={input.class}  onChange={inputfunc} />  <span> Current Class </span></div>
               <div className="inputBox mt-4">  <input className="" name="age"  value={input.age} onChange={inputfunc} />  <span> Age</span> </div>

                <button className="sub-button" type="submit"> Submit </button>
            </form>


        </div>
     );
}
 
export default StudentsDeets;