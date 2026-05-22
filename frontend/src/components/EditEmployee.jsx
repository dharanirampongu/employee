import {useEffect}from 'react'
import { useForm } from 'react-hook-form'
import { useLocation,useNavigate } from 'react-router'
import api from '../api'
function EditEmployee() {
 
  const {
     register,
      handleSubmit,
    formState:{errors},
    setValue
   } = useForm()

    //get empobj from navigate hook
    const { state } = useLocation();
     const navigate = useNavigate();

    useEffect(()=>{
      setValue("name",state.name);
      setValue("email",state.email);
      setValue("mobile",state.mobile);
      setValue("designation",state.designation);
      setValue("companyName",state.companyName);
    }, []);

    //modify the form
    const saveModifiedEmp = async (modifiedEmp) => {
      //make http put req
      const res=await api.put(`/emp-api/employees/${state._id}`,modifiedEmp);
      if(res.status===200){
        //navigate list of users
        navigate("/list");
      }

    }
  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Update Profile</h1>
        <p className="text-slate-500">Modify the employee information below.</p>
      </div>

      <div className="glass-card rounded-3xl p-10 border border-slate-100">
        <form className="space-y-6" onSubmit={handleSubmit(saveModifiedEmp)}>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="input-field"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="input-field"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
              <input
                type="number"
                placeholder="Mobile"
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
                placeholder="Designation"
                {...register("designation")}
                className="input-field"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                {...register("companyName")}
                className="input-field"
              />
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full btn-primary py-4 text-lg">
              Save Changes
            </button>
            <button 
              type="button" 
              onClick={() => navigate("/list")}
              className="w-full mt-4 text-slate-500 font-medium hover:text-slate-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee