import { BlogCard } from "../common/blogcard";
const TrendingTopices = ({ data }) => {
  return (
    <>
      <div className="container-fluid w-100 landing-age-trending-topcies">
        <div className="row p-3">
          <div className="col-sm-12 col-lg-12">
            <h1 className="h1 p-2">Trending programming Topics</h1>
          </div>
        </div>
        <div className="row mt-4 p-2">
          {data !== undefined
            ? data.getBlogList.map((blog, index) => {
                return (
                  <div key={index} className="col-lg-4 col-sm-4">
                    <BlogCard blogdata={blog} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default TrendingTopices;
