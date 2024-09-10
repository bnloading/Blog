import { useRouter } from "next/router";
import Layout from "components/layout";

import { Row, Col } from "react-bootstrap";

import { getAllPost, getPostBySlug } from "lib/api";

export default ({ post }) => {
  return (
    <Layout>
      <Row>
        <Col md="12">
          {<pre>{JSON.stringify(post.maincontent, null, 2)}</pre>}
          <div className="blog-detail-header">
            <p className="lead mb-0">
              <img
                src={post.publisher.picture}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
              />
              {post.publisher.name} {post.date}
            </p>

            <h1 className="font-weight-bold blog-detail-header-title mb-0">
              {post.postTitle}
            </h1>

            <h2 className="blog-detail-header-subtitle mb-3">{post.content}</h2>

            <img className="img-fluid rounded" src={post.image} alt="" />
          </div>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};
export const getStaticPaths = async () => {
  const posts = await getAllPost();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
    // basqada betterdi korsetpeid 404 error shigarad
  };
};
