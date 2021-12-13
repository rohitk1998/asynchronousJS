





const TrendingBlogCard = ({blogdata})=> {
  console.log("blogdata" , blogdata );
    return (
        <div className="trending-blog-card">
            <div className="row">
          <img
            src={blogdata.post_tumbnail}
            className="trending-blog-card-thumbnail"
            alt=""
          />
            </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 mt-1">
          <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-start mt-3">
            <img
              class="user-avatar"
              src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />

            <h6 className="h5 p-2 text">
              {" "}
              New User
            </h6>

            <h6 className="h6 p-2 text-muted"> 29 September 2021</h6>
          </div>

          <div className="container-fluid d-block flex-column flex-nowrap align-items-start  justify-content-start flex-grow-1 mt-3">
            <h5 className="display-8 text-right text-truncate">
                {blogdata.post_title}
              
            </h5>
            <p className="h6 text-right text-truncate">
            {blogdata.post_subtitle}

            </p>
          </div>
          <div className="container-fluid d-flex flex-row flex-wrap align-items-center  justify-content-start">
            <p className="text-muted text-center mt-2">5min Read</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TrendingBlogCard ; 