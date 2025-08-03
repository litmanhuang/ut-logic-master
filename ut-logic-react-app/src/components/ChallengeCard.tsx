import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function ChallengeCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          31/03/2025 <Badge bg="success"> valid</Badge>
        </Card.Text>
        <Card.Text>
          Point:2/2 <Badge bg="success">pass</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ChallengeCard;
