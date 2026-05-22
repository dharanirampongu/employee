import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from '../api';
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/employee", { state: empObj });
  }
  const gotoEditEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp", { state: empObj });
  }
  //delete emp
  const deleteEmpById = async (id) => {
    let res = await api.delete(`/emp-api/employees/${id}`)
    if (res.status === 200) {
      //get latest emps data
      getEmps();
    }
  }
  //get all employees
  async function getEmps() {
    let res = await api.get("/emp-api/employees");
    if (res.status === 200) {
      let resObj = res.data;
      setEmps(resObj.payload);
    }
  }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">List Of Employees</h1>
          <p className="text-slate-500">Manage and view all registered team members in one place.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => navigate("/create-emp")} className="btn-primary flex items-center gap-2">
            Add Employee
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emps.map((empObj) => (
          <div key={empObj._id} className="glass-card rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-emerald-600">{empObj.name.charAt(0)}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">{empObj.name}</h2>
            <p className="text-emerald-600 font-medium mb-4">{empObj.designation}</p>
            
            <div className="space-y-3 mb-8 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span> {empObj.email}
              </div>
              <div className="flex items-center gap-2">
                <span>🏢</span> {empObj.companyName}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button 
                onClick={() => gotoEmployee(empObj)} 
                className="flex-1 px-4 py-2 rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors font-semibold"
              >
                Profile
              </button>
              <button 
                onClick={() => gotoEditEmployee(empObj)} 
                className="flex-1 px-4 py-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors font-semibold"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteEmpById(empObj._id)} 
                className="px-4 py-2 rounded-xl text-red-500 bg-red-50 hover:bg-red-100 transition-colors"
                title="Delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {emps.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-lg">No employees found in the directory.</p>
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;