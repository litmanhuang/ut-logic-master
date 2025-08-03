import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import fetchStudent from "../fetchStudent";
import ChallengeCard from "../components/ChallengeCard";

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
            <th>challenge 1</th>
            <th>challenge 2</th>
            <th>challenge 3</th>
            <th>challenge 4</th>
            <th>challenge 5</th>
            <th>challenge 6</th>
            <th>challenge 7</th>
            <th>challenge 8</th>
            <th>challenge 9</th>
            <th>challenge 10</th>
            <th>challenge 11</th>
            <th>challenge 12</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.email}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
              <td>
                <ChallengeCard></ChallengeCard>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Student;
