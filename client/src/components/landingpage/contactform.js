import "../../App.css";

export default function ContactForm() {
  return (
    <div className="contact-form container-fluid p-0">
      <div className="opening-hours">
        <h3 className="contact-menu-title">Opening Hours</h3>
        <ul>
          <li> Mon : 10:00AM to 6:00PM</li>
          <li> Tue : 10:00AM to 6:00PM</li>
          <li> Wed : 10:00AM to 6:00PM</li>
          <li> Thr : 10:00AM to 6:00PM</li>
          <li> Fri : 10:00AM to 6:00PM</li>
        </ul>
      </div>
      <div className="opening-hours">
        <h3 className="contact-menu-title">Service</h3>
        <p>About</p>
        <p>Gallery</p>
        <p>Review</p>
        <p>Message</p>
      </div>
      <div className="opening-hours">
        <h3 className="contact-menu-title">Contact</h3>
        <h6>Sunny Enclave , 106 Mohali , 140301 Punjab</h6>
        <p>Phone no : 2393-2922-40</p>
      </div>
    </div>
  );
}
