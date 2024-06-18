const Contact = () => {

  return <section class="o-section  t-section  o-section--footer">

    <div class="o-section__header-bg  t-section__header"></div>
    <div class="o-section__content-bg  t-section__content"></div>

    <div class="o-container">
      <div class="o-section__container">

        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              Contact
            </h2>
            <div class="o-content__body  o-section__description">
              Call me, maybe.
            </div>
          </div>
        </header>

        <div class="o-section__content  t-section__content  ">

          <div class="c-footer__contact">
            <div class="o-grid">

              <div class="o-grid__col-md-4  o-grid__col-sm-6">
                <div class="a-header  o-content in-view" data-sr-id="10">
                  <div class="o-content__body">
                    <h4>Location</h4>
                    <address>
                      300, Nguyễn Xiển, Hà Nội
                    </address>
                  </div>
                </div>
              </div>

              <div class="o-grid__col-md-4  o-grid__col-sm-6">
                <div class="a-header  o-content in-view" data-sr-id="11">
                  <div class="o-content__body">
                    <h4>Phone</h4>
                    <p>
                      0396-807-129
                    </p>
                  </div>
                </div>
              </div>

              <div class="o-grid__col-md-4  o-grid__col-sm-6">
                <div class="a-header  o-content in-view" data-sr-id="13">
                  <div class="o-content__body">
                    <a href="mailto:sainwpcode@gmail.com" rel="noreferrer" target="_blank" class="t-link-container">
                      <h4>Email</h4>
                      <p>
                        <span class="t-link-container__item--blended">
                          sainwpcode@gmail.com
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <hr class="c-footer__contact-divider" />

          <div class="o-content">
            <div class="c-footer__bottom">
              <div class="c-footer__brand">

                <div class="c-brand">
                  <div class="o-content__body">
                    <h1 class="c-brand__title  t-title">
                      <span class="c-brand__sizer  c-brand__sizer--sm">
                        <span class="a-footer  c-brand__first-word  t-title__first-word in-view" data-sr-id="15" >
                          Hoàng
                        </span>
                        <span class="a-footer  c-brand__second-word  t-title__second-word in-view" data-sr-id="16" >
                          Trường Sa
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>

              </div>

              <ul class="c-footer__social-buttons  c-social-buttons  o-content__body">
                <li class="a-header in-view" data-sr-id="6">
                  <a href="https://www.facebook.com/shrimp2t/" rel="noreferrer" target="_blank" class="c-social-button  t-social-button">
                    FB
                  </a>
                </li>
                <li class="a-header in-view" data-sr-id="7">
                  <a href="https://github.com/shrimp2t" target="_blank" rel="noreferrer" class="c-social-button  t-social-button">
                    GIt
                  </a>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>

  </section>


}

export default Contact;