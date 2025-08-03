import Table from "react-bootstrap/Table";

interface CarnapStudentDTO {
  email: string;
  lastName: string;
  universityId: number | null;
  userId: number;
  firstName: string;
  isAdmin: boolean;
  id: number;
  enrolledIn: number;
  instructorId: number | null;
  isLti: boolean;
}

function AttendanceTable(
  carnapStudents: CarnapStudentDTO[],
  examDates: Date[]
) {
  return (
    <div className="center-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>last name</th>
            <th>first name</th>
          </tr>
        </thead>
        <tbody>
          {carnapStudents?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AttendanceTable;
