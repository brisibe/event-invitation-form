import { useState } from "react";
import Input from "../Components/form/Input";
import Spinner from "../Components/spinner/Spinner";
import Button from "../Components/button/Button";
import Card from "../Components/cards/Card";

const Main = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(null);

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Header */}
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Event Registration</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
      </div>

      {/* Form sections */}
      <div className="row">
        <div className="col">
          <form
            onSubmit={handleSubmit}
            className="row g-3 shadow-sm p-3 mb-5 bg-body rounded"
          >
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <Input
                type="text"
                className="form-control"
                name="firstName"
                id="firstname"
                value={data.firstName}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Lastname
              </label>
              <Input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                value={data.lastName}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={data.email}
                onChange={onHandleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Input
                type="tel"
                className="form-control"
                name="phone"
                id="inputAddress"
                value={data.phone}
                onChange={onHandleChange}
              />
            </div>

            <div className="col-12">
              <Button type="submit" className="btn btn-primary" text="Submit" />
            </div>
          </form>
        </div>

        <div className="col">
          {isSubmitting && <Spinner />}
          {submittedData && (
            <Card
              firstName={submittedData.firstName}
              lastName={submittedData.lastName}
              email={submittedData.email}
              phone={submittedData.phone}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
