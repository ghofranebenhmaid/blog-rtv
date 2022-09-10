import { useParams } from "react-router-dom";
import { BlogData } from "./BlogData";
import styled from "styled-components";

const Card = styled.div`
  padding: 0 30px;

  @media (min-width: 768px) {
    margin-left: calc(-25vw + 50%);
    margin-right: calc(-25vw + 50%);
  }
  h1 {
    font-size: 54px;
    padding: 1.5rem 0;
  }

  figure {
    height: 550px;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
`;

const BlogDetails = () => {
  const { id } = useParams();
  const data = BlogData.filter((data) => data.id === id);
  console.log(data);
  return (
    <div className="container">
      {/* <div className="content"> */}
      <Card>
        <h1>{data[0].title}</h1>
        <p className="body">{data[0].description}</p>
        <figure>
          <img src={data[0].cover} />
        </figure>

        <div className="info">
          <h6>{data[0].createdBy}</h6>
          <small>{data[0].dateCreated}</small>
          <p className="body">{data[0].body}</p>
        </div>
      </Card>
      {/* </div> */}
    </div>
  );
};
export default BlogDetails;
