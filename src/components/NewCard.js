import React, { useRef } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';
import FormFieldC from './forms/FormFieldC';

const NewCard = () => {
    const [form, setForm] = useState({ title: '', color: '' })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form)
    }
    return (
        <div>
            <form>
                <label htmlFor='title' >Title</label>
                <input id='title' type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                <FormFieldC name="Color" onChange={(e) => setForm({ ...form, color: e.target.value })} value={form.color} type="text" />
                <button onClick={handleSubmit}>add</button>
            </form>
        </div>
    );
}

export default NewCard;