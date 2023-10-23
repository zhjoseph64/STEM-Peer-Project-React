import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import Testimonial from '../components/testimonial'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>STEM Peer Project</title>
        <meta property="og:title" content="STEM Peer Project" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">hola studio</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <NavLinks></NavLinks>
                <div className="home-button">
                  <button className="home-work-with-us button">
                    <span className="home-text001">work with us</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text002">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text003">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text004">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text005">
            Creating visual identity that fits like a dream for conscious teams
            with innovative products in web3 and SaaS
          </h1>
          <img alt="image" src="/mouse.svg" className="home-image02" />
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/computer.svg" className="home-image03" />
        </div>
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text006">
              We are a technology-driven design studio.
            </h2>
            <span className="home-text007">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <button className="home-button1 button">let’s chat</button>
        </div>
        <div className="home-preview">
          <div className="home-image04">
            <img alt="image" src="/preview.svg" className="home-image05" />
          </div>
          <div className="home-video">
            <video src poster="/video.svg" className="home-video1"></video>
          </div>
        </div>
      </div>
      <div className="home-information">
        <div className="home-purpose">
          <span className="home-caption">What we do</span>
          <span className="home-description">
            We arrive at business-reflective design decisions by integrating
            strategic thinking with mature design and transferrable
            functionality. From helping transform the image of a legacy brand to
            creating an ultra-modern identity for a space tech startup - we’re
            always up for a fresh challenge.
          </span>
        </div>
        <div className="home-industries">
          <span className="home-caption1">INDUSTRIES</span>
          <div className="home-list">
            <div data-role="accordion-container" className="home-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text008">Perspiciatis</span>
                <span className="home-text009">Nemo voluptatem</span>
                <span className="home-text010">Dolore magnam</span>
                <span className="home-text011">Tempora</span>
                <span className="home-text012">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text013">Perspiciatis</span>
                <span className="home-text014">Nemo voluptatem</span>
                <span className="home-text015">Dolore magnam</span>
                <span className="home-text016">Tempora</span>
                <span className="home-text017">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item1">
              <div
                data-role="accordion-trigger"
                className="home-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="home-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="home-text018">Perspiciatis</span>
                <span className="home-text019">Nemo voluptatem</span>
                <span className="home-text020">Dolore magnam</span>
                <span className="home-text021">Tempora</span>
                <span className="home-text022">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item2">
              <div
                data-role="accordion-trigger"
                className="home-trigger3 accordion-trigger"
              >
                <span className="home-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text023">Perspiciatis</span>
                <span className="home-text024">Nemo voluptatem</span>
                <span className="home-text025">Dolore magnam</span>
                <span className="home-text026">Tempora</span>
                <span className="home-text027">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item3">
              <div
                data-role="accordion-trigger"
                className="home-trigger4 accordion-trigger"
              >
                <span className="home-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text028">Perspiciatis</span>
                <span className="home-text029">Nemo voluptatem</span>
                <span className="home-text030">Dolore magnam</span>
                <span className="home-text031">Tempora</span>
                <span className="home-text032">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item4">
              <div
                data-role="accordion-trigger"
                className="home-trigger5 accordion-trigger"
              >
                <span className="home-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text033">Perspiciatis</span>
                <span className="home-text034">Nemo voluptatem</span>
                <span className="home-text035">Dolore magnam</span>
                <span className="home-text036">Tempora</span>
                <span className="home-text037">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item5">
              <div
                data-role="accordion-trigger"
                className="home-trigger6 accordion-trigger"
              >
                <span className="home-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text038">Perspiciatis</span>
                <span className="home-text039">Nemo voluptatem</span>
                <span className="home-text040">Dolore magnam</span>
                <span className="home-text041">Tempora</span>
                <span className="home-text042">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item6">
              <div
                data-role="accordion-trigger"
                className="home-trigger7 accordion-trigger"
              >
                <span className="home-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text043">Perspiciatis</span>
                <span className="home-text044">Nemo voluptatem</span>
                <span className="home-text045">Dolore magnam</span>
                <span className="home-text046">Tempora</span>
                <span className="home-text047">Reprehenderit qui</span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container2">
              <Script
                html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-case-studies">
          <div className="home-caption2">
            <span className="home-text048">Case Studies</span>
            <div className="home-date-range">
              <span className="home-text049">2022</span>
              <span className="home-text050">——</span>
              <span className="home-text051">2019</span>
            </div>
          </div>
          <div className="home-gallery">
            <div className="home-row">
              <div className="home-case">
                <img
                  alt="image"
                  src="/study%20%231-1300w.png"
                  className="home-image06"
                />
                <div className="home-heading1">
                  <span className="home-text052">Perspiciatis</span>
                  <span className="home-text053">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home-case1">
                <img
                  alt="image"
                  src="/study%20%232-1400w.png"
                  className="home-image07"
                />
                <div className="home-heading2">
                  <span className="home-text054">Nemo voluptatem</span>
                  <span className="home-text055">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-row1">
              <div className="home-case2">
                <img
                  alt="image"
                  src="/study%20%233-1400w.png"
                  className="home-image08"
                />
                <div className="home-heading3">
                  <span className="home-text056">Dolore magnam</span>
                  <span className="home-text057">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home-case3">
                <img
                  alt="image"
                  src="/study%20%234-1400w.png"
                  className="home-image09"
                />
                <div className="home-heading4">
                  <span className="home-text058">Tempora</span>
                  <span className="home-text059">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-row2">
              <div className="home-case4">
                <img
                  alt="image"
                  src="/study%20%235-1300w.png"
                  className="home-image10"
                />
                <div className="home-heading5">
                  <span className="home-text060">Reprehenderit qui</span>
                  <span className="home-text061">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
              <div className="home-case5">
                <img
                  alt="image"
                  src="/study%20%236-1300w.png"
                  className="home-image11"
                />
                <div className="home-heading6">
                  <span className="home-text062">Ullamco laboris</span>
                  <span className="home-text063">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-header2">
            <span className="home-caption3">What our clients say</span>
            <div className="home-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="home-icon2"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text064">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="home-icon4"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="home-row3">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
            </div>
            <div className="home-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name1"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name2"
              ></Testimonial>
            </div>
            <div className="home-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content1">
          <div className="home-left">
            <h2 className="home-text065">
              Book a 15 minutes consultation to check how can we help you
            </h2>
            <button className="home-button2 button">
              <span className="home-text066">book a call</span>
            </button>
          </div>
          <img alt="image" src="/message.svg" className="home-image12" />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-about-us">
          <div className="home-header3">
            <span className="home-caption4">About us</span>
            <h2 className="home-description1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
          </div>
          <div className="home-statistics">
            <div className="home-statistic">
              <span className="home-text067">25</span>
              <span className="home-text068">Years of experience</span>
            </div>
            <div className="home-statistic1">
              <span className="home-text069">40+</span>
              <span className="home-text070">Years of Experts on board</span>
            </div>
            <div className="home-statistic2">
              <span className="home-text071">300+</span>
              <span className="home-text072">Finished projects</span>
            </div>
            <div className="home-statistic3">
              <span className="home-text073">3</span>
              <span className="home-text074">Offices worldwide</span>
            </div>
          </div>
          <div className="home-dna">
            <span className="home-caption5">Our DNA</span>
            <span className="home-description2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <span className="home-description3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="home-gallery1">
            <img
              alt="image"
              src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
              className="home-image13"
            />
            <img
              alt="image"
              src="/austin-distel-800w.png"
              className="home-image14"
            />
          </div>
          <div className="home-recruit">
            <h2 className="home-text075">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <div className="home-sections">
              <div className="home-section2">
                <span className="home-text076">lumenco laboris</span>
                <span className="home-text077">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home-section3">
                <span className="home-text078">Adipiscing elit</span>
                <span className="home-text079">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home-section4">
                <span className="home-text080">Dolor sit</span>
                <span className="home-text081">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
              <div className="home-section5">
                <span className="home-text082">Huiposcing</span>
                <span className="home-text083">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </span>
              </div>
            </div>
            <button className="home-button3 button">
              <span className="home-text084">
                <span>be part of our team</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-header4">
          <span className="home-branding2">hola studio</span>
          <div className="home-socials">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
        <div className="home-content2">
          <div className="home-contact">
            <span className="home-email">hola@hola.studio</span>
            <span className="home-number">+4 222.345.987</span>
          </div>
          <div className="home-links-row">
            <div className="home-links-column">
              <span className="home-link11">Responsive Web Design</span>
              <span className="home-link12">Design to Code</span>
              <span className="home-link13">Static Website Designer</span>
              <span className="home-link14">Static Website Generator</span>
            </div>
            <div className="home-links-column1">
              <span className="home-link15">About</span>
              <span className="home-link16">Team</span>
              <span className="home-link17">News</span>
              <span className="home-link18">Partners</span>
              <span className="home-link19">Careers</span>
              <span className="home-link20">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="home-locations">
          <div className="home-location">
            <span className="home-title08">United States</span>
            <span className="home-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="home-location1">
            <span className="home-title09">Romania</span>
            <span className="home-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="home-location2">
            <span className="home-title10">United Kingdom</span>
            <span className="home-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="home-location3">
            <span className="home-title11">Spain</span>
            <span className="home-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="home-socials1">
          <div className="home-row4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row5">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
