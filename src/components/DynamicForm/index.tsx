import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";

interface FormFieldConfig {
  id: string;
  type: string;
  placeholder?: string;
  initialValue: any;
  label?: string;
  options?: string[];
  component?: string;
  visibleWhen?: (values: any) => boolean;
  validationSchema?: Yup.AnySchema;
}

interface FormSectionConfig {
  id: string;
  title: string;
  fields: FormFieldConfig[];
}

type FormConfig = FormSectionConfig[];

// Helper function to build the Yup validation schema
const buildValidationSchema = (
  formConfig: FormConfig
): Yup.ObjectSchema<any> => {
  let schemaFields: { [key: string]: Yup.AnySchema } = {};
  formConfig.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.validationSchema) {
        schemaFields[field.id] = field.validationSchema;
      }
    });
  });
  return Yup.object().shape(schemaFields);
};

// DynamicForm component
interface DynamicFormProps {
  formConfig: FormConfig;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig }) => {
  const initialValues = formConfig.reduce((acc, section) => {
    section.fields.forEach((field) => {
      acc[field.id] = field.initialValue;
    });
    return acc;
  }, {} as { [key: string]: any });

  const validationSchema = buildValidationSchema(formConfig);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }: FormikHelpers<any>) => {
        // Handle form submission
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values }) => (
        <Form>
          {formConfig.map((section) => (
            <div key={section.id}>
              <h3>{section.title}</h3>
              {section.fields.map((field) => {
                if (!field.visibleWhen || field.visibleWhen(values)) {
                  return (
                    <div key={field.id}>
                      <Field
                        name={field.id}
                        {...field}
                        as={field.component || "input"}
                      />
                      <ErrorMessage name={field.id} component="div" />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
