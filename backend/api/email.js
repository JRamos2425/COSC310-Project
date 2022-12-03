import nodemailer from 'nodemailer'

export default class EmailController {
  static async apiEmailNotification(req, res, next){
    try {
      let {email} = req.params

      let senderEmail = 'ramosjasonwork@gmail.com'
      let password = 'izyamaxmnjejnxcv'
    
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderEmail,
          pass: password,
        },
      });

      let cameraNum = 1
      let date = new Date()
      let text = `There has been activity on Camera ${cameraNum} at ${date}`
      // send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: senderEmail, // sender address
      //   to: email, // list of receivers
      //   subject: `Motion Detection (Camera ${cameraNum})`, // Subject line
      //   text: text, // plain text body
      // });
      res.json({ success: info})
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}




