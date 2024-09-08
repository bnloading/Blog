import { Container, Row, Col, Navbar, Image, Card, Nav } from "react-bootstrap";
export default () => {
  <Card className="mb-4 admin-intro" style={{ border: "0px solid #ddd" }}>
    <Row noGutters style={{ border: "0px solid white", marginRight: 210 }}>
      <Col md={2}>
        <Image
          roundedCircle
          width={64}
          height={64}
          style={{ marginTop: 10, marginLeft: 10 }}
          src="logo.jpg"
          alt="Generic placeholder"
        />
      </Col>
      <Col md={10}>
        <Card.Body
          style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            border: "0px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <Card.Title className="font-weight-bold mb-0">
            Blog Website
          </Card.Title>
          <Card.Text className="welcome-text">
            fdsfhsk pifghg p hgifdphg fipghpfdg podfhgghp pohgdfp hg
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>;
};
