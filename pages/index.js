import GridItem from "@/components/gridItem";
import Intro from "@/components/intro";
import ListItem from "@/components/listItem";
import MyNavbar from "@/components/my-navbar";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";
import { getAllPost } from "@/lib/api";

export default function Home({ posts }) {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="12">
            <Intro />
          </Col>
        </Row>
        <pre>{JSON.stringify(posts, null, 2)}</pre>

        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <ListItem />
            </Col>
            {posts.map((post) => (
              // eslint-disable-next-line react/jsx-key
              <Col md="4">
                <GridItem post={post} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
}
export const getStaticProps = async () => {
  const posts = await getAllPost();
  return {
    props: {
      posts,
    },
  };
};
