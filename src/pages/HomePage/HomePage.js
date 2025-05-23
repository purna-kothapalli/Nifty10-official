import { useState, useEffect } from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import fantasyGif from "../../assets/play-fantasy.gif";
import registerGif from "../../assets/register.gif";
import marketTrendGif from "../../assets/market-trend.gif";
import pickStocksGif from "../../assets/pick-stocks.gif";
import bidSlotsGif from "../../assets/bid-slots.gif";
import leaderboardGif from "../../assets/leaderboard.gif";
import pradeepImg from "../../assets/pradeep.png";
import sushmaImg from "../../assets/sushma.jpg";
import srinivasImg from "../../assets/srinivas-yadla.png";
import rightArrowWhite from '../../assets/right-arrow-white.png';
const HomePage = ({ scrollToContact }) => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    if (scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollToContact]);
  const faqs = [
    {
      question: "What is Fantasy Stock Predictions?",
      answer:
        "Fantasy Stocks predictions is an exciting game! Users can predict the performance of various stocks within a given timeframe, and those with the most accurate predictions can win real cash prizes.",
    },
    {
      question: "Is it possible to win real cash prizes in Nifty 10?",
      answer:
        "Certainly! We offer a range of cash contests, each featuring different slots entry, entry fees, and prize pools. Select a fantasy stocks prediction that suits your preference and aim to outperform your competitors for the chance to celebrate big victories!",
    },
    {
      question: "How secure is it to add funds into Nifty 10?",
      answer:
        "Money filling to your Nifty10 account is an easy and secure process. We’ve authorized a wide range of payment methods on Nifty10 to guarantee the security of your personal information.\nOnce your personal information has been verified, you can take your winnings from Nifty10 straight to your bank account.",
    },
    {
      question: "What is the time duration for Nifty 10 to credit the winnings?",
      answer: "In general, withdrawals can take up to 3 working days to get credited.",
    },
    {
      question: "How should I download the Nifty10 Android app?",
      answer:
        "There are multiple ways in which you can download the Nifty10 app. Choose what’s best for you! \n👉 Head to www.Nifty10.com on your desktop or mobile browser and enter your ‘mobile number’ to get the download link. \n👉 As an Android user, you can also download the Nifty10 app from the Google Play Store.",
    },
    {
      question: "What type of contests are available for participation?",
      answer:
        "Select the market trend, and pick your choice of preference contents slot and join by paying the entry amount.",
    },
    {
      question: "How to play Nifty 10?",
      answer:
        "Step 1: Login with Mobile number to register on Nifty10 App \nStep2: Select the market trend \nStep3: Pick up your choice of FIVE stocks and proceed to Bids slots \nStep4: Select your choice of bid slots and pay entry fee and join the contests \nStep5: Check the real time leaderboard for the winners",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Fantasy Section */}
      <section className="fantasy-section">
        <div className="content">
          <img src={fantasyGif} alt="Stock Icon" className="icon" />
          <h2>
            Play Fantasy Stocks on <span>Nifty10</span> and Win Real Cash!
          </h2>
          <p className="description">
            Fantasy Stocks prediction is an exciting game! Users can predict the
            performance of various stocks within a given timeframe, and those
            with the most accurate predictions can win <strong>real cash prizes</strong>.
          </p>
          <p className="description">
            It's a fun way to test your knowledge of the market trend and see
            how well you can predict stock movements.
          </p>
          <p className="note">
            🔔 Always invest responsibly and do your research before making any
            financial decisions.
          </p>
        </div>
      </section>

      {/* Steps to Play Section */}
      <section id="steps-to-play" className="steps-to-play section-padding">
        <div className="container">
          <h2 className="section-title">Steps to Play</h2>
          <div className="cards-container">
            <div className="card">
              <div className="icon-wrapper">
                <img src={registerGif} alt="Register Icon" />
              </div>
              <h3>Register</h3>
              <p>Sign up with your mobile number.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper">
                <img src={marketTrendGif} alt="Select Market Trend Icon" />
              </div>
              <h3>Select Market Trend</h3>
              <p>Choose your prediction for the market.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper">
                <img src={pickStocksGif} alt="Pick Stocks Icon" />
              </div>
              <h3>Pick Stocks</h3>
              <p>Select 5 stocks to create your team.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper">
                <img src={bidSlotsGif} alt="Choose Bid Slot Icon" />
              </div>
              <h3>Choose Bid Slot</h3>
              <p>Select your entry fee and join contests.</p>
            </div>

            <div className="card">
              <div className="icon-wrapper">
                <img src={leaderboardGif} alt="Track Performance Icon" />
              </div>
              <h3>Track Performance</h3>
              <p>Monitor real-time leaderboard and win prizes.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Steps to Play Section Video */}
      <section id="steps-to-play" className="steps-to-play">
        <div className="container">
          <h2 className="section-title">How to Play</h2>
          <p className="description">
            It's a fun way to test your knowledge of the market trend and see how well you can predict stock movements.
          </p>
          {/* Responsive YouTube Video */}

          <div className="responsive-video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/t2QJgJ27fF0?si=PHB5ojXXiDMHw5z2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials section-padding">
        <div className="container">
          <h2 className="section-title testimonial-title">Testimonials</h2>
          <h2 className="testimonial-subtitle">What our winners speaks</h2>
          <p className="testimonial-note">
            Just remember to always invest responsibly and do your research
            before making any financial decisions!
          </p>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <img src={pradeepImg} alt="Pradeep" className="user-image" />
              <p>
                “Nifty10 is an amazing platform that combines financial markets
                with fantasy gaming seamlessly.”
              </p>
              <span className="author">– Pradeep</span>
            </div>

            <div className="testimonial-card">
              <img src={sushmaImg} alt="Sushma" className="user-image" />
              <p>
                “A refreshing twist on stock market fantasy games that is
                engaging and rewarding.”
              </p>
              <span className="author">– Sushma</span>
            </div>

            <div className="testimonial-card">
              <img src={srinivasImg} alt="Srinivas Yadla" className="user-image" />
              <p>
                “It helped me hone my investment skills while having fun
                competing with others.”
              </p>
              <span className="author">– Srinivas Yadla</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="faqs section-padding">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={isOpen ? "rotated" : ""}
                  />
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section-padding">
        <div className="container">
          <h2>Contact Us</h2>
          <div
            id="contact"
            className="contact-container"
          >
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-description">
              I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form
              method="POST"
              action="https://api.web3forms.com/submit"
              className="contact-form"
            >
              <input
                type="hidden"
                name="access_key"
                value="d68f0f88-4737-492f-b0ec-c27b3361f85d"
              />

              <div className="contact-input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="contact-input"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="contact-input"
                  required
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Enter your Message"
                className="contact-textarea"
                required
              ></textarea>

              <button
                type="submit"
                className="contact-submit-button"
              >
                Submit now
                <img src={rightArrowWhite} alt="right arrow icon" className="contact-arrow-icon" />
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="testimonial-card">
              <h3>Corporate Office</h3>
              <p>
                #709, Gowra Fountain Head, HUDA Techno Enclave, Mindspace Rd,
                HITEC City, Hyderabad, Telangana 500081
              </p>
            </div>
            <div className="testimonial-card">
              <h3>Registered Office</h3>
              <p>
                8-3-231/A/278 & 279, Flat No. 404, Sri Krishna Nagar,
                Yousufguda, Khairatabad, Hyderabad – 500045, Telangana
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
