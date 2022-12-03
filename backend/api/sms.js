let sid = '' //Deprecated
let auth_token = '' //Deprecated
import twilio from "twilio"

export default class SMSController {
  static async apiSMSNotification(req, res, next){
    try {
      let {number} = req.params

      let client = new twilio(sid, auth_token)
      let cameraNum = 1
      let date = new Date()
      let body = `There has been activity on Camera ${cameraNum} at ${date}`
      client.messages.create({
        from: '+19895026920',
        to: number,
        body: body
      })

      res.json({ success: "success"})
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}




