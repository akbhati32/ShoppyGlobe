import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home = () => {

// Hero & Banner section

  const textList = [
    {
      id: 1,
      title: "Big Sale, ",
      subtitle: "Bigger Savings!",
      description:
        "“Up to 70% off – Don’t miss out!”",
    },
    {
      id: 2,
      title: "Glow ",
      subtitle: "Like Never Before",
      description:
        "“Top skincare, makeup & beauty brands – all in one place.”",
    },
    {
      id: 3,
      title: "Fresh. Fast. ",
      subtitle: "At Your Door.",
      description:
        "“Groceries made easy – shop daily essentials & save time.”",
    },
    {
      id: 4,
      title: "Transform ",
      subtitle: "Your Space with Style",
      description:
        "“Elegant furniture for modern living – comfort meets design.”",
    },
  ];

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] duration-200 lg:px-12 px-5 bg-[url('/banner-bg.png')] bg-cover bg-center">
      
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {textList.map((data, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                
                {/* text content section */}
                <div className="flex flex-col gap-6 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 mt-12">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                  >
                    {data.title} <br/> {data.subtitle}
                  </h1>
                  <p 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-xl text-main"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Link to="/products">
                      <button className="btn2 text-main hover:text-white hover:border-0">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
    </>
  )
}

export default Home;