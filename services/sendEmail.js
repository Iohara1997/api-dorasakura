const AWS = require("aws-sdk");

AWS.config.update(SES_CONFIG);
// Create createReceiptFilter params
const params = {
  Destination: {
    ToAddresses: ["iohara.pereira@hotmail.com"],
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: "HTML_FORMAT_BODY",
      },
      Text: {
        Charset: "UTF-8",
        Data: "TEXT_FORMAT_BODY",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test amail",
    },
  },
  Source: "iohara.ferreira@outlook.com",
  ReplyToAddresses: ["iohara.ferreira@outlook.com"],
  ReturnPath: "iohara.ferreira@outlook.com",
};

const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .sendEmail(params)
  .promise();

sendPromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
