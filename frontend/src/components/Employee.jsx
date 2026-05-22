import { useLocation, useNavigate } from "react-router";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return null;

  return (
    <div className="max-w-2xl mx-auto py-12">
      <button 
        onClick={() => navigate("/list")}
        className="mb-8 text-slate-500 hover:text-emerald-600 flex items-center gap-2 transition-colors font-medium"
      >
        ← Back to List
      </button>

      <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
        <div className="h-32 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
        <div className="px-10 pb-12">
          <div className="-mt-16 flex justify-center mb-8">
            <div className="w-32 h-32 bg-white rounded-3xl p-2 shadow-xl">
              <div className="w-full h-full bg-emerald-100 rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-emerald-600">{state.name.charAt(0)}</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{state.name}</h1>
            <p className="text-lg font-medium text-emerald-600">{state.designation}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</p>
              <p className="text-lg font-medium text-slate-700">{state.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</p>
              <p className="text-lg font-medium text-slate-700">{state.mobile || "Not specified"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Company</p>
              <p className="text-lg font-medium text-slate-700">{state.companyName || "Internal"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Employment Status</p>
              <p className="text-lg font-medium text-emerald-600">Active</p>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <button 
              onClick={() => navigate("/edit-emp", { state })}
              className="flex-1 btn-primary py-4"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
