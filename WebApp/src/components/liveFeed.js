import { useEffect, useRef } from "react"
import EmailDataService from "../services/email.js"
import SMSDataService from "../services/sms.js"

export default function LiveFeed() {
  const videoRef = useRef(null)

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      videoRef.current.srcObject = stream
      videoRef.current.play()
    })
  }

  useEffect(() => {
    EmailDataService.sendNotification(JSON.parse(localStorage.getItem('email')))
    SMSDataService.sendNotification(JSON.parse(localStorage.getItem('number')))
    videoRef.current.play()
  })
  
  return (
    <div data-testid="live-feed" className="container gap-20 space-between fill">
      <div className="main video-player-section">
        <div className="video-player">
          <video ref={videoRef} className="video" src="demo-video-1.mp4" autoPlay>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

