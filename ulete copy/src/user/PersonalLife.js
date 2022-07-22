import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import sport from '../img/sport-fct.png';
import pl from '../img/introduction.png';
import book from '../img/book.png';

const PersonalLife = ({moodName, factor, setFactor, page, setPage}) => {

    const [selected, setSelected] = useState('sports');

    function handleChange(e){
        setSelected(e.target.value);
        setFactor(e.target.value);
    } 

    function goNextPage(){
        setPage(page => page + 1);
    }

    function goBackPage(){
        setPage(page => page - 1)
    }


    return ( 
        <div className="p-life">
            <h5 className="fw-bold">Looks like you're feeling <b className="insertTxt">{moodName}</b></h5>
            <p>What focus area is contributing the most to this feeling?</p>
            <div className="options">
                <div className="form-check form-check-inline">
                    <input value='sports' checked={selected === 'sports'} className="btn-check" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={handleChange}/>
                    <label className="btn btn-outline-primary" for="inlineRadio1"><img src={sport} alt="sports-icon"></img> <br></br>My Sport Skills</label>
                </div>
                <div className="form-check form-check-inline">
                    <input value='personal' checked={selected === 'personal'} className="btn-check" type="radio" name="inlineRadioOptions" id="inlineRadio2"  onClick={handleChange}/>
                    <label className="btn btn-outline-primary" for="inlineRadio2"><img src={pl} alt="handshake-icon"></img> <br></br>My Personal Life</label>
                </div>
                <div className="form-check form-check-inline">
                    <input value='academics' checked={selected === 'academics'} className="btn-check" type="radio" name="inlineRadioOptions" id="inlineRadio3" onClick={handleChange}/>
                    <label className="btn btn-outline-primary" for="inlineRadio3"><img src={book} alt="books-icon"></img> <br></br> My Academics</label>
                </div> 
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <div className="back-btn mt-5">
                        <button onClick={goBackPage} className='btn btn-secondary'>Back</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="next-btn mt-5">
                        <button onClick={goNextPage} className='btn btn-primary'>Next</button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default PersonalLife;