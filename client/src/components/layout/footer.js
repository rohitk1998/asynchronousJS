import fbicon from "../../assests/icons/fbicon.png";
import googleicon from "../../assests/icons/googleicon.png";
import hearticon from "../../assests/icons/hearticon.png";

const AppFooter = () => {
  return (
    <div className="app-footer">
      <div className="row p-5 m-0">
        <div className="col-sm-4">
        <h2 className="text-light">Some Links : </h2>
          <p className="text-light">Home</p>
          <p className="text-light">blog</p>
          <p className="text-light">javascript</p>
          <p className="text-light">about</p>
        </div>
        <div className="col-sm-4">
        <h2 className="text-light">Recent Post Tags : </h2>
          <p className="text-light">React</p>
          <p className="text-light">Security</p>
          <p className="text-light">Javascript</p>
          <p className="text-light">Sql</p>
        </div>
        <div className="col-sm-4 h-100">
          <img src={fbicon} className="fb-icon" />
          <img src={googleicon} className="fb-icon" />
          <img src={hearticon} className="fb-icon" />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
