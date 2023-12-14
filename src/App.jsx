import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [students, setStudents] = useState(studentsData);
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [url, setUrl] = useState('')
  const [tel, setTel] = useState('')
 // const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [select, setSelect] = useState('Web Dev')
  const [number, setNumber] = useState(2023)


  const handleSubmit = event => {
    event.preventDefault()
    const newStudentId = uuidv4()
  

  setStudents(students => {
    return [
      ...students,
      {
        _id: newStudentId,
        fullName: fullName,
        email: email,
        url : url,
        number: number,
        select: select,
        tel: tel,
      },
    ]
  })

}
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name"  value={fullName}
            onChange={event => setFullName(event.target.value)}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={url}
            onChange={event => setUrl(event.target.value)}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={tel}
            onChange={event => setTel(event.target.value)}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email}
            onChange={event => setEmail(event.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={select}
            onChange={event => setSelect(event.target.value)}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={number}
            onChange={event => setNumber(event.target.value)}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={checkbox}
            onChange={event => setCheckbox(event.target.value)}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} {...setStudents} />;
        })}
    </div>
  );
}

export default App;
