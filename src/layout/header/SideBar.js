import { Fragment } from "react";
const SideBar = () => {
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>ابقى على تواصل</h4>
          </div>
          {/*Appointment Form*/}
          {/* <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="اسمك" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الالكتروني"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="الرسالة" rows={5} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  ارسال
                </button>
              </div>
            </form>
          </div> */}
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
