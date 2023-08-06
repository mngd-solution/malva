import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const Faqs = () => {
  const accordionData = [
    { id: 1, title: "السؤال الأول" },
    { id: 2, title: "السؤال الثاني" },
    { id: 3, title: "السؤال الثالث" },
    { id: 4, title: "السؤال الرابع" },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"الاسئلة الشائعة"} />
      {/* Page Banner End */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-5">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-two.jpg" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">الاسئلة الأكثر شيوعا</span>
                  <h2>لو ما لقيت الأجوبة الي تدورها راسلنا وازهلها</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-shapes">
          <img
            className="shape left"
            src="assets/images/shapes/ellipse-left.png"
            alt="Shape"
          />
          <img
            className="shape right"
            src="assets/images/shapes/ellipse-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* FAQ's Area end */}
     
      
      {/* footer area start */}
    </Layout>
  );
};
export default Faqs;
