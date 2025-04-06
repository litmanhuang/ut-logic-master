import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import fetchStudent from "../fetchStudent";

const Student = () => {
  const { data: students, isLoading: isStudentsLoading } = useQuery(
    ["students"],
    fetchStudent
  );

  if (isStudentsLoading) {
    return (
      <div className="center-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>last name</th>
              <th>first name</th>
            </tr>
          </thead>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Table>
      </div>
    );
  }

  return (
    <div className="center-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>last name</th>
            <th>first name</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.email}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Student;
