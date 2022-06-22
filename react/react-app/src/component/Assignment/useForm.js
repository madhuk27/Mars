import React, {useEffect, useState} from 'react';
import validation from './Assignment/Validation';

const useForm = (submitForm) =>{

const [values, setValues] = useState({
        FullName: "",
        Email: "",
        Password: "",
    })
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);

    return(handleChange, handleFormSubmit, errors, values)
  }
  export default useForm;
// const handleReset = (e) => {
//     e.preventDefault();
//     setState(prevState => ({
//         ...prevState,
//         name: '',
//         email: '',
//         password: ''
//     }))
// }