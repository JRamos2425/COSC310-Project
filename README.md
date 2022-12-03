# Video Surveillance System: <br/>**Anomaly Detection** 

The project focuses on analyzing and storing live video feeds from various user cameras. The project retrieves live video footage from one or many cameras, analyzes the footage through OpenCV2 motion and facial recognition. Furthermore, the data is then sent in intervals to the data storage system consisting of an Azure blob storage account and SQL database. Lastly, both the live analyzed footage and stored analyzed footage is retrievable through a user interface built using the React web framework and served through NGINX.

# Project Rationale

There are all kinds of video surveillance systems, and each one is designed for a given environment having features suited to that particular area. Such areas include, commercial use, private household use, corporate use, military use, and personal security/theft. Through technological advancements these systems have become a major lifeline for all fields, not only in general security, but in safety measures as well.

Given the very broad scope of video anomaly detection, choosing to focus on one of these fields allows a more defined audience and features that should be implemented. Choosing a commercial focus, the design will need to handle warehouse or construction type anomalies, from theft protection, to label/facial recognition, and low-light detection. 

# Major Features
1. Ability to **remotely** access the video footage
1. Web Application **hosted** on online servers
1. Video **enhancement**  capabilities ( Night Vision, HD Resolution, etc)
1. Object **Detection**
1. Facial **Recognition**
1. **Backup storage** using a standard database
1. **Optimized** database support using blob storage
1. **Communicate** to the user through various means any anomalies detected

# Integrated API's
1. Azure Database - Improved accessibility and integration of data. Storage Accounts for raw video footage as well as document based databases for motion related flags.
1. OpenCV - Facial Recognition & Motion Detection. Used to analyze raw live footage and determine points of interests to convey to the target user
1. (NEW) Nodemailer SMTP - Notification method utilizing emailing services. Used to communicate to the user through email that a device or live feed has detected some unusual data. Emails would be sent to the user each time an anomaly has started containing the details of the instance such as camera number and date. The user is also able modify their information through a separate account page.
1. (NEW) Twilio SMS - Notification method utilizing Twilio SMS services. Used to communicate to the user through SMS that a device or live feed has detected some unusual data. SMS messages would be sent to the user each time an anomaly has started containing the details of the instance such as camera nubmer and date. The user is also able modify their information through a separate account page.

# Important Links
- [Asana](https://app.asana.com/0/1203173191116974/1203173191116989)
- [Notion](https://www.notion.so/COSC-310-Assignment-2-a1231444458d490299fdbc667d925fc4)
