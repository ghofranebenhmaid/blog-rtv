import BlogList from "./BlogList";
import IBlog from "../interface";
import { BlogData } from "./BlogData";
import styled from "styled-components";

const Wrapper = styled.div`
  gap: 3rem;
  margin: 0 2rem;
  @media (min-width: 568px) {
    columns: 3 350px;
  }
`;

const Blog = () => {
  return (
    <div className="container">
      <Wrapper>
        {BlogData.map((data: IBlog) => (
          <BlogList key={data.id} data={data} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Blog;
