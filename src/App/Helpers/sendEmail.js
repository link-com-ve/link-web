import emailjs from 'emailjs-com'

const sendEmail = (e) => {
  console.log(e)

    return emailjs.sendForm('service_gf54npr', 'template_onqau7u', e.target, 'user_bqgtT3sJEGCgwlWMjyl02')
}

export default sendEmail