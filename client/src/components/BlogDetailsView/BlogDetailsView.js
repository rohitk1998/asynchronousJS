import React from "react";
import { useState } from "react";
import { useEffect , useDispatch , useSelector} from "../../Common/files"
import { getPostDataByPostID } from "../../redux/actions/useraction";

function BlogDetailView() {

  const [postdata , setPostData] = useState({}) ; 

  const dispatch = useDispatch()

  const getStates = useSelector((state)=>{
    return{
      postdetail : state?.blogs?.post_details
    }
  })

  const POSTID = (window.location.pathname).split('/')[2]

  useEffect(()=>{
     getPostById()
  },[])

  const getPostById = ()=>{
dispatch(getPostDataByPostID({postid : POSTID }))
  }

  useEffect(()=>{
    console.log("getStates",getStates);
    if(getStates?.postdetail){
      setPostData(getStates?.post_details)
    }
  },[getStates])
  return (
    <div className="container-fluid d-flex justify-content-center align-items-start p-0">
      <div className="card border-0" style={{minWidth:"70%"}}>
        <div className="card-body">
        <div className="row mt-5">
        <div className="col">
          <div className="h2">
            <strong>{getStates?.postdetail?.post_title}</strong>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
        <img className="blogdetailavatar" src={getStates?.postdetail?.post_tumbnail} />
        </div>
        <div className="col-11">
        <div className="container d-flex justify-content-start align-items-start p-0">
            <div className="container d-flex flex-column justify-content-start align-items-start m-0 p-0">
            <p className="m-0">Rohit sankhyan</p>
            <p className="mt-2">Phublished On : 20 Dec 2021</p>
            </div>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col">
        <img className="blog-detail-tumbnail" src={getStates?.postdetail?.post_tumbnail} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="container d-flex flex-row justify-content-start align-item-start flex-wrap p-0">
            <h5><strong>{getStates?.postdetail?.post_body}</strong></h5>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailView;
