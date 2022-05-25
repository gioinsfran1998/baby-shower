import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, '* Nombre muy corto.')
    .max(50, '* Nombre demasiado largo')
    .required('* Complete el campo'),
  lastName: Yup.string()
    .min(3, '* Apellido muy corto.')
    .max(50, '* Apellido demasiado largo')
    .required('* Complete el campo'),
  phoneNumber: Yup.number()
    .typeError('* Debe ser de tipo númerico')
    .nullable(true)
    .positive('* Numero invalido')
    .integer('* Numero invalido')
    .min(9, '* Numero muy corto')
    .required('* Complete el campo')
});
