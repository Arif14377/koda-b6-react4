import { useEffect, useState } from "react"
import { Navbar } from "./Home"
import { InputText } from "../components/InputText"

const ContactUs = function() {

    const [msg, setMsg] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem("message"))
        if (saved) {
            setMsg(saved)
        }
        setIsLoad(true)
    }, [])

    useEffect(() => {
        if (!isLoad) {
            return
        }
        localStorage.setItem("message", JSON.stringify(msg))
    }, [msg])

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
            <div className="flex gap-15 [&>div]:w-1/2 px-8 py-15">
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
                            <div className="flex flex-col gap-4">
                                <textarea className="border w-4/5 h-20" name="message" id="message" placeholder="Your message..."></textarea>
                                <input className="w-fit px-4 py-2 bg-amber-400 rounded" type="submit" value="Kirim" />
                            </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center px-8 py-15 w-full">
                <table className="w-2/3">
                    <thead>
                        <tr className="[&>td]:border [&>td]:border-gray-300 [&>td]:p-2 bg-orange-300">
                            <td>No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Message</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        msg ? msg.map((el, idx) => {
                            return (<tr className="[&>td]:border [&>td]:border-gray-300 [&>td]:p-2">
                                <td>{idx+1}</td>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.message}</td>
                                {console.log(el.name, el.email, el.message)}
                            </tr>)
                        }) : console.log("data kosong")
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactUs