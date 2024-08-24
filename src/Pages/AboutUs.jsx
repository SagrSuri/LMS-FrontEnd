import aboutMainImage from '../assets/aboutMainImage.png'
import CarouselSlide from '../Components/CarouselSlide'
import { celebrities } from '../Constants/CelebrityData'
import HomeLalyout from "../Layouts/HomeLayout";



function AboutUs() {
  return (
    <HomeLalyout>
          <div className="pl-20 pt-20 flex flex-col text-white">
              <div className="flex items-center gap-5 mx-10">
                  <section className="w-1/2 space-y-10">
                      <h1 className="text-5xl text-yellow-500 font-semibold">
                          Affordable and Quality education
                      </h1>
                      <p className="text-xl text-gray-200">
                          Our goal is to provide affordable and quality education to the world.
                          We are providing the platform for the expiring teachers and students to share there skills, creativity and knowledge to each other to empower to contribute in the growth and wellness of mankind.
                      </p>
                  </section>
                  <div className="w-1/2">
                      <img
                          id='test1'
                          style={{
                              filter: 'drop-shadow(0px 10px 10px rgb(0, 0, 0))'
                          }}
                          className='drop-shadow-2xl'
                          src={aboutMainImage} alt="aboutMainImage" />
                  </div>
              </div>


              <div className="carousel w-[70%] my-16 m-auto">
                  {celebrities && celebrities.map(celebrity => (<CarouselSlide
                      {...celebrity}
                      key={celebrity.slideNumber}
                      totalSlides={celebrities.length} />))}
              </div>
          </div>
    </HomeLalyout>
  )
}

export default AboutUs;