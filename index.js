const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "19ce073@gardividyapith.ac.in",
        pass: 'acaiziszrkukdcgv'
    }
    });

    let mailOptions = {
        from: "19ce073@gardividyapith.ac.in",
        to: "rajakprem967@gmail.com",
        subject : "Testing from NodeMailer",
        text: "Keep Patience." 
        };


transporter.sendMail(mailOptions, (error, response) => {
if (error) {
    console.log(error);
}
else{
    console.log(info.response)
}
});