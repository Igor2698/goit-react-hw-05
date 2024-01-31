import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const NewContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .required("Required!")
    .matches(
      /^\+380[0-9]+$/,
      "Phone must start with '+380' and contain only numbers"
    )
    .max(13, "Max is 13 symbols!"),
});

export const ContactForm = ({ addNewContact }) => {
  const handleSubmit = (values, actions) => {
    addNewContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={NewContactSchema}
    >
      <Form className={css.form}>
        <div className={css.nameContainer}>
          {" "}
          <Field className={css.nameForm} type="text" name="name"></Field>
          <ErrorMessage
            className={css.errorNameMsg}
            name="name"
            component="span"
          />
        </div>
        <div className={css.numberContainer}>
          {" "}
          <Field type="tel" className={css.numberForm} name="number"></Field>
          <ErrorMessage
            className={css.errorNumberMsg}
            name="number"
            component="span"
          />
        </div>

        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
