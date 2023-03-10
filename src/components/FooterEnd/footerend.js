import '../../style/general.css';
import './footerend.css';
import { Link } from 'react-router-dom'

function FooterEnd() {
  return (
    <div className="footer-end-wrap">
      <footer className="footer-end flex-row">
        <div className="footer-end-left-content hide-on-mobile flex-row">
          <section className="footer-end-links white-text">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/about-us" className=''>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
              <li>
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
              <li>
                <Link to="/blog">Book Blog</Link>
              </li>
              <li>
                <Link to="/account/login/to/account" className="footer-sign-in-link">
                  Sign in/Join
                </Link>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>How can we help?</h4>
            <ul>
              <li>
                <Link rel="nofollow" to="/help">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/2/When-will-my-order-arrive#helpContent"
                >
                  Where's my stuff?
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/3/Which-countries-do-you-deliver-to#helpContent"
                >
                  Where do you deliver?
                </Link>
              </li>
              <li>
                <Link rel="nofollow" to="/cancelorder">
                  Cancel my order
                </Link>
              </li>
              <li>
                <Link rel="nofollow" to="/help/topic/HelpId/30#helpContent">
                  Return my order
                </Link>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>Join us</h4>
            <ul>
              <li>
                <Link to="/affiliate">Affiliates</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
          </section>
          <section className="footer-end-links">
            <h4>Important stuff</h4>
            <ul>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/Complaints#helpContent"
                >
                  Complaints
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/53/How-we-use-cookies#helpContent"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/20/Our-privacy-policy#helpContent"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  rel="nofollow"
                  to="/help/topic/HelpId/19/Terms-and-Conditions#helpContent"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  id="bd_uk_modern_slavery_statement-desktop"
                  rel="nofollow noopener noreferrer"
                  to="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=202151760"
                  target="_blank"
                >
                  UK Modern Slavery Statement
                </Link>
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
              <br/>
              Registered company number: 5124926
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterEnd
