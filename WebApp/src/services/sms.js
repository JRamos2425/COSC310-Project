import http from "../http.common.js"

class SMSDataServices {
  sendNotification(number){
    return http.get(`sms/${number}`)
  }
}

export default new SMSDataServices()