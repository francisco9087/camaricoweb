import React from 'react'

const PiePagina = () => {
  return (
    <div className="mt-5">
      
<footer className="page-footer font-small mdb-color lighten-3 pt-4">

 
  <div className="container text-center text-md-left">

  
    <div className="row">

      <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

        <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
          esse
          quasi, veritatis totam voluptas nostrum.</p>

      </div>


      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">


        <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

        <ul className="list-unstyled">
          <li>
            <p>
              <a href="#!">PROJECTS</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">ABOUT US</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">BLOG</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">AWARDS</a>
            </p>
          </li>
        </ul>

      </div>


      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

        <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

        <ul className="list-unstyled">
          <li>
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          </li>
          <li>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com</p>
          </li>
          <li>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          </li>
          <li>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </li>
        </ul>

      </div>


      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

        <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

        {/* <!-- Facebook --> */}
        <a type="button" className="btn-floating btn-fb">
          <i className="fab fa-facebook-f"></i>
        </a>
        {/* <!-- Twitter --> */}
        <a type="button" className="btn-floating btn-tw">
          <i className="fab fa-twitter"></i>
        </a>
        {/* <!-- Google +--> */}
        <a type="button" className="btn-floating btn-gplus">
          <i className="fab fa-google-plus-g"></i>
        </a>
        {/* <!-- Dribbble --> */}
        <a type="button" className="btn-floating btn-dribbble">
          <i className="fab fa-dribbble"></i>
        </a>

      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</footer>
    </div>
  )
}

export default PiePagina
