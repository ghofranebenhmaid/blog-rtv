import styled from "styled-components";

const FormInput = styled.form`
  width: 95%;
  max-width: 400px;
  margin: 0 auto;
  label {
    font-size: 1rem;
    font-weight: bold;
    display: block;
    text-align: left;
    margin: 1.5rem 0 0.5rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    color: white;
    border: 2px solid #4a5568;
    background-color: #2d3748;
    border-radius: 10px;
    outline: none;
  }
  input:focus,
  select:focus {
    border-color: #4299e1;
  }

  input::placeholder,
  select::placeholder {
    color: #a0aec0;
  }
  input[type="checkbox"] {
    width: fit-content;
    margin-right: 0.5rem;
    transform: scale(1.25);
  }
  .form-actions {
    text-align: right;
  }
  button {
    display: inline-block;
    margin: 1rem 0;
    padding: 0.55rem 0.9rem;
    background-color: #4299e1;
    color: #1a202c;
    border: none;
    border-radius: 3px;
    /* width: 100%; */
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #fc8181;
    background-color: #fbe8d2;
  }
  .error-text {
    color: #fc8181;
    margin: 0.4rem 0;
    font-size: small;
    text-align: right;
  }
  input.input-error,
  select.input-error {
    border-color: #fc8181;
  }

  button:disabled {
    opacity: 0.35;
  }
`;

export { FormInput };
