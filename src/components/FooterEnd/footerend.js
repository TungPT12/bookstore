import '../../style/general.css';
import './footerend.css';

function FooterEnd() {
  return (
    <div className="footer-end-wrap">
      <footer className="footer-end flex-row">
        <div className="footer-end-left-content hide-on-mobile flex-row">
          <section className="footer-end-links white-text">
            <h4>Explore</h4>
            <ul>
              <li>
                <a rel="nofollow" href="/about-us" className=''>
                  About us
                </a>
              </li>
              <li>
                <a href="/sitemap">Sitemap</a>
              </li>
              <li>
                <a href="/bookmarks">Bookmarks</a>
              </li>
              <li>
                <a href="/blog">Book Blog</a>
              </li>
              <li>
                <a href="/account/login/to/account" className="footer-sign-in-link">
                  Sign in/Join
                </a>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>How can we help?</h4>
            <ul>
              <li>
                <a rel="nofollow" href="/help">
                  Help
                </a>
              </li>
              <li>
                <a href="/contactus">Contact us</a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/2/When-will-my-order-arrive#helpContent"
                >
                  Where's my stuff?
                </a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/3/Which-countries-do-you-deliver-to#helpContent"
                >
                  Where do you deliver?
                </a>
              </li>
              <li>
                <a rel="nofollow" href="/cancelorder">
                  Cancel my order
                </a>
              </li>
              <li>
                <a rel="nofollow" href="/help/topic/HelpId/30#helpContent">
                  Return my order
                </a>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>Join us</h4>
            <ul>
              <li>
                <a href="/affiliate">Affiliates</a>
              </li>
              <li>
                <a href="/jobs">Jobs</a>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>Important stuff</h4>
            <ul>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/Complaints#helpContent"
                >
                  Complaints
                </a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/53/How-we-use-cookies#helpContent"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/20/Our-privacy-policy#helpContent"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="/help/topic/HelpId/19/Terms-and-Conditions#helpContent"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  id="bd_uk_modern_slavery_statement-desktop"
                  rel="nofollow noopener noreferrer"
                  href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=202151760"
                  target="_blank"
                >
                  UK Modern Slavery Statement
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="footer-right-content">
          <div className="payment-methods">
            <p>We accept these payment methods </p>
            <img
              className="lazy loaded"
              data-lazy="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/payment-options.png"
              alt="Payment methods"
              src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/payment-options.png"
            />
          </div>
          <div className="small-print">
            <i className="icon-bd"></i>
            <div
              id="copyright"
              className="text"
              title="BdiMetadata{webserver='web-bdi-2022-4', requestTime='0.03 sec', userSessionCurrencyCode='USD', userSessionCountry='VN', userIp='1.52.165.191', cacheParams=BdiCacheMetadata{cacheCountry='null', cacheCurrency='null', controllerName='null', actionName='null', moduleName='null', serverScheme='null', cacheNamespace='null', cacheKey='null', generatedOn=Tue Mar 07 03:00:28 UTC 2023, cacheEnabled=true}}"
            >
              © 2023&nbsp; The Book Depository Ltd.UK.
              <br />
              Registered company number: 5124926
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterEnd
