import React, { useState, useEffect } from "react";

const ApplyNow = () => {
  useEffect(() => {
    const Accordion = {
      settings: {
        // Expand the first item by default
        first_expanded: false,
        // Allow items to be toggled independently
        toggle: false,
      },

      openAccordion: function (toggle, content) {
        if (content.children.length) {
          toggle.classList.add("is-open");
          let final_height = Math.floor(content.children[0].offsetHeight);
          content.style.height = final_height + "px";
        }
      },

      closeAccordion: function (toggle, content) {
        toggle.classList.remove("is-open");
        content.style.height = 0;
      },

      init: function (el) {
        const _this = this;

        // Override default settings with classes
        let is_first_expanded = _this.settings.first_expanded;
        if (el.classList.contains("is-first-expanded"))
          is_first_expanded = true;
        let is_toggle = _this.settings.toggle;
        if (el.classList.contains("is-toggle")) is_toggle = true;

        // Loop through the accordion's sections and set up the click behavior
        const sections = el.getElementsByClassName("accordion");
        const all_toggles = el.getElementsByClassName("accordion-head");
        const all_contents = el.getElementsByClassName("accordion-body");
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const toggle = all_toggles[i];
          const content = all_contents[i];

          // Click behavior
          toggle.addEventListener("click", function (e) {
            if (!is_toggle) {
              // Hide all content areas first
              for (let a = 0; a < all_contents.length; a++) {
                _this.closeAccordion(all_toggles[a], all_contents[a]);
              }

              // Expand the clicked item
              _this.openAccordion(toggle, content);
            } else {
              // Toggle the clicked item
              if (toggle.classList.contains("is-open")) {
                _this.closeAccordion(toggle, content);
              } else {
                _this.openAccordion(toggle, content);
              }
            }
          });

          // Expand the first item
          if (i === 0 && is_first_expanded) {
            _this.openAccordion(toggle, content);
          }
        }
      },
    };

    (function () {
      // Initiate all instances on the page
      const accordions = document.getElementsByClassName("accordions");
      for (let i = 0; i < accordions.length; i++) {
        Accordion.init(accordions[i]);
      }
    })();
  });

  return (
    <section class="apply-now" id="apply">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="row">
              <div class="col-lg-12">
                <div class="item">
                  <h3>APPLY FOR BACHELOR DEGREE</h3>
                  <p>
                    You are allowed to use this edu meeting CSS template for
                    your school or university or business. You can feel free to
                    modify or edit this layout.
                  </p>
                  <div class="main-button-red">
                    <div class="scroll-to-section">
                      <a href="#contact">Join Us Now!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="item">
                  <h3>APPLY FOR BACHELOR DEGREE</h3>
                  <p>
                    You are not allowed to redistribute the template ZIP file on
                    any other template website. Please contact us for more
                    information.
                  </p>
                  <div class="main-button-yellow">
                    <div class="scroll-to-section">
                      <a href="#contact">Join Us Now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="accordions is-first-expanded">
              <article class="accordion">
                <div class="accordion-head">
                  <span>About Edu Meeting HTML Template</span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>
                      If you want to get the latest collection of HTML CSS
                      templates for your websites, you may visit{" "}
                      <a
                        rel="nofollow noreferrer"
                        href="https://www.toocss.com/"
                        target="_blank"
                      >
                        Too CSS website
                      </a>
                      . If you need a working contact form script, please visit{" "}
                      <a href="https://templatemo.com/contact" target="_parent">
                        our contact page
                      </a>{" "}
                      for more info.
                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion">
                <div class="accordion-head">
                  <span>HTML CSS Bootstrap Layout</span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>
                      Etiam posuere metus orci, vel consectetur elit imperdiet
                      eu. Cras ipsum magna, maximus at semper sit amet, eleifend
                      eget neque. Nunc facilisis quam purus, sed vulputate augue
                      interdum vitae. Aliquam a elit massa.
                      <br />
                      <br />
                      Nulla malesuada elit lacus, ac ultricies massa varius sed.
                      Etiam eu metus eget nibh consequat aliquet. Proin
                      fringilla, quam at euismod porttitor, odio odio tempus
                      ligula, ut feugiat ex erat nec mauris. Donec viverra velit
                      eget lectus sollicitudin tincidunt.
                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion">
                <div class="accordion-head">
                  <span>Please tell your friends</span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>
                      Ut vehicula mauris est, sed sodales justo rhoncus eu.
                      Morbi porttitor quam velit, at ullamcorper justo suscipit
                      sit amet. Quisque at suscipit mi, non efficitur velit.
                      <br />
                      <br />
                      Cras et tortor semper, placerat eros sit amet, porta est.
                      Mauris porttitor sapien et quam volutpat luctus. Nullam
                      sodales ipsum ac neque ultricies varius.
                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion last-accordion">
                <div class="accordion-head">
                  <span>Share this to your colleagues</span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>
                      Maecenas suscipit enim libero, vel lobortis justo
                      condimentum id. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                      <br />
                      <br />
                      Sed eleifend metus sit amet magna tristique, posuere
                      laoreet arcu semper. Nulla pellentesque ut tortor sit amet
                      maximus. In eu libero ullamcorper, semper nisi quis,
                      convallis nisi.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
