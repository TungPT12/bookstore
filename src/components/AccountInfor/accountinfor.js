import '../../style/general.css';
import './accountinfo.css';
function AccountInfo() {
  return (
    <div className="wrapper-account_info flex-column">
      <div className="header-account_info">
        Thông tin tài khoản
      </div>
      <div className="styles__StyleInfoPage-sc-s5c7xj-1 dfHeIP">
        <div className="info flex-row">
          <div className="info-left">
            <span className="info-title">Thông tin cá nhân</span>
            <div className="info-left_form styles__StyledAccountInfo-sc-s5c7xj-2 khBVOu">
              <form>
                <div className="form-info flex-row">
                  <div className="form-avatar">
                    <div className="styles__StyleAvatar-sc-7twymm-0 iRBxWb">
                      <div className="avatar-wrapper" aria-describedby="popup-9">
                        <div className="avatar-view flex-row">
                          <img
                            src="https://graph.facebook.com/819058775119068/picture?type=large&amp;return_ssl_resources=1"
                            alt="avatar"
                            className="avatar"
                          />
                          <div className="edit">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                              className="edit_img"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-name">
                    <div className="form-control flex-row">
                      <label className="input-label">Họ &amp; Tên</label>
                      <div>
                        <div className="styles__StyledInput-sc-s5c7xj-5 hisWEc">
                          <input
                            className="input "
                            type="search"
                            name="fullName"
                            maxlength="128"
                            placeholder="Thêm họ tên"
                            value="Thanh Tùng"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-control flex-row">
                      <label className="input-label">Nickname</label>
                      <div>
                        <div className="styles__StyledInput-sc-s5c7xj-5 hisWEc">
                          <input
                            className="input "
                            name="userName"
                            maxlength="128"
                            placeholder="Thêm nickname"
                            type="search"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-control">
                  <label className="input-label">Ngày sinh</label>
                  <div className="style__StyledBirthdayPicker-sc-1325vtm-0 bvIJNZ">
                    <select name="day">
                      <option value="0">Ngày</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select name="month">
                      <option value="0">Tháng</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select name="year">
                      <option value="0">Năm</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                      <option value="1904">1904</option>
                      <option value="1903">1903</option>
                      <option value="1902">1902</option>
                      <option value="1901">1901</option>
                      <option value="1900">1900</option>
                    </select>
                  </div>
                </div>
                <div className="form-control">
                  <label className="input-label">Giới tính</label>
                  <label className="Radio__StyledRadio-sc-1tpsfw1-0 eQckrx">
                    <input type="radio" name="gender" value="male" />
                    <span className="radio-fake"></span>
                    <span className="label">Nam</span>
                  </label>
                  <label className="Radio__StyledRadio-sc-1tpsfw1-0 eQckrx">
                    <input type="radio" name="gender" value="female" />
                    <span className="radio-fake"></span>
                    <span className="label">Nữ</span>
                  </label>
                  <label className="Radio__StyledRadio-sc-1tpsfw1-0 eQckrx">
                    <input type="radio" name="gender" value="other" />
                    <span className="radio-fake"></span>
                    <span className="label">Khác</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-label">Quốc tịch</label>
                  <div>
                    <div className="styles__StyledInput-sc-s5c7xj-5 hisWEc">
                      <input
                        className="input with-icon-right"
                        name="nationality"
                        maxlength="128"
                        placeholder="Chọn quốc tịch"
                        readonly=""
                        value=""
                      />
                      <svg
                        className="icon-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z"
                          fill="#808089"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="form-control">
                  <label className="input-label">&nbsp;</label>
                  <button
                    type="submit"
                    className="styles__StyledBtnSubmit-sc-s5c7xj-3 cqEaiM btn-submit"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="info-vertical"></div>
          <div className="info-right">
            <span className="info-title">Số điện thoại và Email</span>
            <div className="styles__StyledListItem-sc-s5c7xj-4 lCUBE">
              <div className="list-item">
                <div className="info">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                    className="icon"
                    alt=""
                  />
                  <div className="detail flex-column">
                    <span>Số điện thoại</span>
                    <span>0925215202</span>
                  </div>
                </div>
                <div className="status">
                  <span></span>
                  <button className="button active">Cập nhật</button>
                </div>
              </div>
              <div className="list-item">
                <div className="info">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                    className="icon"
                    alt=""
                  />
                  <div className="detail flex-column">
                    <span>Địa chỉ email</span>
                    <span className="span hint">Thêm địa chỉ email</span>
                  </div>
                </div>
                <div className="status">
                  <span></span>
                  <button className="button active">Cập nhật</button>
                </div>
              </div>
            </div>
            <span className="info-title">Bảo mật</span>
            <div className="styles__StyledListItem-sc-s5c7xj-4 lCUBE">
              <div className="list-item">
                <div>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                    className="icon"
                    alt=""
                  />
                  <span>Đổi mật khẩu</span>
                </div>
                <div className="status">
                  <span></span>
                  <button className="button active">Cập nhật</button>
                </div>
              </div>
              <div className="list-item">
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
                    className="icon"
                    alt=""
                  />
                  <span>Thiết lập mã PIN</span>
                </div>
                <div className="status">
                  <span></span>
                  <button className="button active">Thiết lập</button>
                </div>
              </div>
            </div>
            <span className="info-title">Liên kết mạng xã hội</span>
            <div className="styles__StyledListItem-sc-s5c7xj-4 lCUBE">
              <div className="list-item">
                <div>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                    className="icon"
                    alt=""
                  />
                  <span>Facebook</span>
                </div>
                <div className="status is-success">
                  <span></span>
                  <button> Đã liên kết</button>
                </div>
              </div>
              <div className="list-item">
                <div>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                    className="icon"
                    alt=""
                  />
                  <span>Google</span>
                </div>
                <div className="status">
                  <span></span>
                  <button className="button active">Liên kết</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
