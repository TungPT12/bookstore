import { FacebookIcon } from "../../asset/icon/icon";
import './footersocial.css';
function FooterSocial() {
  return (
    <div class="footer-social-wrap flex-column center-row center-column">
      <h4>Follow us</h4>
      <ul class="social-btns flex-row">
        <li>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/tt.tungpt"
            aria-label="Book Depository Facebook"
            target="_blank"
          >
            <i class="icon-social icon-fb">
              <FacebookIcon/>
            </i>
          </a>
        </li>
        <li>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/tt.tungpt"
            aria-label="Book Depository Twitter"
            target="_blank"
          >
            <i class="icon-social icon-tw"><FacebookIcon/></i>
          </a>
        </li>
        <li>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/tt.tungpt"
            aria-label="Book Depository Pinterest"
            target="_blank"
          >
            <i class="icon-social icon-pi"><FacebookIcon/></i>
          </a>
        </li>
        <li>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/tt.tungpt"
            aria-label="Book Depository Instagram"
            target="_blank"
          >
            <i class="icon-social icon-in"><FacebookIcon/></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterSocial
