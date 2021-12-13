import React from "react";

function Card1() {
  return (
    <div className="container-fluid text-center"> 
     <div className="row">
       <div className="col-sm-12">
        <h2 style={{fontWeight:'600'}}>In Software, When an Engineer Exits the Team</h2>
        <p style={{ color: "gray", fontSize: "18px" }}>
          My perspective when a team member gives their notice
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 mt-1 ">
          <img
            src="https://miro.medium.com/fit/c/28/28/1*ClBwHgX1vkfQb8gGqQTA7w.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "2px solid green",
              padding: "1.5px",
            }}
            alt=""
          />
          <span style={{ color: "green", paddingLeft: "8px" }}>Doug Arcur</span>
        </div>
        <div className="col-4 pt-2">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>Sep 28</p>
            <span>2 min read</span>
          </div>
        </div>
      </div>
      <div className="body">
      
        <div className="col-12 mt-2 text-start">
        <img
            src="https://miro.medium.com/max/700/1*FMNhW_BX4aus76enkDi9bg.jpeg"
            style={{ width: "50%", height: "50%" ,objectFit:'cover'}}
            alt=""
          />
          <div className='container' style={{width:'90%'}} >
          <p style={{marginTop:'10px'}}>
            Being a software engineering manager has its difficult people bits.
            When a team member gives their notice to leave, it’s personal and
            straightforward.
          </p>
       
        <div className="col-12">
          <h4 style={{fontWeight:'600'}}>When the Notice is Given</h4>
          <p>
            I knew that the notice was coming. It would be rare that I was
            caught off-guard. The lingering spidey sense I’ve felt had been
            correct. I’ve lived with the “yeah, it’s coming” weeks prior. The
            tip-off was the questions they ask, the doubts they have, and odd
            days out of office. And for those that care, a burst of
            contributions.
          </p>
        </div>
        <div className='footer'>
          <div className='col-12' style={{ borderBottom: '1px solid gray' }}>
            <h4 style={{fontWeight:'600'}}>More from Async</h4>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'12px',marginBottom:'15px'}}>
     
              <div className='col-3'>  <h6>Communication in Modern Family</h6>
                <p>Austin Wojciehowski</p></div>
              <div className='col-3'>
                <img src='https://miro.medium.com/max/700/1*FMNhW_BX4aus76enkDi9bg.jpeg' style={{ width: '65px', height: '65px' }} alt=''/>
              </div>

              <div className='col-3'>  <h6>Communication in Modern Family</h6>
                <p>Austin Wojciehowski</p></div>
              <div className='col-3'>
                <img src='https://miro.medium.com/max/700/1*FMNhW_BX4aus76enkDi9bg.jpeg' style={{ width: '65px', height: '65px' }} alt='' />
              </div>
       
          </div>

        </div>
        </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Card1;
