import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
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
    let res = await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
    if (res.status === 200) {
      //get latest emps data
      getEmps();
    }
  }
  //get all employees
  async function getEmps() {
    let res = await axios.get("http://localhost:4000/emp-api/employees");
    if (res.status === 200) {
      let resObj = res.data;
      setEmps(resObj.payload);
    }
  }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center">List of Employees</h1>
      <div className="bg-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-2xl rounded-5xl shadow-olive-700 w-full mx-auto">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-2">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buutons*/}
            <div className="flex justify-around w-full mx-auto  text-1xl flex gap-2 flex-wrap">
              <button onClick={() => gotoEmployee(empObj)} className="bg-green-500 rounded text-white text-1xl p-2 mr-2 ">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-blue-500  rounded text-white text-1xl p-2 mr-2">Edit</button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-500 rounded text-white text-1xl p-2 mr-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;