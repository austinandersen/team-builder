import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        //const name = event.target.name;
        //const value = event.target.value
        //shorthand for above two lines
        props.change(name, value)
    }

   const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>NAME 
            <input
                placeholder="name"
                value={props.values.name}
                name="name"
                onChange={handleChange}
            />
            </label>    
            <label>EMAIL
                <input 
                    placeholder="Enter your email"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>ROLE 
                <input  
                    placeholder="Enter your role"
                    value={props.values.role}
                    name="role"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create team" />
        </form>
    )
}


export default Form;