import Table from "react-bootstrap/Table";

const Student = () => {
  const studentsArray = [
    {
      email: "alexdhendro@gmail.com",
      lastName: "Jegorova",
      firstName: "Alexandra",
      id: 10649,
    },
    {
      email: "czdark01@gmail.com",
      lastName: "Srajer",
      firstName: "Matej",
      id: 25486,
    },
    {
      email: "oles.sahan21@gmail.com",
      lastName: "Sahan",
      firstName: "Oles",
      id: 25502,
    },
    {
      email: "annette.hermakula@gmail.com",
      lastName: "Hermaküla",
      firstName: "Annette Maria",
      id: 25539,
    },
    {
      email: "vitushchanka@gmail.com",
      lastName: "Vituščanka",
      firstName: "Paulina",
      id: 25540,
    },
    {
      email: "kadri44275@gmail.com",
      lastName: "Roosmaa",
      firstName: "Kadri",
      id: 25541,
    },
    {
      email: "aleksander.nigesen@gmail.com",
      lastName: "Nigesen",
      firstName: "Aleksander Amos",
      id: 25543,
    },
    {
      email: "sofja.kissina@gmail.com",
      lastName: "Kissina",
      firstName: "Sofja",
      id: 25544,
    },
    {
      email: "maria.rohu@gmail.com",
      lastName: "Rõhu",
      firstName: "Maria",
      id: 25545,
    },
  ];
  const firstStudent = studentsArray[0];
  const headerKeys = Object.keys(firstStudent);

  return (
    <div className="center-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {headerKeys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsArray.map((student) => (
            <tr key={student.id}>
              <td>{student.email}</td>
              <td>{student.lastName}</td>
              <td>{student.firstName}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Student;
