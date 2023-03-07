import '../../style/login_signup.css'
import './signup.css'
import { ExclamationCircleIcon } from '../../asset/icon/icon'
 
function SignUpForm() {
  return (
    <div className="block-wrap half">
      <div id="a-page">
        <div className="a-container">
          <div className="a-section auth-pagelet-mobile-container">
            <div className="a-section a-spacing-large mp_reg_fix">
              <h1 className="a-spacing-mini login-title ">Join</h1>
              <form id="ap_register_form" className="auth-validate-form auth-clearable-form">
                <div className="a-input-text-wrapper a-spacing-base">
                  <input type="text" id="ap_customer_name" placeholder="First and last name"
                  />
                </div>
                <div className="a-input-text-wrapper a-spacing-base moa-single-claim-input-field-container">
                  <input type="email" id="ap_email" placeholder="Your email address"/>
                </div>
                <div className="a-row a-spacing-base auth-require-fields-match-group">
                  <div className="a-row auth-password-row">
                    <div id="auth-password-container" className="a-input-text-wrapper amazon-visible-password auth-inline-password-container auth-password-container auth-password input_table_layout">
                      <input type="password" id="ap_password" placeholder="Create a password"  />
                    </div>
                  </div>

                  <div className="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini">
                    <div className="a-box-inner a-alert-container flex-row">
                      <i className="a-icon a-icon-alert">
                        <ExclamationCircleIcon/>
                      </i>
                      <div className="a-alert-content">
                        Passwords must be at least 6 characters.
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="a-row">
              <div className="a-column a-span12 a-spacing-medium">
                <div
                  id="auth-show-password-checkbox-container"
                  className="a-checkbox a-checkbox-fancy a-control-row a-touch-checkbox auth-show-password-checkbox"
                >
                  <label for="auth--show-password-checkbox">
                    <input id="auth--show-password-checkbox" type="checkbox" />
                    <i className="a-icon a-icon-checkbox"></i>
                    <span className="a-label a-checkbox-label">
                      <span>Show password</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="a-button-stack">
              <span className="a-button a-button-primary" id="a-autoid-0">
                <span className="a-button-inner">
                  <button id="continue" className="a-button-input" type="submit">Create your account</button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="a-section a-spacing-none"></div>
    </div>
  )
}

export default SignUpForm
