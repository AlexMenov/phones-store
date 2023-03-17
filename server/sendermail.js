const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "menovlex@mail.ru",
    pass: "m5Ybk5KEydSVGn5xUthz",
  },
});

const sendmail = (to, orderId, date, paymentMethod, order, totalPrice) => {
  const orderList = order.map((item) => {
    return `\n${item.name} * ${item.quantity} = $${item.price * item.quantity}.00`;
  });
  const mailOptions = {
    from: "menovlex@mail.ru",
    to,
    subject:
      "Ваш заказ в интернет-магазине Online Store № " + orderId + " от " + date,
    text: `\nВыбранный способ оплаты: ${paymentMethod}. 
    \nСостав заказа: ${orderList}
    \n-----------------------------
    \nОбщая стоимость: $${totalPrice}.00`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendmail };
