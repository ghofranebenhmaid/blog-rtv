import IBlog from "../interface";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: #282828;
  width: 100%;
  height: auto;
  outline: 1px solid var(--gray);
  overflow: hidden;
  gap: 1rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  figure {
    img {
      object-fit: cover;
      width: 100%;
      height: 250px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1.5rem;
    color: var(--gray);
  }
  .disc {
    margin: 1rem 1.5rem;
    padding-bottom: 1.5rem;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
export default function BlogList(props: { data: IBlog }) {
  const { data } = props;

  return (
    <Card>
      <figure>
        <img src={data.cover} />
      </figure>
      <div className="info">
        <h3>{data.createdBy}</h3>
        <small>{data.dateCreated}</small>
      </div>
      <div className="disc">
        <Link to={`/${data.id}`}>
          <h2 className="link">{data.title}</h2>
        </Link>
        <p>{data.description}</p>
        <Link to={`/${data.id}`}>
          <button>Read article</button>
        </Link>
      </div>
    </Card>
  );
}
