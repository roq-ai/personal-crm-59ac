import * as yup from 'yup';

export const relationshipValidationSchema = yup.object().shape({
  user: yup.string().nullable(),
});
