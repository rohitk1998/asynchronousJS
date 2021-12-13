export const BlogCard = ({blogdata}) => {
  return (
    <div className="container-fluid blog-card mt-1 mb-5 p-0 rounded h-fit-content">
      <div className="row">
        <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
          <img
            src={"https://images.unsplash.com/photo-1638225514957-12eb81bf8a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
            className="blog-card-thumbnail"
            alt=""
          />
        </div>
        <div className="col-sm-12 col-lg-8 mt-1">
          <div className="container-fluid d-flex flex-nowrap align-items-center  justify-content-start flex-grow-1">
            <img
              class="user-avatar"
              src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />

            <h6 className="h5 p-2 text">
              {" "}
              <strong>New User</strong>
            </h6>

            <h6 className="h6 p-2 text-muted"> 29 September 2021</h6>
          </div>

          <div className="container-fluid d-block flex-column flex-nowrap align-items-start  justify-content-start flex-grow-1 mt-2">
            <h4 className="display-8 text-right text-truncate">
              <strong>
                {blogdata.blog_title}
              </strong>
            </h4>
            <h5 className="h6 text-right text-truncate">
              9-5 Employees Keep Telling Themselves the Lie “One More Year”
            </h5>
          </div>
          <div className="container-fluid d-flex flex-row flex-wrap align-items-center  justify-content-start">
            <p className="text-muted text-center mt-2">5min Read</p>
          </div>
        </div>
      </div>
    </div>
  );
};
