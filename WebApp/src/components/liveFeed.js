import { useRef } from "react"
import EmailDataService from "../services/email.js"

export default function LiveFeed() {
  const videoRef = useRef(null)

  // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
  //   navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
  //     videoRef.current.srcObject = stream
  //     videoRef.current.play()
  //   })
  // }
  EmailDataService.sendNotification('ramosjasonwork@gmail.com')
  return (
    <div data-testid="live-feed" className="container gap-20 space-between fill">
      <div className="main video-player-section">
        <div className="video-player"> 
          <video ref={videoRef} className="video" autoPlay>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

