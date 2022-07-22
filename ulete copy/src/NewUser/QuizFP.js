import Container from 'react-bootstrap/Container';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import welcome from '../img/wpI.png'


const QuizFP = () => {
    return ( 
        <div className="q-first-page">
            <Container display="flex">
                <div className="prog-bar">
                    {/*The progress bar goes here*/}
                </div>
                <div className="back-btn">
                    <Link to="/" className="text-left fw-bold btn-secondary"><h4><i class="bi bi-box-arrow-left"></i></h4></Link>
                    
                </div>
                <div className="card text-center">
                    <div className="card-body">
                        <img src={welcome} className="welcom-img" alt="athletes-welcome"></img>
                        <h3 className="card-title-quiz mt-5">Welcome to Ulete, we are so excited to help you achieve balance as a student-athlete</h3>
                        <Link to="/questions" className="btn btn-primary text-center fw-bold mt-3"> Next </Link>
                    </div>
                </div>
            </Container>
        </div>


     );
}
 
export default QuizFP;