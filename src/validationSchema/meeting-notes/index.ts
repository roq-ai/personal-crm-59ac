import * as yup from 'yup';

export const meetingNoteValidationSchema = yup.object().shape({
  date: yup.date().nullable(),
  user: yup.string().nullable(),
});
