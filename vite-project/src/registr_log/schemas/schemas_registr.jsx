import * as yup from 'yup'
const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
export const registrschema=yup.object().shape({
    email:yup.string()
    .email('email daxil edin.')
    .required('Məlumat daxil edin.'),
    age:yup.number()
    .positive('yaşınızı daxil edin')
    .integer('tam sayı daxiledin')
    .required('yaşınızı daxil edin.'),
    password:yup.string().min(5,'minimum 5 xarakter daxil edin')
    .matches(passwordRules,{
        message:'ən az 1 böyük,1 kiçik hərf və rəqəm girin.' 
    })
    .required('şifrə daxil edin.')



})
