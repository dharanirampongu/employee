import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../api";

function CreateEmp() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await api.post("/emp-api/employees", newEmpObj);

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Add New Employee</h1>
        <p className="text-slate-500">Enter the details below to register a new team member.</p>
      </div>

      <div className="glass-card rounded-3xl p-10 border border-slate-100">
        <form className="space-y-6" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="input-field"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="name@mail.com"
                {...register("email", { required: "Email is required" })}
                className="input-field"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
              <input
                type="number"
                placeholder="+91"
                {...register("mobile")}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Designation</label>
              <input
                type="text"
                placeholder="Enter your designation"
                {...register("designation")}
                className="input-field"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
              <input
                type="text"
                placeholder="Name of the company"
                {...register("companyName")}
                className="input-field"
              />
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full btn-primary py-4 text-lg">
              Create Employee Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;