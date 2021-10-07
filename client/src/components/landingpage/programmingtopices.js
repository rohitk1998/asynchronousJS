import Sticky from "react-sticky-el";
import { BlogCard } from "../common/blogcard";

const ProgrammingTopices = ({ data }) => {
  return (
    <>
      <div className="container-fluid w-100 vh-70 p-3 mt-3">
        <div className="row">
          <div className="col-lg-5">
            <div className="container">
              <Sticky>
                <h4 className="h3">Related Programming Tags : </h4>
              </Sticky>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="row">
              {data.length !== 0
                ? data.map((blog, index) => {
                    return (
                      <div key={index} className="col-lg-12 col-sm-6">
                        <BlogCard blogdata={blog} />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingTopices;
