import '../../style/general.css'
import './footertop.css'
function FooterTop() {
  // const even
    return ( 
        <div className="footer-top">
        <div className="newsletter-section flex-row center-column ">
          <div className="newsletter-widget flex-row">
            <div className="signup-text flex-row">
              <img
                className="lazy loaded"
                data-lazy="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/newsletter-icon.svg"
                alt="Sign up"
                src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/newsletter-icon.svg"
              />
              <p>
                Learn about new offers and get more deals by joining our
                newsletter
              </p>
            </div>
            <div className="newsletter-form">
              <form className='footer-top flex-row'>
                <div className="form-group">
                  <input
                    type="email"
                    className="footer-top__email form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group">
                  <button className="btn footer-top_btn_email btn-primary" onClick={ (e) => {
                      e.preventDefault();
                  }}>
                    Sign up now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
}

export default FooterTop;