import emailjs from 'emailjs-com'

const sendEmail = (e) => {
  console.log(e)

    emailjs.sendForm('service_gf54npr', 'template_onqau7u', e.target, 'user_bqgtT3sJEGCgwlWMjyl02')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

export default sendEmail