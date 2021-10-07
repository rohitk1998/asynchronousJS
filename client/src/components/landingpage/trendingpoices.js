import TrendingBlogCard from "../common/trendingblogs";


const TrendingTopices = ({ data }) => {
  return (
    <>
      <div className="container-fluid w-100 landing-age-trending-topcies">
        <div className="row p-3">
          <div className="col-sm-12 col-lg-12">
            <h1 className="h1 p-2">Trending programming Topics</h1>
          </div>
        </div>
        {console.log(data)}
        <div className="row p-2">
          {data.length !== 0
            ? data.map((blog, index) => {
                return (
                  <div key={index} className="col-lg-3 col-sm-6 mt-4 mb-4">
                    <TrendingBlogCard blogdata={blog} />
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
