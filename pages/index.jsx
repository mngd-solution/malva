import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1 className='herro'>
                نسخر التقنية  <br /><span className='herro-span'>لتنمية الغطاء النباتي</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/hero.jpg" alt="Hero" />
            <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-dribbble" /> <span>Dribbble</span>
              </a>
              <a href="#">
                <i className="fab fa-behance" /> <span>Behance</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1" id='about'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className=" ">
                <img
                  src="assets/images/about/circle-text.jpg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">عن مالفا</span>
                  <h2>
                    نسخر التقنية لتنمية الغطاء النباتي بالمملكة العربية السعودية

                  </h2>
                </div>
                <div className="content">
                  <p>
                  تم بفضل من الله التفاهم مع  العديد من  شركات القطاع الخاص ومشاريع الافراد الخاصة  للاستفادة من نسخة مالفا وكذلك لتأمين عدّة متطلبات برمجية تساهم في حلول مُبسطة وسريعة لخدمة 
زراعة ومتابعة وتسويق 
النباتات في المملكة العربية السعودية 
                  </p>
                  {/* <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
               <span>Malva</span> Tech
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1" id='vision'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">رؤيتنا وسالتنا</span>
                  <h2>رؤيتنا ورسالتنا التي نطمح أن يصل إليها تأثير مالفا تك</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5> التطوير</h5>
                    <p>
تطوير وتنمية الغطاء النباتي بالمملكة العربية السعودية
                    </p>
                    
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5> المساهمة</h5>
                    <p>
المساهمة في تحقيق أهداف رؤية 2030 في تنمية وتخضير المدن
                    </p>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>التثقيف</h5>
                    <p>
                      التثقيف وزيادة الوعي لدى المجتمع بأهمية النباتات
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/services/what-we-do.jpg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1" id='malva-no'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">نبتة مسجلة</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">العملاء</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">الدراسات العلمية</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">شركاء نجاح</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="how-we-works-area pt-90 pb-100 rpb-70 rel z-1" id='whats-malva'>
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">ماهو نظام مالفا تك؟</span>
            <h2>نهدف من خلال تطوير انظمة مالفا تك إلى أن يكون</h2>
          </div>
          <div className="row gap-90">
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-2s">
                <span className="step-number">أولاً</span>
                <h4 className="title">مرجع إلكتروني</h4>
                <div className="content">
                  <p>للنباتات المتواجدة في الغطاء النباتي بالمملكة يحتوي على كافة المعلومات العلمية المتعلقة بالنباتات</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-3s">
                <span className="step-number">ثانياً</span>
                <h4 className="title">نظام إلكتروني</h4>
                <div className="content">
                  <p>نظام الكتروني متكامل لرقمنة النباتات بالمملكة ولإدارة المزارع والمشاتل والمزروعات في الجهات الحكومية</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-4s">
                <span className="step-number">ثالثاً</span>
                <h4 className="title">دليل إلكتروني</h4>
                <div className="content">
                  <p>دليل الكتروني لمعرفة كافة تفاصيل النباتات وخواصها والعناية بها وربطها وطريقة التعامل معها باحترافية</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">رابعاً</span>
                <h4 className="title">مرجع علمي</h4>
                <div className="content">
                  <p>مرجع للباحثين في مجال النباتات والغطاء النباتي بالمملكة وكذلك المهتمين بالنباتات والبستنة في المملكة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}

      {/* Project Timeline Area start */}
      <br />


      {/* Pricing style three start */}
      <section className="pricing-area-three pt-85" id='pricing'>
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">الأسعار والباقات</span>
                <h2>لدينا حلول متاحة للجميع لبناء مستقبل نباتي</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
              <div
                className="pricing-banner"
                style={{
                  backgroundImage:
                    "url(assets/images/background/pricing-banner-bg.jpg)",
                }}
              >
                <span className="join-us ">انضم الينا</span>
                <h4></h4>
                
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <h5>الباقة الأساسية</h5>
                </div>
                <p>
                  تمتع بالمزايا الأساسية للمشروع واحصل على المصادر لموسوعة النباتات في قواعد بيانات مالفا
                </p>
                <ul className="list-style-one">
                  <li> &nbsp; أكثر من 30 نوع من النباتات</li>
                  <li>&nbsp; مصادر موثوقة</li>
                  <li>&nbsp; امكانية الدخول لأكثر من شخص</li>
                  <li>&nbsp; الدخول بالهاتف أو الايميل</li>
                  <li>&nbsp; دعم فني</li>
                  <li>&nbsp; امكانية نشر المعلومات مع من تريد</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">ريال / سنويا</span>
                    <span className="price">2000</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">وفر 15%</span>
                </div>
                <Link legacyBehavior href="#">
                  <a className="theme-btn w-100">
                    الحصول على العرض <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <h5>الباقة المميزة</h5>
                </div>
                <p>
                  احصل على كامل مزايا النظام من معلومات أدق وأكثر وتمتع بتجربة فريدة وثرية للنباتات
                </p>
                <ul className="list-style-one">
                  <li> &nbsp; جميع مزايا الباقة الأساسية</li>
                  <li>&nbsp; أكثر من 110 نوع من النباتات</li>
                  <li> &nbsp; امكانية الدخول لأكثر من شخص</li>
                  <li>&nbsp; الدخول بالهاتف أو الايميل</li>
                  <li>&nbsp; دعم فني 24/7</li>
                  <li>&nbsp; امكانية نشر المعلومات مع من تريد</li>
                </ul>
                <div className="price-offer">
                  <span className="price-text">
                    <span className="before">ريال / سنويا</span>
                    <span className="price">5000</span>
                  </span>
                  <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
                  <span className="offer-text">وفر 15%</span>
                </div>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    الحصول على العرض <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}


      {/* footer area start */}
    </Layout>
  );
};
export default Index;
