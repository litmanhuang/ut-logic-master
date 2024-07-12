import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    requestStudents();
  },[]);

  async function requestStudents() {
    const res = await fetch("http://localhost:3000/students");
    const json = await res.json();
    setStudents(json);
  }

  return (
    <div className="center-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>email</th>
            <th>last name</th>
            <th>first name</th>
            <th>id</th>
          </tr>
        </thead>

        {students.length === 0 && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {students.length > 0 && (
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.email}</td>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                <td>{student.id}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Student;
