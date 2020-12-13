const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("config");

const refreshToken = config.get("refresh_token");
const clientId = config.get("client_id");
const clientSecret = config.get("client_secret");
const user = config.get("username");
const redirectUri = config.get("redirect_uri");
const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri
);

oAuth2Client.setCredentials({ refresh_token: refreshToken });

const send = async (
  mailTo,
  attachmentPath,
  attachmentName,
  subject = "Hello ✔",
  text = "Hello there",
  html = "<b>Hello there</b>"
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // create reusable transporter object using the default SMTP transport
      const accessToken = await oAuth2Client.getAccessToken();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user,
          clientId, // generated ethereal user
          clientSecret,
          refreshToken,
          accessToken,
        },
      });

      const mailOptions = {
        from: `${config.get("name")} <${config.get("username")}>`,
        to: mailTo, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
        attachments: [
          {
            filename: attachmentName,
            path: attachmentPath,
          },
        ],
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error occured", err);
        } else {
          console.log("Email sent!", data);
        }
      });
      resolve();
    } catch (err) {
      reject("Error occured while sending email");
    }
  });
};

module.exports.send = send;
