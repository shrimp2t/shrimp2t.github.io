import avatar from "../../assets/avatar.jpeg";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import { IoLogoFacebook, IoLogoGithub, IoCalendarSharp } from "react-icons/io5";

const Intro = () => {
  return (
    <section class="o-section o-section--header  t-section  t-section--header">
      <div class="c-header">
        <div class="o-section__header-bg  t-section__header"></div>
        <div class="o-section__content-bg  t-section__content"></div>

        <div class="o-container">
          <div class="o-section__container">
            <header class="o-section__header  c-header__header  t-section__header">
              <div class="c-header__inner-header">
                <div class="c-header__avatar">
                  <div class="a-header  c-avatar in-view" data-sr-id="2">
                    <Avatar size="2xl" name="" src={avatar} />
                  </div>
                </div>
              </div>
            </header>

            <div class="o-section__content  c-header__content  t-section__content">
              <div class="c-header__inner-content">
                <div class="c-header__top">
                  <div class="c-header__brand">
                    <div class="c-brand">
                      <h1 class="c-brand__title  t-title">
                        <span class="c-brand__sizer">
                          <span
                            class="a-header  c-brand__second-word  t-title__second-word in-view"
                            data-sr-id="4"
                          >
                            Trường Sa
                          </span>
                        </span>
                      </h1>
                      <h2
                        class="a-header  c-brand__sub-title  t-sub-title in-view"
                        data-sr-id="5"
                      >
                        <span class="c-brand__sizer">
                          Web Developer &amp; Front-end Expert
                        </span>
                      </h2>
                    </div>
                  </div>

                  <ul class="c-header__social-buttons  c-social-buttons">
                    <li class="a-header in-view" data-sr-id="6">
                      <span class="c-social-button  t-social-button">
                        <IoCalendarSharp />
                        BOD: 12/1989
                      </span>
                    </li>
                    <li class="a-header in-view" data-sr-id="6">
                      <a
                        href="https://www.facebook.com/shrimp2t/"
                        target="_blank"
                        rel="noreferrer"
                        class="c-social-button  t-social-button"
                      >
                        <IoLogoFacebook />
                        /shrimp2t
                      </a>
                    </li>
                    <li class="a-header in-view" data-sr-id="7">
                      <a
                        href="https://github.com/shrimp2t"
                        target="_blank"
                        rel="noreferrer"
                        class="c-social-button  t-social-button"
                      >
                        <IoLogoGithub />
                        /shrimp2t
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="c-header__contact">
                  <div class="o-grid">
                    <div class="o-grid__col-md-4  o-grid__col-sm-6">
                      <div class="a-header  o-content in-view" data-sr-id="10">
                        <div class="o-content__body">
                          <h4>Location</h4>
                          <address>300, Nguyễn Xiển, Hà Nội</address>
                        </div>
                      </div>
                    </div>

                    <div class="o-grid__col-md-4  o-grid__col-sm-6">
                      <div class="a-header  o-content in-view" data-sr-id="11">
                        <div class="o-content__body">
                          <h4>Phone</h4>
                          <p>0396-807-129</p>
                        </div>
                      </div>
                    </div>

                    <div class="o-grid__col-md-4  o-grid__col-sm-6">
                      <div class="a-header  o-content in-view" data-sr-id="13">
                        <div class="o-content__body">
                          <a
                            href="mailto:sainwpcode@gmail.com"
                            rel="noreferrer"
                            target="_blank"
                            class="t-link-container"
                          >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
