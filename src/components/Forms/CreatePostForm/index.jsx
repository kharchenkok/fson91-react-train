import { useState } from 'react';

import React from 'react';

const CreatePostForm = ({ createPost }) => {
  const [value, setValue] = useState({
    title: '',
    body: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    createPost(value);
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Todo title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="exampleInputTitle"
          value={value.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDescription" className="form-label">
          Body
        </label>
        <input
          name="body"
          type="text"
          className="form-control"
          id="exampleInputDescription"
          value={value.body}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-5">
        Create
      </button>
    </form>
  );
};

export default CreatePostForm;
