import '../../style/login_signup.css'
import './login.css'
function LoginForm() {
  return (
    <div className="block-wrap half">
      <div className="a-page">
        <div className="a-container">
          <div className="a-section auth-pagelet-mobile-container">
            <form id="signin-embedded-layout" className="auth-validate-form auth-clearable-form">
              <h1 className="a-spacing-micro a-spacing-top-small a-text-left login-title ">
                Sign in
              </h1>
              <div className="a-section a-spacing-base a-text-right">
                <a
                  id="auth-fpp-link-bottom"
                  className="a-link-normal text-color-444"
                  target="_top"
                  href="https://www.bookdepository.com/ap/forgotpassword?showRememberMe=true&amp;openid.pape.max_auth_age=0&amp;rmrMeDefaultSelected=1&amp;language=en_US&amp;pageId=bookdepo_website_standalone&amp;mobileBrowserWeblabTreatment=C&amp;openid.return_to=https%3A%2F%2Fwww.bookdepository.com%2F%3Fstatus%3Dwelcome&amp;prevRID=NRSQB3H5T6JADFKG5ERZ&amp;openid.assoc_handle=amzn_bookdepository_website_uk&amp;openid.mode=checkid_setup&amp;openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&amp;desktopBrowserWeblabTreatment=C&amp;prepopulatedLoginId=&amp;failedSignInCount=0&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                >
                  Forgot password?
                </a>
              </div>
              <div className="a-input-text-group a-spacing-medium a-spacing-top-micro">
                <div className="a-input-text-wrapper auth-fill-claim moa-single-claim-input-field-container">
                  <input
                    type="email"
                    id="ap_email"
                    placeholder="Email"
                    name="email"
                  />
                </div>

                {/* <div id="ap_email_icon" className="auth-clear-icons">
                  <i
                    className="a-icon a-icon-close"
                    role="img"
                    aria-label="Clear email text field, button"
                  ></i>
                </div> */}
                <div id="auth-password-container" className="a-input-text-wrapper auth-password-container auth-password auth-fill-password">
                  <input type="password" id="ap_password" placeholder="Book Depository password" />
                </div>
              </div>
              <div className="a-row">
                <div className="a-column a-span12 a-spacing-medium">
                  <div id="auth-show-password-checkbox-container" className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox">
                    <label for="auth-show-password-checkbox">
                      <input id="auth-show-password-checkbox" type="checkbox" />
                      <i className="a-icon a-icon-checkbox"></i>
                      <span className="a-label a-checkbox-label">
                        Show password
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="a-row a-spacing-base">
                <div id="keep-sign-in" className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox">
                  <label>
                    <input type="checkbox" name="rememberMe"/>
                    <i className="a-icon a-icon-checkbox"></i>
                    <span className="a-label a-checkbox-label">
                      Keep me signed in.
                    </span>
                  </label>
                </div>
              </div>
              <div className="a-section">
                <button id="signInSubmit" className="a-button-input" type="submit" >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="kmsi-help-message-wrapper">
          <div className="kmsi-help-message">
            <a href="/help/topic/HelpId/77/Keep-Me-Signed-In">Learn more</a>{' '}
            about "Keep me signed in"
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
