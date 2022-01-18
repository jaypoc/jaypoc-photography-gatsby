import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About Me">
          <div class="container">
            <div class="row">
              <div class="col-sm-9 page">

              </div>
              <div class="col-sm-3">
                <div class="alert alert-danger">TEST</div>
                <div class="alert alert-default">TEST</div>
                <div class="alert alert-info">TEST</div>
                <div class="alert alert-warning">TEST</div>
              </div>
            </div>
          </div>
          <p>Hello, there. It's me!</p>
          * Test
          ```sql
          select * from table
          ```
    </Layout>
  )
}

export default AboutPage