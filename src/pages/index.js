import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps'
import male from '../assests/images/male.png'
import female from '../assests/images/female.png'
import Reveal from 'react-reveal/Reveal';

function Map() {
  return (
<GoogleMap 
defaultZoom={10}
defaultCenter={{lat:12.295810,lng:76.639381}}
/>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });

   
  }
 

  render() {
    
  
    
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">ABOUT US</h2>
                <hr className="divider light my-4"/>
                <Reveal bottom>
                <p className="text-white-50 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Reveal>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section>
       

        <section className="page-section" id="service">
          <div className="container">
            <h2 className="text-center mt-0">SERVICES</h2>
            <hr className="divider my-4"/>
            <Reveal cascade bottom>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Enim ad minim</h3>
                  <p className="text-muted mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Excepteur</h3>
                  <p className="text-muted mb-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Proident</h3>
                  <p className="text-muted mb-0">Sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Deserunt</h3>
                  <p className="text-muted mb-0">Duis aute irure dolor in reprehenderit in voluptate velit?</p>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>
        
        <section id="portfolio">
          <div className="container-fluid p-0">
          <h2 className="text-center mt-0">GALLERY</h2>
          <hr className="divider my-4"/>
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                    Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                    Image details
                    </div>
                    <div className="project-name">
                    Lorem ipsum dolor sit amet
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <Reveal bottom>
            <h2 className="mb-4">Download to know more! </h2>
            </Reveal>
            <a className="btn btn-light btn-xl" href="">Download Now!</a>
          </div>
        </section>
        <section className="page-section" id="events">
          <div className="container">
          <h2 className="text-center mt-0">EVENTS</h2>
          <hr className="divider my-4"/>
          <Reveal cascade bottom >
<div class="card card-cascade wider reverse">

  
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
      alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div class="card-body card-body-cascade text-center">

    
    <h4 class="card-title"><strong>EVENT TITLE</strong></h4>
    
    <h6 class="font-weight-bold indigo-text py-2">Event 1</h6>
    
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
      laborum ut beatae ullam suscipit veniam.
    </p>

    
    <p class="card-text"><i class="far fa-clock pr-3"></i>07/02/2018</p>

  </div>

</div>
<br></br>
<br></br>
<div class="card card-cascade wider reverse">

  
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
      alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div class="card-body card-body-cascade text-center">

    
    <h4 class="card-title"><strong>EVENT TITLE</strong></h4>
    
    <h6 class="font-weight-bold indigo-text py-2">Event 2</h6>
    
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
      laborum ut beatae ullam suscipit veniam.
    </p>

    
    <p class="card-text"><i class="far fa-clock pr-3"></i>24/05/2017</p>

  </div>

</div>
<br></br>
<br></br>
<div class="card card-cascade wider reverse">

  
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
      alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div class="card-body card-body-cascade text-center">

    
    <h4 class="card-title"><strong>EVENT TITLE</strong></h4>
    
    <h6 class="font-weight-bold indigo-text py-2">Event 3</h6>
    
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
      laborum ut beatae ullam suscipit veniam.
    </p>

    
    <p class="card-text"><i class="far fa-clock pr-3"></i>08/04/2020</p>

  </div>

</div>
</Reveal>

          </div>
          </section>

        <section className="page-section" id="team">
          <div className="container">
          <h2 className="text-center mt-0">TEAM</h2>
          <hr className="divider my-4"/>
         
  <div class="row">

    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img src={female} class="male-avatar"
          alt="" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Anna Williams</h5>
      <p class="text-uppercase blue-text"><strong>Graphic designer</strong></p>
      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p>
      <ul class="list-unstyled mb-0">
        
        <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        
        <a class="p-2 fa-lg tw-ic" href="https://twitter.com/home">
          <i class="fab fa-twitter blue-text"> </i>
        </a>
      
        <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
   
    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
    <div class="avatar mx-auto">
        <img src={male} class="male-avatar"
          alt="" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
      <p class="text-uppercase blue-text"><strong>Web developer</strong></p>
      <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
        doloremque rem laudantium totam aperiam.</p>
      <ul class="list-unstyled mb-0">
        
        <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
       
        <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
   
    <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
    <div class="avatar mx-auto">
        <img src={female} class="male-avatar"
          alt="" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Maria Smith</h5>
      <p class="text-uppercase blue-text"><strong>Photographer</strong></p>
      <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim est fugiat nulla id eu laborum.</p>
      <ul class="list-unstyled mb-0">
       
        <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        
        <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
       
        <a class="p-2 fa-lg ins-ic" href="https://dribbble.com/">
          <i class="fab fa-dribbble blue-text"> </i>
        </a>
      </ul>
    </div>
 
    <div class="col-lg-3 col-md-6">
    <div class="avatar mx-auto">
        <img src={male} class="male-avatar"
          alt="" />
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Tom Adams</h5>
      <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
      <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
        totam officia voluptates perferendis voluptatibus aut.</p>
      <ul class="list-unstyled mb-0">
        
        <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
       
        <a class="p-2 fa-lg ins-ic" href="https://github.com/">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
 

  </div>
 
  <div class="row">

 
<div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
  <div class="avatar mx-auto">
    <img src={female} class="male-avatar"
      alt="" />
  </div>
  <h5 class="font-weight-bold mt-4 mb-3">Jaden Smith</h5>
  <p class="text-uppercase blue-text"><strong>Graphic designer</strong></p>
  <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
    adipisci sed quia non numquam modi tempora eius.</p>
  <ul class="list-unstyled mb-0">
    
    <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
      <i class="fab fa-facebook-f blue-text"> </i>
    </a>
    
    <a class="p-2 fa-lg tw-ic" href="https://twitter.com/home">
      <i class="fab fa-twitter blue-text"> </i>
    </a>
  
    <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
      <i class="fab fa-instagram blue-text"> </i>
    </a>
  </ul>
</div>

<div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
<div class="avatar mx-auto">
    <img src={male} class="male-avatar"
      alt="" />
  </div>
  <h5 class="font-weight-bold mt-4 mb-3">Robert William</h5>
  <p class="text-uppercase blue-text"><strong>Web developer</strong></p>
  <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
    doloremque rem laudantium totam aperiam.</p>
  <ul class="list-unstyled mb-0">
    
    <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
      <i class="fab fa-facebook-f blue-text" > </i>
    </a>
   
    <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
      <i class="fab fa-instagram blue-text"> </i>
    </a>
  </ul>
</div>

<div class="col-lg-3 col-md-6 mb-md-0 mb-5">
<div class="avatar mx-auto">
    <img src={female} class="male-avatar"
      alt="" />
  </div>
  <h5 class="font-weight-bold mt-4 mb-3">Emily Gilbert</h5>
  <p class="text-uppercase blue-text"><strong>Photographer</strong></p>
  <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim est fugiat nulla id eu laborum.</p>
  <ul class="list-unstyled mb-0">
   
    <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
      <i class="fab fa-facebook-f blue-text" > </i>
    </a>
    
    <a class="p-2 fa-lg ins-ic" href="https://www.instagram.com/">
      <i class="fab fa-instagram blue-text"> </i>
    </a>
   
    <a class="p-2 fa-lg ins-ic" href="https://dribbble.com/">
      <i class="fab fa-dribbble blue-text"> </i>
    </a>
  </ul>
</div>

<div class="col-lg-3 col-md-6">
<div class="avatar mx-auto">
    <img src={male} class="male-avatar"
      alt="" />
  </div>
  <h5 class="font-weight-bold mt-4 mb-3">Damon Salvatore</h5>
  <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
  <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
    totam officia voluptates perferendis voluptatibus aut.</p>
  <ul class="list-unstyled mb-0">
    
    <a class="p-2 fa-lg fb-ic" href="https://www.facebook.com/">
      <i class="fab fa-facebook-f blue-text" > </i>
    </a>
   
    <a class="p-2 fa-lg ins-ic" href="https://github.com/">
      <i class="fab fa-github blue-text"> </i>
    </a>
  </ul>
</div>


</div>


            </div>
            </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <Reveal bottom>
                <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an
                  email
                  and we will get back to you as soon as possible!</p>
                  </Reveal>
              </div>
            </div>
            <Reveal cascade bottom>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div><a href="tel:+918105528952">+91 8105528952</a></div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:someone@gmail.com">someone@gamil.com</a>
              </div>
            </div>
            </Reveal>
           
          </div>
         
        </section>
        <section className="page-section" id="googlemap">
        <div className="container text-center">
        <h2 className="text-center mt-0">MAP</h2>
          <hr className="divider my-4"/>
        <div style={{height:'400px',width:'100%'}}><WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyD5RMZSp2aAaISYvwKFPhZ1Al6bZ6CtqUA&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
        >
           <Marker position={{ lat: 12.295810, lng:76.639381  }} />
          </WrappedMap>
        </div>
        </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
