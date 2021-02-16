/**
 * Author: Tom Hayton
 * Description: Container for the portfolio section of the site
 */

 import React from 'react'
 import { Link } from 'react-router-dom'

 function PortfolioSection() {
   return (
     <section>
       <h1>Projects I've Worked on</h1>
       <h3>Remasters</h3>
       <p>Existing websites that I have recreated and then remastered using existing branding from the company</p>
       <div> {/**Project Card */}
        <h4>Freecycle</h4>
        <togglenbtn></togglenbtn>
        <divider></divider> 
        <div> {/* Project Preview section */}
          <div> {/* Responsive device icons */}
            <img alt="Preview project in desktop (4K) screen layout"/>
            <img alt="Preview project in desktop (standard) screen layout"/>
            <img alt="Preview project in tablet screen layout"/>
            <img alt="Preview project in mobile phone screen layout"/>
          </div>
          <img alt="Project preview shown in selected screen layout"/>
        </div>
          <div> {/*Text section*/}
            <h5>Description</h5>
            <p>Description Text</p>
            <h5>Improvements Made</h5>
            <span>Please see <Link>LINK TEXT</Link> for more information</span>
            <ul>
              <li>Improvements text</li>
            </ul>
            <div> {/**Technologies used */}
              <h5>Technologies Used</h5>
              <div> {/**Technology used logo's */}
                <img alt="React.js"/>
              </div>
            </div>
            <div> {/**Link Buttons */}
              <button>View Site</button>
              <button>View Code</button>
              <button>View Mockups</button>
              <button>View Docs</button>
            </div>
          </div>
       </div>
     </section>
   )
 }
 
 export default PortfolioSection