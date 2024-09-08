import { client } from "./sanity";
export const getAllPost = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{postTitle, content,_createdAt,date,"image":cover_image.asset->url,"slug":slug.current,"publisher":publisher->{name,"picture":picture.asset->url}}`
  );
  return posts;
};
