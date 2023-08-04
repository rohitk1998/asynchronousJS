import insta from "../../assests/icons/instagram.png"


export default function SideBar(){
    return(
        <div className="container app-sidebar">
         <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center">
                <img width={40} height={40} src={insta} />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center">
            <img width={40} height={40} src={insta} />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center">
            <img width={40} height={40} src={insta} />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center">
            <img width={40} height={40} src={insta} />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center align-items-center">
            <img width={40} height={40} src={insta} />
            </div>
         </div>
        </div>
    )
}