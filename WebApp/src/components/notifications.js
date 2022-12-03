import { useEffect, useRef, useState} from "react"
import Input from './input.js'
export default function Notifications() {

  const [formData, setUserData] = useState({
    email: "",
    number: "",
  })

  const handleInputChange = (e) => {
    localStorage.setItem(e.target.name, JSON.stringify(e.target.value))
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    let email = JSON.parse(localStorage.getItem('email'));
    let number = JSON.parse(localStorage.getItem('number'))
    if (!email){
      email = ""
    }
    if (!number){
      number = ""
    }
    setUserData({
      email: email,
      number: number,
    })
  })

  return (
    <div className="container center">
      <div className="account">
        <div className="container column">
          <div>
            <p>Notification Settings</p>
          </div>
          <Input
            value={formData.email}
            onChange={handleInputChange}
            type={"text"}
            name={"email"}
            label={"Email Address"}
            error={""}
          />
          <Input
            value={formData.number}
            onChange={handleInputChange}
            type={"text"}
            name={"number"}
            label={"Phone Number"}
            error={""}
          />
        </div>
      </div>
    </div>
  )
}

