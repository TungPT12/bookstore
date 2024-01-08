import { Link } from "react-router-dom";
import { BasketShoppingIcon, AngleDownIcon } from "../../asset/icon/icon";
import './secondheader.css'
import '../../style/general.css'
import { useState } from "react";
import { useSelector } from "react-redux";

function SecondHeader({ cartUser }) {
  const [totalPrice] = useState(0);

  const cart = useSelector((state) => state.cart);
  return (
    <div className="secondary-header-wrap">
      <div className="secondary-header flex-row space-between-element center-row">
        <ul className="page-links flex-row max-height center-row">
          <li className="tbd-dropdown category-dropdown mob-nav-shop dropdown">
            <Link href="#" className="tbd-dropdown-toggle flex-row ">
              Shop by category
              <i className="icon-angledown"><AngleDownIcon /></i>
            </Link>
            <ul className="tbd-dropdown-menu dropdown-menu">
              <li className="tbd-dropdown-menu__list flex-row">
                <ul className="border-left-1">
                  <li className="desktop-only tbd-dropdown-header">
                    <p>Top Categories</p>
                  </li>
                  <ul className="global-nav-top-category category-dropdown-list vertical-dropdown-list">
                    <li className="top-category" data-order="10">
                      <Link href="/category/2/Art-Photography">
                        Art &amp; Photography
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/213/Biography">Biography</Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2455/Childrens-Books">
                        Children's Books
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2942/Crafts-Hobbies">
                        Crafts &amp; Hobbies
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2616/Crime-Thriller">
                        Crime &amp; Thriller
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/333/Fiction">Fiction</Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2858/Food-Drink">Food &amp; Drink</Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2633/Graphic-Novels-Anime-Manga">
                        Graphic Novels, Anime &amp; Manga
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2638/History-Archaeology">
                        History &amp; Archaeology
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2819/Mind-Body-Spirit">
                        Mind, Body &amp; Spirit
                      </Link>
                    </li>
                    <li className="top-category" data-order="10">
                      <Link href="/category/2623/Science-Fiction-Fantasy-Horror">
                        Science Fiction, Fantasy &amp; Horror
                      </Link>
                    </li>
                  </ul>
                </ul>
                <ul className="border-left-1">
                  <li className="tbd-dropdown-header desktop-only">
                    <p>More Categories</p>
                  </li>
                  <ul className="category-dropdown-list vertical-dropdown-list">
                    <li data-order="0">
                      <Link href="/category/3389/Audio-Books">Audio Books</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/928/Business-Finance-Law">
                        Business, Finance &amp; Law
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/1897/Computing">Computing</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/240/Dictionaries-Languages">
                        Dictionaries &amp; Languages
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3245/Entertainment">Entertainment</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2770/Health">Health</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2892/Home-Garden">Home &amp; Garden</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2978/Humour">Humour</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/1279/Medical">Medical</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2985/Natural-History">
                        Natural History
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2802/Personal-Development">
                        Personal Development
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/283/Poetry-Drama">
                        Poetry &amp; Drama
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/375/Reference">Reference</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3120/Religion">Religion</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2630/Romance">Romance</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/1476/Science-Geography">
                        Science &amp; Geography
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/632/Society-Social-Sciences">
                        Society &amp; Social Sciences
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3013/Sport">Sport</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3385/Stationery">Stationery</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3328/Teaching-Resources-Education">
                        Teaching Resources &amp; Education
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/1708/Technology-Engineering">
                        Technology &amp; Engineering
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3391/Teen-Young-Adult">
                        Teen &amp; Young Adult
                      </Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/2967/Transport">Transport</Link>
                    </li>
                    <li data-order="0">
                      <Link href="/category/3098/Travel-Holiday-Guides">
                        Travel &amp; Holiday Guides
                      </Link>
                    </li>
                  </ul>
                </ul>
                <ul className="border-left-1">
                  <li className="tbd-dropdown-editableLinks">
                    <div className="carousel-container block-wrap sidebar ">
                      <div id="Top Authors" className="block-header">
                        <h2>Top Authors</h2>
                      </div>
                      <div className="block ">
                        <div className="tab-wrap module type-link grid tab-6269 tab-active">
                          <div className="tab">
                            <Link
                              href="/author/J-K-Rowling"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">J. K. Rowling</div>
                            </Link>
                            <Link
                              href="/roald-dahl"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Roald Dahl</div>
                            </Link>
                            <Link
                              href="/julia-donaldson"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Julia Donaldson</div>
                            </Link>
                            <Link
                              href="/stephen-king"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Stephen King</div>
                            </Link>
                            <Link
                              href="/david-walliams"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">David Walliams</div>
                            </Link>
                            <Link
                              href="/author/Dr-Seuss"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Dr. Seuss</div>
                            </Link>
                            <Link
                              href="/andy-griffiths"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Andy Griffiths</div>
                            </Link>
                            <Link
                              href="/author/James-Patterson"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">James Patterson</div>
                            </Link>
                            <Link
                              href="/author/Sarah-J-Maas"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Sarah J. Maas</div>
                            </Link>
                            <Link
                              href="/enid-blyton"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Enid Blyton</div>
                            </Link>
                            <Link
                              href="/john-green"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">John Green</div>
                            </Link>
                            <Link
                              href="/author/Brandon-Sanderson"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Brandon Sanderson</div>
                            </Link>
                            <Link
                              href="/popular-authors"
                              className="link-item-text-only link-item more"
                            >
                              <div className="link-text">See all</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-container block-wrap sidebar ">
                      <div id="Bestselling Series" className="block-header">
                        <h2>Bestselling Series</h2>
                      </div>
                      <div className="block ">
                        <div className="tab-wrap module type-link grid tab-6270 tab-active">
                          <div className="tab">
                            <Link
                              href="/harry-potter"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Harry Potter</div>
                            </Link>
                            <Link
                              href="/game-of-thrones"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Game Of Thrones</div>
                            </Link>
                            <Link
                              href="/lego"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Lego</div>
                            </Link>
                            <Link
                              href="/divergent-trilogy"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Divergent</div>
                            </Link>
                            <Link
                              href="/search/advanced?seriesId=478050"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Throne Of Glass</div>
                            </Link>
                            <Link
                              href="/star-wars"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Star Wars</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-container block-wrap sidebar ">
                      <div id="Books By Language" className="block-header">
                        <h2>Books By Language</h2>
                      </div>
                      <div className="block ">
                        <div className="tab-wrap module type-link grid tab-11793 tab-active">
                          <div className="tab">
                            <Link
                              href="/spanish"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Books in Spanish</div>
                            </Link>
                            <Link
                              href="/polish-books"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Books in Polish</div>
                            </Link>
                            <Link
                              href="/german-books"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Books in German</div>
                            </Link>
                            <Link
                              href="/french-books"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Books in French</div>
                            </Link>
                            <Link
                              href="/languages"
                              className="link-item-text-only link-item"
                            >
                              <div className="link-text">Languages Bookshop</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="tbd-dropdown-header desktop-only">
                <p>Children's books by age range</p>
              </li>
              <li>
                <ul className="age-range-dropdown-list flex-row center-row">
                  <li className="flex-row center-row">
                    <Link href="/category/3392/Books-for-Ages-0-2">Ages 0-2</Link>
                  </li>
                  <li className="border-left-1 flex-row center-row">
                    <Link href="/category/3393/Books-for-Ages-3-5">Ages 3-5</Link>
                  </li>
                  <li className="border-left-1 flex-row center-row">
                    <Link href="/category/3394/Books-for-Ages-6-8">Ages 6-8</Link>
                  </li>
                  <li>
                    <Link href="/category/3395/Books-for-Ages-9-11">Ages 9-11</Link>
                  </li>
                  <li className="border-left-1 flex-row center-row">
                    <Link href="/category/3391/Teen-Young-Adult">
                      Teen &amp; Young Adult
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mob-nav-shop">
            <Link className="best-seller">Bestsellers</Link>
          </li>
          <li className="mob-nav-shop">
            <Link className="coming-soon">Coming Soon</Link>
          </li>
          <li className="mob-nav-shop">
            <Link className="new-releases">New Releases</Link>
          </li>
        </ul>
        <div className="right-section max-height">
          <div className="basket-wrap max-height flex-row center-row">
            <span className="total">VND {totalPrice}</span>
            <Link to="cart" className="basket-btn flex-row max-height center-row">
              <span className="item-count">({cart.length})</span>
              <i className="icon-basket"><BasketShoppingIcon /></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
