import { Progress } from "@chakra-ui/react";

const Skills = () => {
  return (
    <section class="s-skills o-section  t-section  ">
      <div class="o-section__header-bg  t-section__header"></div>
      <div class="o-section__content-bg  t-section__content"></div>

      <div class="o-container">
        <div class="o-section__container">
          <header class="o-section__header  t-section__header">
            <div class="o-content">
              <h2 class="o-section__heading">Skills</h2>
              <div class="o-content__body  o-section__description">
                Progress bars, anyone?
              </div>
            </div>
          </header>

          <div class="o-section__content  t-section__content  ">
            <div class="o-grid">
              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        9<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>PHP/MySQL</h3>
                    </div>
                  </div>
                  <Progress value={90} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        8<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>JAVASCRIPT</h3>
                    </div>
                  </div>
                  <Progress value={80} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        8<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>HTML, CSS, SCSS</h3>
                    </div>
                  </div>
                  <Progress value={80} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        7<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>Node JS</h3>
                    </div>
                  </div>
                  <Progress value={70} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        7<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>React JS</h3>
                    </div>
                  </div>
                  <Progress value={70} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        7<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>MongoDB,Postgresql</h3>
                    </div>
                  </div>
                  <Progress value={70} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        6<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>Git, SVN</h3>
                    </div>
                  </div>
                  <Progress value={60} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        7<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>Hosting & Server</h3>
                    </div>
                  </div>
                  <Progress value={70} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        6<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>CSS3 Animation</h3>
                    </div>
                  </div>
                  <Progress value={60} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        8<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>PageSpeed Insights</h3>
                    </div>
                  </div>
                  <Progress value={80} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        7<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>SEO</h3>
                    </div>
                  </div>
                  <Progress value={70} />
                </div>
              </div>

              <div class="o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-media  o-media--block in-view">
                    <div class="o-media__figure">
                      <div class="c-number  t-primary-color">
                        5<small>/10</small>
                      </div>
                    </div>
                    <div class="o-media__body">
                      <h3>English</h3>
                    </div>
                  </div>
                  <Progress value={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
