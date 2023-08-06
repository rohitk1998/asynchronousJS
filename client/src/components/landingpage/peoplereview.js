import "../../App.css";
const reviewData = [
  {
    image:
      "https://images.unsplash.com/photo-1617376431454-8195cf1fd668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tellings:
      "It's important to remember that marriage is a deeply personal experience, and people's reviews will be shaped by their unique circumstances, personalities, and choices. What matters most is how each individual and couple actively work to build and maintain a healthy, loving, and fulfilling partnership. Communication, empathy, and mutual respect play vital roles in creating a positive and lasting marriage.",
    experience: "good",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617376431454-8195cf1fd668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tellings:
      "It's important to remember that marriage is a deeply personal experience, and people's reviews will be shaped by their unique circumstances, personalities, and choices. What matters most is how each individual and couple actively work to build and maintain a healthy, loving, and fulfilling partnership. Communication, empathy, and mutual respect play vital roles in creating a positive and lasting marriage.",
    experience: "great",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617376431454-8195cf1fd668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tellings:
      "It's important to remember that marriage is a deeply personal experience, and people's reviews will be shaped by their unique circumstances, personalities, and choices. What matters most is how each individual and couple actively work to build and maintain a healthy, loving, and fulfilling partnership. Communication, empathy, and mutual respect play vital roles in creating a positive and lasting marriage.",
    experience: "happy",
  },
];

export default function Reviews() {
  return (
    <div className="review-section p-0 m-0 container-fluid">
      <div className="review-section-card-container row">
        {reviewData.map((item) => {
          return (
            <div className="col-lg-3 p-2 m-2">
            <div className="review-section-card">
            <img className="card-img" src={item.image} width={100} height={100} />
              <p className="card-text">{item.tellings}</p>
              <h6 className="card-experience">{item.experience}</h6>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
