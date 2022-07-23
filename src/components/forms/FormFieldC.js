import React from 'react';


const FormFieldC = ({ name, value, onChange, type }) => {
    return (
        <>
            <label htmlFor={name} >{name} </label>
            <input id={name} type={type} value={value} onChange={onChange} />
        </>
    );
}

export default FormFieldC;