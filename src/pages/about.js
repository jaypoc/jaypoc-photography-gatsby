import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About Me">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 page">

            <h2>About Me</h2>
            
            <p>
            I am Jason “Jaypoc” Bauman. I am a hobbyist/semi-professional 
            photographer from St. Louis, Missouri with a passion for all 
            aspects of photography, especially portraiture and candid event 
            photography.
            </p>
            
            <img src="https://jaypoc.photography/wp-content/uploads/sites/4/2020/04/jaypoc-300x240.jpg" align="right" alt="Jason Bauman"/>
            
            <p>
            While I have always loved making pictures, my photographic 
            career started in New York, where I worked as a high school and 
            college portrait photographer for Empire Classics and Lors 
            Studios. The experience re-sparked my love of photography from 
            my youth. I’ve found great joy in working with people and in 
            capturing those special moments.
            </p>
            
            <p>
            I am the former organizer of the Long Island Portrait 
            Photography Workshop meetup group from Bethpage, New York. 
            Through this group, I brought local photographers and models 
            together to collaborate and larn from one another on all 
            aspects of portraiture, and photography in general.
            </p>

            <p>
            I have also volunteered my time as the official event 
            photographer for multiple New York based horror and science 
            fiction conventions and events. Many people know me from my 
            involvement with Twitchtwitch Productions (Macabre Faire Film 
            Festival, NY Horror Show, etc) and I-Con Science Fiction, Inc 
            (ICON-The northeast’s largest convention of science fiction, 
            fantasy and fact). I still try and make it to the local sci-fi, 
            horror, pop-culture, anime, and comic conventions to make 
            images of all the awesome cosplays and makeup.
            </p>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default AboutPage