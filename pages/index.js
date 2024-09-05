import { Container, Row, Col, Navbar, Image, Card, Nav } from "react-bootstrap";
import ImageNext from "next/image";
import MyNavbar from "@/components/my-navbar";
export default function Home() {
  return (
    <div className="">
      <Container>
        <MyNavbar />

        <div className="blog-detail-page">
          <Row>
            <Col md="8">
              <Card className="mb-4 admin-intro">
                <Row noGutters>
                  <Col md={2}>
                    <Image
                      roundedCircle
                      width={64}
                      height={64}
                      className="mr-3 "
                      src="logo.jpg"
                      alt="Generic placeholder"
                    />
                  </Col>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title className="font-weight-bold mb-0">
                        Blog Website
                      </Card.Title>
                      <Card.Text className="welcome-text">
                        fdsfhsk pifghg p hgifdphg fipghpfdg podfhgghp pohgdfp hg
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <hr />

        <div className={`page wrapper`}>
          <Row className="mb-5">
            <Col mb="10">
              <Card className={`fj-card fj-card-list`} />
              <Card className="fj-card fj-card-list">
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <ImageNext
                      src={require("../public/logo.jpg")}
                      className="rounded-circle mr-5"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Бахытжан Нур
                      </Card.Title>
                      <Card.Text className="card-date">
                        2024 жыл Қыркүйек 5
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img src="logo.jpg" alt="Card image cap" />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Jamstack
                    </Card.Title>
                    <Card.Text>Статик</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col mb="4">
              <Card className={`fj-card`} />
              <Card className="fj-card fj-card-list">
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <ImageNext
                      src={require("../public/logo.jpg")}
                      className="rounded-circle mr-5"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Бахытжан Нур
                      </Card.Title>
                      <Card.Text className="card-date">
                        2024 жыл Қыркүйек 5
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img src="logo.jpg" alt="Card image cap" />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Jamstack
                    </Card.Title>
                    <Card.Text>Статик</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col mb="4">
              <Card className={`fj-card`} />
              <Card className="fj-card fj-card-list">
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <ImageNext
                      src={require("../public/logo.jpg")}
                      className="rounded-circle mr-5"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Бахытжан Нур
                      </Card.Title>
                      <Card.Text className="card-date">
                        2024 жыл Қыркүйек 5
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img src="logo.jpg" alt="Card image cap" />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Jamstack
                    </Card.Title>
                    <Card.Text>Статик</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col mb="4">
              <Card className={`fj-card`} />
              <Card className="fj-card fj-card-list">
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <ImageNext
                      src={require("../public/logo.jpg")}
                      className="rounded-circle mr-5"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Бахытжан Нур
                      </Card.Title>
                      <Card.Text className="card-date">
                        2024 жыл Қыркүйек 5
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img src="logo.jpg" alt="Card image cap" />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Jamstack
                    </Card.Title>
                    <Card.Text>Статик</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        <footer className="page-footer">
          <div>
            <a href="#">Негізгі бет</a>
            {"|"}
            <a href="#">Кусртар</a>
            {"|"}
            <a href="#">Желі</a>
          </div>
        </footer>
      </Container>
    </div>
  );
}
