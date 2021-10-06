import fbicon from "../../assests/icons/fbicon.png"
import googleicon from "../../assests/icons/googleicon.png"
import hearticon from "../../assests/icons/hearticon.png"


const AppFooter = () => {
  return <div className="app-footer">
      <div className="row p-5 m-0">
      <div className='col-sm-4'>
       <h3>Home</h3>
       <h3>blog</h3>
       <h3>javascrih3t</h3>
       <h3>about</h3>
      </div>
      <div className='col-sm-4'>
       <h3>Home</h3>
       <h3>blog</h3>
       <h3>javascrih3t</h3>
       <h3>about</h3>
      </div>
      <div className='col-sm-4 h-100'>
       <img src={fbicon} className="fb-icon"/>
       <img src={googleicon} className="fb-icon"/>
       <img src={hearticon} className="fb-icon"/>
       {/* <img src={fbicon} className="fb-icon"/> */}
      </div>
      </div>
  </div>;
};

export default AppFooter ; 