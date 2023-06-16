
const Footer = () => {
  return (
    <footer className=" pt-5">
      <div className="container  px-4 px-md-3 ">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div className="list-unstyled small">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iT2QTerBRtheYFikkVVPyn4xsOX77V778vTR0xHX1w&s" width={'180px'} alt="News Presenter School Logo" />
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima a tenetur laudantium libero! Dolor corrupti aliquam veniam omnis quisquam. Eos?
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Issues</a></li>
              <li className="mb-2"><a href="#">Discussions</a></li>
              <li className="mb-2"><a href="#">Corporate sponsors</a></li>
              <li className="mb-2"><a href="#">Open Collective</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 mb-3">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" id="email" name="email" placeholder="Enter your email" required className="form-control" />
              <button type="submit" className="btn btn-primary my-2">Subscribe Now</button>
            </form>
            
          </div>
        </div>
      </div>
      <div className="text-center px-4 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;