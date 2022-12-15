import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Home() {
    const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState

    function onSubmit(e) {
    //fetch with URL
  }
  return (
       <div className="my-8 mx-8">
      <form onSubmit={handleSubmit(onSubmit)} id="reset">
        <div className="py-1">
          <label className="text-gray-600 font-medium" htmlFor="first_name">First Name :</label>
          <div className="py-2">
            <input
              {...register("first_name")}
              name="first_name"
              type="text"
              className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
              id="first_name"
            />
            <div className="text-red-500 ml-2 mt-2">{errors.first_name?.message}</div>
          </div>
        </div>
        <div className="py-1">
          <label className="text-gray-600 font-medium" htmlFor="last_name">
            Last Name :
          </label>
          <div className="py-2">
            <input
              {...register("last_name")}
              name="last_name"
              type="text"
              id="last_name"
              className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
            />
            <div className="text-red-500 ml-2 mt-2">
              {errors.last_name?.message}
            </div>
          </div>
        </div>
        <div className="py-1">
          <label className="text-gray-600 font-medium" htmlFor="email">
            Email :
          </label>
          <div className="py-2">
            <input
              {...register("email")}
              name="email"
              type="text"
              id="email"
              className="text-md  px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
            />
            <div className="text-red-500 ml-2 mt-2">
              {errors.email?.message}
            </div>
          </div>
        </div>
        <div className="py-1">
          <label className="text-gray-600 font-medium" htmlFor="password">
            Password :
          </label>
          <div className="py-2">
            <input
              {...register("password")}
              name="password"
              type="password"
              id="password"
              className="text-md px-2 text-gray-500 border w-[40rem] focus:outline-none focus:border-orange-500 rounded py-1"
            />
            <div className="text-red-500 ml-2 mt-2">
              {errors.password?.message}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="border focus:border-1  focus:outline-none focus:border-green-600 px-5 py-1.5 rounded bg-green-500 text-white font-bold hover:bg-green-600"
        >
          submit
        </button>
      </form>
    </div>
  )
}
