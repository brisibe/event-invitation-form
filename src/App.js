import React, { useState } from 'react';
import './App.css';

function App() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    return (
      <div className="container">
          <div className="row">
              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold">Event Registration</h1>
                  <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">
                          Quickly design and customize responsive mobile-first sites with
                          Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                          and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                          plugins.
                      </p>

                      {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">Submitting form...</span>
                      </p>
                      }

                  </div>
              </div>
          </div>


          <div className="row">
              <div className="col">
                  <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
                      <div className="col-md-6">
                          <label htmlFor="firstname" className="form-label">Firstname</label>
                          <input type="text" className="form-control" id="firstname"/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="lastname" className="form-label">Lastname</label>
                          <input type="text" className="form-control" id="lastname"/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email"/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input type="tel" className="form-control" id="inputAddress"/>
                      </div>

                      <div className="col-12">
                          <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                  </form>
              </div>
              <div className="col">

                      <div className="card-body p-9">

                          <div className="fs-2 fw-bolder text-dark">John Smith</div>

                          <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">john@example.com 090474834748</p>

                          <div className="d-flex flex-wrap mb-4">

                              <div className="border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bolder">Apr 8, 2021</div>
                                  <div className="fw-bold text-gray-400">Date</div>
                              </div>

                              <div className="border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bolder">4pm</div>
                                  <div className="fw-bold text-gray-400">Time</div>
                              </div>

                          </div>

                      </div>

              </div>
          </div>
      </div>
  );
}

export default App;
