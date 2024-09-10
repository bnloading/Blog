import { Row, Col } from "react-bootstrap";
import GridItem from "components/gridItem";
import { getAllPost } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";

export default function Home({ posts }) {
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      <pre>{/*JSON.stringify(posts, null, 2)*/}</pre>
      <Row className="mb-5">
        {posts.map((post) => (
          <Col md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
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
