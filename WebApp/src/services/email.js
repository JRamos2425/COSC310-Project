import http from "../http.common.js"

class EmailDataService {
  sendNotification(email){
    return http.get(`email/${email}`)
  }
}

export default new EmailDataService()