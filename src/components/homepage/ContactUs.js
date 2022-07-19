import React from 'react'
import Heading from '../Heading'

export default function ContactUs() {
  return (
      <div id="contact-us" className="page-container small-page">
          <Heading title={'Our Location'} isCenter={true }/>
          <div style={{marginTop: 50} }>
              <iframe title='Google Map' width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=25.350411,82.997122+(Celebrino)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
      </div>
  )
}
