import { Formik } from 'formik';

const FormicSearchProduct = ({ submit }) => {
  return (
    <Formik initialValues={{ query: '' }} onSubmit={submit}>
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputTitle" className="form-label">
                Search
              </label>
              <input
                name="query"
                type="text"
                className="form-control"
                id="exampleInputTitle"
                value={formik.values.query}
                onChange={formik.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary mb-5">
              Search
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormicSearchProduct;
