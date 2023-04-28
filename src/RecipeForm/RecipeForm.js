import { Formik, Form, Field } from 'formik';
import { FormField } from './RecipeForm.styled';
export const RecipeForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: null,
        servings: null,
        calories: null,
        difficulty: 'easy',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
        </FormField>
        <FormField>
          Time
          <Field type="number" name="time" />
        </FormField>
        <FormField>
          Servings
          <Field type="number" name="servings" />
        </FormField>
        <FormField>
          Calories
          <Field type="number" name="calories" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
