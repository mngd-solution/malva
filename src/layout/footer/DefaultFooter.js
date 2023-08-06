import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top ">
          <div className="row align-items-center">

        
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>الشروط والأحكام</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      سياسة الخصوصية
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 wow fadeInLeft delay-0-2s animated">
                <p className="copyright-footer">
                  جميع الحقوق محفوظة @2023,{" "}
                  <Link legacyBehavior href="/">
                    <a>Malva Tech</a>
                  </Link>{" "}
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
