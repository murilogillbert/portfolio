import { createTransport } from "nodemailer"

const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth:{
        user:"7566ef001@smtp-brevo.com",
        pass:"OZIT6pbxvtPNkc8g",
    },
})

async function main(){

    const info = await transporter.sendMail({
        from:'"Rosanna Simonis" <rosanna.simonis24@ethereal.email>',
        to:"murilogillbert@gmail.com",
        subject:"Hello",
        text: "Hello world",
        html: "<b>Hello World?</b>"
    })    

    console.log("Message sent: %s",info.messageId)
}

main().catch(console.error)