import { Container, Row, Col, Navbar, Image, Card, Nav } from "react-bootstrap";
import ImageNext from "next/image";
import Link from "next/link";
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ post }) => {
  return (
    <Card className="fj-card fj-card-list">
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Card.Img
            src={post.publisher.picture}
            className="rounded-circle mr-5"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {post.publisher.name}
            </Card.Title>
            <Card.Text className="card-date">{post.date}</Card.Text>
          </div>
        </Card.Header>
        <Link href={`/${post.slug}`} passHref>
          <div className="view overlay">
            <Card.Img
              src={post.image}
              className="rounded-circle mr-5"
              alt="image-cap"
            />
          </div>
          <Card.Body>
            <Card.Title className="card-main-title">
              {post.postTitle}
            </Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Link>
      </div>
    </Card>
  );
};
