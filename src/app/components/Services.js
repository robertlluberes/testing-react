import React from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Services = () => {
  const options = {
    items: 3,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <section class="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <OwlCarousel class="owl-service-item owl-carousel" {...options}>
                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-01.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Education</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Teachers</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Students</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Online Meeting</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Networking</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <script>{$("p").css("font-size", "20px")}</script>
    </div>
  );
};

export default Services;
