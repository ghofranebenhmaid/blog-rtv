import React, { useState } from "react";
import { BlogData, genBlogId } from "../BlogData";
import { FormInput } from "./styles";

const Form = () => {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverURL] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  async function handleSubmit(event: {
    [x: string]: any;
    preventDefault: () => void;
  }) {
    event.preventDefault();
    BlogData.push({
      id: genBlogId(),
      title,
      cover: coverUrl,
      body,
      description,
      createdBy,
      dateCreated: new Date(Date.now()).toString().substr(4, 11),
    });
    event.target.reset();
  }
  return (
    <FormInput onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        name="name"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>Cover URL</label>
      <input
        type="text"
        placeholder="Cover URL"
        name="coverUrl"
        onChange={(e) => setCoverURL(e.target.value)}
      ></input>
      <label>Text</label>
      <textarea
        name="body"
        id=""
        placeholder="Write something ..."
        rows={10}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label>Description</label>
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <label>Writer Article</label>
      <input
        type="text"
        placeholder="createdBy"
        name="createdBy"
        onChange={(e) => setCreatedBy(e.target.value)}
      ></input>
      <button>Save</button>
    </FormInput>
  );
};

export default Form;
