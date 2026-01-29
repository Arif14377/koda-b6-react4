import { useEffect, useState } from "react"
import { Navbar } from "./Home"

const ContactUs = function({formType}) {
    const [msg, setMsg] = useState([])

    useEffect(()=>{
        const pullData = JSON.parse(localStorage.getItem("data"))
        if(pullData) {
            setMsg(prev=>[...prev, ...pullData])
            localStorage.setItem("message", JSON.stringify(msg))
        } else {
            localStorage.setItem("message", JSON.stringify(msg))
        }
    },[msg])

    const onSubmit = function(event) {
        event.preventDefault()

        const form = new FormData(event.target)
        const obj = Object.fromEntries(form.entries())
        
        if (msg.length < 1) {
            setMsg([obj])
        } else {
            setMsg(prev => [...prev, obj])
        }
    }

    return (
        <>
            <Navbar/>
            <div className="flex gap-15">
                <div>
                    <p>WE'RE HERE TO HELP YOU</p>
                    <h1><span>Discuss</span>Your Chemical Solution Needs</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et necessitatibus quod natus nobis deleniti dignissimos quas veniam fugiat quis illum!</p>
                    <div>
                        <p>Email</p>
                        <p>koda@mail.com</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>021 123456</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                            <InputText id={"name"} label={"Name"} inputName={"name"} placeholder={"Your name..."} />
                            <InputText id={"email"} label={"Email"} inputName={"email"} placeholder={"Your email address..."} />
                            <textarea name="message" id="message" placeholder="Your message..."></textarea>
                            <input type="submit" value="Kirim" />
                    </form>
                </div>
            </div>        
        </>
    )
}

const InputText = function({id, label, inputName, placeholder}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={inputName} placeholder={placeholder} />
        </div>
    )
}


export default ContactUs