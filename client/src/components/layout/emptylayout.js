import Navbar from "./navbar";

const EmptyLayout = ({children})=>{
    return(
        <div className="empty-layout">
          <Navbar/>
          {children}
        </div>
    )
}

export default EmptyLayout