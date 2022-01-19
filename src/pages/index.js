import * as React from "react"
import { Link } from "gatsby"
import LayoutSingle from '../components/layout-single'

const IndexPage = () => {
  return (
    <LayoutSingle pageTitle="Homepage">
    <div class="container">
      <div class="row">
        
        <div class="col-sm">
          <div class="card" style={{width: "18rem;"}}>
            <Link class="linked" to="/photography/portraits"><img class="card-img-top" src="https://jaypoc.photography/wp-content/uploads/sites/4/2019/01/IMGL8413-Edit-2-1-1024x683.jpg" alt="Portraits & Headshots"/></Link>
            <div class="card-body text-center">
            <Link class="linked" to="/photography/portraits">Portraits &amp; Headshots</Link>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" style={{width: "18rem;"}}>
            <Link class="linked" to="/photography/eventphotos"><img class="card-img-top" src="https://jaypoc.photography/wp-content/uploads/sites/4/2015/11/jaypoc-bellydance-001.jpg" alt="Event Photography"/></Link>
            <div class="card-body text-center">
            <Link class="linked" to="/photography/eventphotos">Event Photography</Link>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" style={{width: "18rem;"}}>
            <Link class="linked" to="/photography/travel"><img class="card-img-top" src="https://jaypoc.photography/wp-content/uploads/sites/4/2019/01/J30A3691_edit-1024x682.jpg" alt="Card image cap"/></Link>
            <div class="card-body text-center">
              <Link class="linked" to="/photography/travel">Landscape &amp; Travel</Link>
            </div>
          </div>
        </div>
      
      </div><br />
      <div class="row">  

      <div class="col-sm">
          <div class="card" style={{width: "18rem;"}}>
            <Link class="linked" to="/photography/personalprojects"><img class="card-img-top" src="https://jaypoc.photography/wp-content/uploads/sites/4/2015/11/personalprojects0011.jpg" alt="Card image cap"/></Link>
            <div class="card-body text-center">
              <Link class="linked" to="/photography/personalprojects">Personal Projects</Link>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" style={{width: "18rem;"}}>
            <Link class="linked" to="/photography/community"><img class="card-img-top" src="https://jaypoc.photography/wp-content/uploads/sites/4/2019/01/DSCF1462-HDR-1024x683.jpg" alt="Card image cap"/></Link>
            <div class="card-body text-center">
              <Link class="linked" to="/photography/community">Community</Link>
            </div>
          </div>
        </div>

      
      </div>
    </div>

    </LayoutSingle>
 )
}

export default IndexPage
