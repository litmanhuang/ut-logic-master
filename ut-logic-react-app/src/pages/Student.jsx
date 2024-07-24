import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import fetchStudent from "../fetchStudent";

const Student = () => {
  const students = useQuery(["students"], fetchStudent);

  if (students.isLoading) {
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
        </Table>
      </div>
    );
  }
  
  const results = students.data;

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
        (
          <tbody>
            {results.map((student) => (
              <tr key={student.id}>
                <td>{student.email}</td>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                <td>{student.id}</td>
              </tr>
            ))}
          </tbody>
        )
      </Table>
    </div>
  );
};

export default Student;
