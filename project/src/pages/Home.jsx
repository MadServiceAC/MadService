import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {homeSection} from '../data/HomeSection'
import {coursesSection} from '../data/CoursesSection'
import {tutorsSection, tutorsList} from '../data/TutorsSection'
import {partnersSection, partnersList} from '../data/PartnersSection'
import {contactSection} from '../data/ContactSection'

import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import parse from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  // Utility function to ensure the content is a string
  const safeParse = (content) => {
    return typeof content === 'string' ? parse(content) : null;
  };

  return (
    <>
      <Navbar />
      <div className='Wrapper'>
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} alt="Home Section" />
          <div className="kolom">
            {safeParse(homeSection.content)}
          </div>
        </section>
        {/* Online Course */}
        <section id="courses">
          <div className="kolom">
            {safeParse(coursesSection.content)}
          </div>
          <img src={coursesSection.image} alt="Courses Section" />
        </section>
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {safeParse(tutorsSection.content)}
            </div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* Partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {safeParse(partnersSection.content)}
            </div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  )
}

export default Home
