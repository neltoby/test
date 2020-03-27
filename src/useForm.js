import React,{useState} from 'react';

const UseForm = (callback) => {
    const [inputs, setInput] = useState({});
    const handleInputChange = (e) => {
        e.persist();
        setInput(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
        console.log(inputs);
    }
    const handleSubmit = (e) => {
        if(e){
            e.preventDefault();
            callback();
        }
    }
    return {inputs, handleInputChange, handleSubmit};
};

export default UseForm;