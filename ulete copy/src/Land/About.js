import Container from 'react-bootstrap/Container';
import hero from '../img/heroImage.png';

const About = () => {
    return (  
    <div className="about" id="about">
        <Container display="fluid">
            <div className="row align-items-center justify-content-center pt-3 text-light">
                <div className="col-lg-6 hero-img">
                    <img src={hero} className="" alt="sports"/>
                </div>
                <div className="col-lg-6 d-flex flex-column">
                    <div className="land mx-auto d-block">
                        <div className="about-txt-head">
                            <h1>Ulete creates elite student athletes</h1>
                        </div>
                        <div className="about-txt-body mt-3">
                            <p>Are you ready to take your game to the next level? Ulete is a holistic wellness app for student athletes like you. We have a mood tracker, journals, and a curated development center to help you dominate all areas.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
         {/*Features Section Start*/}
         <div className="features py-5">
                <Container display="flex">
                    <div className="circle-graphic"></div>
                    <div className="features-txt-head px-5">
                        <h1>We know finding balance can be hard. Here’s how we can make it a little easier.</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 px-5">
                            <div className="card ft-cards">
                                {/*image here*/}
                                <div className="card-body">
                                    <h5 className="card-title">Performance Trackers</h5>
                                    <p className="card-text">Our trackers keep you informed and reveal what factors contribute the most to your wellbeing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 px-5">
                            <div className="card ft-cards">
                                {/*image here*/}
                                <div className="card-body">
                                    <h5 className="card-title">Development Center</h5>
                                    <p className="card-text">It’s all about growth. We have curated articles, videos, and exercises to help develop your skills and learn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 px-5">
                            <div className="card ft-cards">
                                {/*image here*/}
                                <div className="card-body">
                                    <h5 className="card-title">Daily Goals</h5>
                                    <p className="card-text">We empower you to hit your goals at a pace that’s comfortable for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/*Features Section End*/}
    </div> );
}
 
export default About;