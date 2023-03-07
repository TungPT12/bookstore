function FooterTop() {
    return ( 
        <div class="footer-top">
        <div class="newsletter-section">
          <div class="newsletter-widget">
            <div class="signup-text">
              <img
                class="lazy loaded"
                data-lazy="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/newsletter-icon.svg"
                alt="Sign up"
                src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/newsletter-icon.svg"
              />
              <p>
                Learn about new offers and get more deals by joining our
                newsletter
              </p>
            </div>
            <div class="newsletter-form">
              <form action="/newsletter/add">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                    aria-label="Email address for newsletter subscription"
                    name="newsletterEmailAddress"
                    spellcheck="false"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">
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