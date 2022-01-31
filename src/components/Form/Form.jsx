import React, { useState } from "react";
import "./Form.scss";

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const submitForm = (event) => {
        event.preventDefault();
        // console.log("submit");
        setFormData({ ...formData, name: "", email: "", message: "" });
    };

    const { name, email, message } = formData;

    return (
        <form>
            <div className="first-box-input">
                <div className='row-form'>
                    <div className="name-in">
                        <label className="name">
                            NAME
                        </label>
                        <input className="formInputField"
                            value={name}
                            onChange={e => updateFormData(e)}
                            placeholder=""
                            type="text"
                            name="name"
                            required
                        />
                        <div></div>
                    </div>
                    <div className="name-in email">
                        <label className="name">
                            EMAIL
                        </label>
                        <input className="formInputField"
                            value={email}
                            onChange={e => updateFormData(e)}
                            placeholder=""
                            type="email"
                            name="email"
                            required
                        />
                        {email === "" && <div className="red-requierd">This field is required</div>}
                        <div></div>
                    </div>
                </div>
                <div className="name-in">
                    <label className="name">
                        MESSAGE
                    </label>
                    <input className="formInputField msg"
                        value={message}
                        onChange={e => updateFormData(e)}
                        placeholder=""
                        type="text"
                        name="message"
                        required
                    />
                    <div></div>
                </div>
                <button className='rectangle-4' onSubmit={submitForm} type="submit"><span className="send">
                    SEN
                </span></button>
            </div>

        </form>
    );
};

export default Form;