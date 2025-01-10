import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ButtonPrimary, PageHeader } from "../../components";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { createJobAsync, reset } from "../../slice/createJobSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

const AddNewJob = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error, isSuccess } = useAppSelector(
    (state) => state.createJob
  );

  const initialValues = {
    title: "",
    description: "",
    location: "",
    company: "",
    min_salary: "",
    experience_level: "",
    skills: "",
    type: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    company: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    location: Yup.string().required("This field is required"),
    experience_level: Yup.string().required("This field is required"),
    min_salary: Yup.string().required("This field is required"),
    max_salary: Yup.string().required("This field is required"),
    type: Yup.string().required("This field is required"),
    skills: Yup.string().required("This field is required"),
  });

  const createJobHandler = (values) => {
    console.log(values);
    dispatch(createJobAsync(values));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.JOB_LIST);
    }

    return () => {
      dispatch(reset());
    };
  }, [isSuccess, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <PageHeader title={"Add a new job"} icon={faList} />
      <div className="p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => createJobHandler(values)}
        >
          {() => (
            <Form>
              <div className="flex gap-6">
                <div className="w-[50%]">
                  <label
                    htmlFor="title"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="company"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Company
                  </label>
                  <Field
                    type="text"
                    name="company"
                    id="company"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="w-[100%] min-w-[100%] pt-4">
                <label
                  htmlFor="description"
                  className="block w-full pb-2 text-[16px]"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div className="flex gap-6 pt-6">
                <div className="w-[50%]">
                  <label
                    htmlFor="location"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Location
                  </label>
                  <Field
                    type="text"
                    name="location"
                    id="location"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="experience_level"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Experience Level
                  </label>
                  <Field
                    as="select"
                    name="experience_level"
                    id="experience_level"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  >
                    <option value="">Please Select</option>
                    <option value="fresher">Fresher</option>
                    <option value="mids-senior">Mid-Senior</option>
                    <option value="senior">Senior</option>
                    <option value="team-lead">Team Lead</option>
                    <option value="tech-lead">Tech Lead</option>
                    <option value="project-manager">Project Manager</option>
                  </Field>
                  <ErrorMessage
                    name="experience_level"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="flex gap-6 pt-7">
                <div className="w-[50%]">
                  <label
                    htmlFor="min_salary"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Minimum Salary
                  </label>
                  <Field
                    type="number"
                    name="min_salary"
                    id="min_salary"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="min_salary"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="max_salary"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Maximum Salary
                  </label>
                  <Field
                    type="number"
                    name="max_salary"
                    id="max_salary"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="max_salary"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="flex gap-6 pt-6">
                <div className="w-[50%]">
                  <label
                    htmlFor="skills"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Skills
                  </label>
                  <Field
                    type="text"
                    name="skills"
                    id="skills"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  />
                  <ErrorMessage
                    name="skills"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="type"
                    className="block w-full pb-2 text-[16px]"
                  >
                    Type
                  </label>
                  <Field
                    as="select"
                    name="type"
                    id="type"
                    className="border-2 border-gray-300 p-2 rounded-[6px] w-full"
                  >
                    <option value="">Please Select</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="mt-1 text-sm text-red-500"
                  />
                </div>
              </div>

              <div className="pt-10">
                <ButtonPrimary label={"Submit"} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddNewJob;
