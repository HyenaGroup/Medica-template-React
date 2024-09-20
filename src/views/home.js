import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10 Content">
      <Helmet>
        <title>SkinViveThailand</title>
        <meta property="og:title" content="SkinViveThailand" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading1">
            <span className="home-header1">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section1">
              <div className="home-heading2">
                <span className="home-header2">Cardiology</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text10">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image10"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading3">
                <span className="home-header3">Orthopedics</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text11">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image11"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading4">
                <span className="home-header4">Ophtalmology</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text12">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image12"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading5">
                <span className="home-header5">Pediatrics</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text13">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image13"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading6">
                <span className="home-header6">Nutrition</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text14">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image14"
                />
              </div>
            </div>
            <div className="home-section6">
              <div className="home-heading7">
                <span className="home-header7">General</span>
                <span className="home-caption6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text15">Read more</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-content1">
            <div className="home-heading8">
              <img
                alt="image"
                src="/packshot-banner-200w.png"
                className="home-image16"
              />
              <p className="home-caption7">
                <span>SKINVIVE กรดไฮยาลูโรนิคเพียงตัวเดียว </span>
                <span>ที่ให้ความชุ่มชื้นลึก ได้ยาวนานถึง 9 เดือน </span>
                <span>ด้วยการฉีดเพียง 1 ครั้ง ¹,²</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-section7">
          <img
            alt="image"
            src="/packshot2-1500w.png"
            className="home-image17"
          />
          <div className="home-content2">
            <div className="home-header8">
              <img
                alt="image"
                src="/skinvivetm-header-1500w.png"
                className="home-image18"
              />
              <p className="home-capton">
                <span className="home-text19">
                  ผิวของเราที่จะดูดีที่สุด ความชุ่มชื้นเป็นสิ่งจำเป็น⁵⁻⁶
                  ความยืดหยุ่น และการเปล่งประกาย
                </span>
                <span className="home-text20">
                  ล้วนเกิดจากความชุ่มชื้นของผิว³⁻⁶
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text21"></br>
                <span className="home-text22">
                  SKINVIVE เป็นการรักษาด้วยกรดไฮยาลูโรนิก
                  ที่สามารถฉีดเข้าไปในชั้นหนังแท้ของใบหน้า
                </span>
                <span className="home-text23">
                  ลำคอ และมือ¹ สามารถให้ความชุ่มชื้นยาวนาน
                  และลดความหยาบกร้านและริ้วรอย¹,²,⁷
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text24"></br>
                <span className="home-text25">
                  แตกต่างจากครีมทาผิวทั่วไปที่เพียงแต่ปรับปรุงชั้นบนของผิวเท่านั้น⁸
                  SKINVIVE สามารถ
                </span>
                <span className="home-text26">
                  เจาะลึกเข้าไปในชั้นลึกของผิว
                  ให้ความชุ่มชื้นจากภายในอย่างแท้จริง¹
                </span>
              </p>
            </div>
            <div className="home-more7 read-more"></div>
          </div>
        </div>
        <div className="home-section8">
          <img
            alt="image"
            src="/tor-packshot-1500w.png"
            className="home-image19"
          />
          <div className="home-content3">
            <div className="home-header9">
              <div className="home-container11">
                <div className="home-container12">
                  <img
                    alt="image"
                    src="/iconbullet01-200h.png"
                    className="home-image20"
                  />
                </div>
                <span className="home-text27">
                  <span>SKINVIVE ดึงดูดและกักเก็บน้ำ โดยกรดไฮยาลูโรนิก</span>
                  <br></br>
                  <br></br>
                  <span>เพื่อเพิ่มความชุ่มชื้นตามธรรมชาติของผิว⁹⁻¹¹</span>
                </span>
              </div>
              <div className="home-container13">
                <div className="home-container14">
                  <img
                    alt="image"
                    src="/iconbullet02-200h.png"
                    className="home-image21"
                  />
                </div>
                <span className="home-text32">
                  SKINVIVE เพิ่มความชุ่มชื้นในที่
                  ที่จำเป็นและปรับปรุงความเรียบเนียน ของผิว ริ้วรอย
                  และความยืดหยุ่น หลังจากการรักษาเพียงครั้งเดียว¹,²
                </span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <img
                    alt="image"
                    src="/iconbullet03-200h.png"
                    className="home-image22"
                  />
                </div>
                <span className="home-text33">
                  SKINVIVE เพิ่มปริมาณ Aquaporin-3
                  ที่เกิดขึ้นตามธรรมชาติในชั้นลึกของผิว²,¹³
                  เพื่อให้ความชุ่มชื้นยาวนานถึง 9 เดือน²
                </span>
              </div>
            </div>
            <div className="home-more8 read-more"></div>
          </div>
        </div>
      </section>
      <section id="moisture" className="home-moisture">
        <div className="home-content4">
          <img alt="image" src="/text1-1500w.png" className="home-image23" />
        </div>
      </section>
      <div className="home-care">
        <div className="home-container17">
          <div className="home-container18">
            <h1 className="home-text34">
              <span>การดูแลตนเองหลังจากการฉีด</span>
              <br></br>
              <span>SKINVIVE</span>
            </h1>
          </div>
          <div className="home-container19">
            <div className="home-container20">
              <div className="home-container21">
                <img
                  alt="image"
                  src="/arrow-200h.png"
                  className="home-image24"
                />
                <span className="home-text38">สิ่งที่ควรหลีกเลี่ยง</span>
              </div>
              <div className="home-container22">
                <img
                  alt="image"
                  src="/iconbullet04-500w.png"
                  className="home-image25"
                />
                <span className="home-text39">
                  ห้ามใช้เครื่องสำอางใด ๆ ในช่วง 12 ชั่วโมงหลังการรักษา
                  ด้วยการฉีด SKINVIVE¹
                </span>
              </div>
              <div className="home-container23">
                <img
                  alt="image"
                  src="/iconbullet05-500w.png"
                  className="home-image26"
                />
                <span className="home-text40">
                  หลีกเลี่ยงการเผชิญสภาพแวดล้อม ที่รุนแรง เช่น การสัมผัสแสงแดด
                  โดยตรง รังสี UV และอุณหภูมิต่ำ กว่า 0°C¹
                </span>
              </div>
              <div className="home-container24">
                <img
                  alt="image"
                  src="/iconbullet06-500w.png"
                  className="home-image27"
                />
                <span className="home-text41">
                  หลีกเลี่ยงการใช้ซาวน่าในช่วง สองสัปดาห์หลังการฉีด¹
                </span>
              </div>
            </div>
            <div className="home-container25">
              <div className="home-container26">
                <img
                  alt="image"
                  src="/iconbullet07-500w.png"
                  className="home-image28"
                />
                <span className="home-text42">
                  ห้ามทำกิจกรรมที่ต้องใช้แรงมาก ในช่วง 24 ชั่วโมงหลังการรักษา⁷
                </span>
              </div>
              <div className="home-container27">
                <img
                  alt="image"
                  src="/iconbullet08-500w.png"
                  className="home-image29"
                />
                <span className="home-text43">
                  <span>หลีกเลี่ยงการถูหรือการนวด</span>
                  <br></br>
                  <span>บริเวณที่ฉีดในช่วง 6 ชั่วโมงหลังการรักษา¹⁵</span>
                </span>
              </div>
              <div className="home-container28">
                <img
                  alt="image"
                  src="/iconbullet09-500w.png"
                  className="home-image30"
                />
                <span className="home-text47">
                  หลีกเลี่ยงการทำ microneedling, การลอกผิว
                  หรือการรักษาด้วเลเซอร์เป็นเวลาสองถึงสี่สัปดาห์⁷
                </span>
              </div>
            </div>
            <div className="home-container29">
              <div className="home-container30">
                <img
                  alt="image"
                  src="/arrow-200h.png"
                  className="home-image31"
                />
                <span className="home-text48">สิ่งที่ควรหลีกเลี่ยง</span>
              </div>
              <div className="home-container31">
                <img
                  alt="image"
                  src="/iconbullet10-500w.png"
                  className="home-image32"
                />
                <span className="home-text49">ใช้ครีมกันแดด⁷</span>
              </div>
              <div className="home-container32">
                <img
                  alt="image"
                  src="/iconbullet11-500w.png"
                  className="home-image33"
                />
                <span className="home-text50">ประคบเย็นเพื่อลดรอยฟกช้ำ¹⁶</span>
              </div>
              <div className="home-container33">
                <img
                  alt="image"
                  src="/iconbullet12-500w.png"
                  className="home-image34"
                />
                <span className="home-text51">
                  เพิ่มการดื่มน้ำให้เพียงพอ ในช่วง 48 ชั่วโมง หลังการรักษา⁷
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="footter" className="home-footter">
        <img
          alt="image"
          src="/skinvivelogo-center-200h.png"
          className="home-image35"
        />
        <div className="home-heading9">
          <p className="home-text52">
            <span className="home-text53">
              References 1. SKINVIVE by Juvéderm DFU. 20083732. Revision
              2023-08. 2.Nitofos F et al. Clin Cosmet Investig Dermatol 2019;
              12:791-798. 3. Humphrey S et al.Dermatol Surg 2021;47:974-981. 4.
              Fisher GJ et al. Arch Dermatol 2008; 144:666-672. 5. Walker M. Int
              J Pharm 2022;622:121850. 6. Dabrowska AK et al. Skin Res Technol
              2018; 24:165-174. 7. Ogilvie P et 
            </span>
            <span className="home-text54">
              al. J cosmet Dermatol 2020; 19:1065-1070. 8. Goldie K et al. Clin
              Cosmet Investig Dermatol 2021; 14:643-654. 9. Allemann IB, Baumann
              L. Clin Interv Aging 2008; 3:629-634. 10. De 
            </span>
            <span className="home-text55">
              Boulle K et al. Dermatol Surg 2013; 39:1758-1766. 11. Salwowska NM
              et al. J Cosmet Dermatol 2016; 15:520-526.; 15:411-426. 12. Safa M
              et al. Cin Cosmet Investig Dermatol 2022. 13. 
            </span>
            <span className="home-text56">
              Nakab L et al. Plast Reconstr Surg Glob Open 2020; 8:e2723. 14.
              Allergan Aesthetics. Unpublished data. SKINVIVE time of injection.
              REF-116636. October 2023. 15. Vedamurthy M.
            </span>
            <span className="home-text57">
              Indian J Dermatol. 2008,74: 23. 16. King M. J Clin Aesthet
              Dermatol. 2017; 10(2):E1.
            </span>
          </p>
        </div>
        <div className="home-container34">
          <div className="home-container35">
            <img
              alt="image"
              src="/allergonasthetics-logo-200h.png"
              className="home-image36"
            />
          </div>
          <div className="home-container36">
            <span className="home-text58">
              AbbVie Pharmacteuticals (Thailand) Ltd. 29 Vanissa Building,
              Building B, 16th Floor, Units A and B, Soi Chidlom, Ploenchit
              Road, Lumpini, Pathumwan, Bangkok 10330 Thailand, 02-460-7717
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
