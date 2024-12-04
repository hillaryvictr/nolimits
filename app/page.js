import Image from "next/image";
import styles from "./page.module.css";
import nolimit from "../public/nolimit.png"
import nl5 from "../public/nl5.jpeg"
import bullseye from "../public/bullseye.png"
import hand from "../public/hand.png"
import quality from "../public/quality.png"
import time from "../public/time-left.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
             <header className={styles.header}>
                <Image src={nolimit} className={styles.heroIcn} alt="hero" width={120} height={70} />
                <ul className={styles.ul}>
                  <li className={styles.li}>Home</li>
                  <li className={styles.li}>About</li>
                  <li className={styles.li}>Contact</li>
                </ul>
                <div className={styles.burger}>
                   <MenuIcon />
                </div>
                
             </header>

             <section className={styles.heroSection}>
                <h1>Architecture Design</h1>
                <span>we pride ourselves on being builders</span>
                <a href="https://www.instagram.com/nolimits.ng.ltd?igsh=djg0M3Y0ZjJzYjN1" target="_blank"><button>Contact Us</button></a>
             </section>
          </div>
        </div>

        <section className={styles.about}>
            <div className={styles.leftAbout}>
              <h2>OUR BENEFITS</h2>
              <span>Ambitious studio with a succesful concept and idea</span>
              <a href="https://www.instagram.com/nolimits.ng.ltd?igsh=djg0M3Y0ZjJzYjN1" target="_blank"><button>Contact Us</button></a>
            </div>
            <div className={styles.rightAbout}>
              <div className={styles.eachBenefit}>
                <Image className={styles.icn} src={quality} width={40} height={40} alt="quality" />
                <h2>High-Quality Products</h2>
                <span>A trusted furniture company uses premium materials and expert craftsmanship to create durable furniture that stands the test of time, providing excellent value for your investment.</span>
              </div>

              <div className={styles.eachBenefit}>
                <Image className={styles.icn} src={bullseye} width={40} height={40} alt="bullseye" />
                <h2>Reliable Customer Service</h2>
                <span>A trusted furniture company uses premium materials and expert craftsmanship to create durable furniture that stands the test of time, providing excellent value for your investment.</span>
              </div>

              <div className={styles.eachBenefit}>
                <Image className={styles.icn} src={hand} width={40} height={40} alt="hand" />
                <h2>Stylish and Functional Designs</h2>
                <span>A trusted furniture company uses premium materials and expert craftsmanship to create durable furniture that stands the test of time, providing excellent value for your investment.</span>
              </div>

              <div className={styles.eachBenefit}>
                <Image className={styles.icn} src={time} width={40} height={40} alt="time" />
                <h2>Timely Delivery and Setup</h2>
                <span>A trusted furniture company uses premium materials and expert craftsmanship to create durable furniture that stands the test of time, providing excellent value for your investment.</span>
              </div>
            </div>
        </section>

        <section className={styles.categories}>
          <div className={styles.eachCategory1} >
              <div className={styles.catContent}>
                <h2>Interior</h2>
                <span>Entertainment Unit</span>
              </div>
          </div>
          <div className={styles.eachCategory2}>
              <div className={styles.catContent}>
                <h2>Bedroom</h2>
                <span>Bed Frame / Wardrobe  </span>
              </div>
          </div>

          <div className={styles.eachCategory3}>
              <div className={styles.catContent}>
                <h2>Dining</h2>
                <span>Dining Table /Dining Chairs  </span>
              </div>
          </div>

          <div className={styles.eachCategory4}>
              <div className={styles.catContent}>
                <h2>Kitchen</h2>
                <span>Modular Shelving</span>
              </div>
          </div>
        </section>

        <section className={styles.moreInfo}>
            <div className={styles.info}>
                <div className={styles.infoLeft}>
                    <h4>IT ALL STARTS HERE</h4>
                    <div className={styles.infoTxt}>
                       Success Story: Lawrence Ngene - No Limits Furniture
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div>Lawrence Ngene, CEO of No Limits Furniture in Jos, Plateau State, has turned his business into a thriving brand, defying the challenges of Nigeria's business environment. A Business Administration graduate from the University of Jos, Lawrence launched his showroom in 2011 and has since seen significant growth, thanks to the support and patronage of Nigerians who value locally-made products.
                      Social media platforms like Instagram and Facebook have been instrumental in reaching a broader audience and engaging customers. By showcasing high-quality, affordable, and unique furniture designs, No Limits Furniture has built a loyal customer base.
                      Raised in a family of carpenters, Lawrence's early passion for furniture was nurtured in his father's workshop. His creativity and hands-on experience have driven the brand's success. Lawrence attributes this to producing durable furniture, offering competitive pricing, and running strategic promotions.
                      The story of No Limits Furniture is a testament to resilience, innovation, and the power of community support. Lawrence Ngene's journey exemplifies how passion and determination can overcome challenges and drive local manufacturing success in Nigeria.
                      </div>
                     <a href="https://tribuneonlineng.com/how-i-became-successful-in-furniture-making-%E2%80%95-lawrence-ngene/" target="_blank">
                      <button>
                        Learn More
                      </button>
                     </a>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.infoLeft}>
                    <h4>WORK WE HAVE DONE</h4>
                    <div className={styles.infoTxt}>
                        Clients and Our Approach
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div>At NoLimits Furniture, our clients are at the heart of everything we do. We take pride in understanding your unique tastes and needs, crafting furniture that seamlessly aligns with your vision. Our approach is built on collaboration, quality craftsmanship, and attention to detail, ensuring every piece not only enhances your space but also tells your story. From concept to creation, we are dedicated to delivering timeless designs and unmatched comfort that reflect your personality and lifestyle.</div>
                    <a href="https://www.instagram.com/nolimits.ng.ltd?igsh=djg0M3Y0ZjJzYjN1" target="_blank">
                      <button>
                        our capabilities
                      </button>
                    </a>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.infoLeft}>
                   <h4>GIVING THANKS</h4>
                    <div className={styles.infoTxt}>
                    Appreciation and Invitation
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div>We extend our heartfelt appreciation to all our clients, both at home and abroad, who have supported and patronized No Limits Furniture. Your trust and loyalty have been the cornerstone of our success, and we are incredibly grateful for your continued support.To potential clients, we invite you to experience the quality and craftsmanship of No Limits Furniture. Our commitment to excellence ensures that every piece of furniture is crafted with care and precision. Join our growing family of satisfied customers and discover why No Limits Furniture is a trusted name in the industry. We look forward to serving you and exceeding your expectations. Thank you for considering us for your furniture needs.</div>
                   
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.info}></div>
        </section>


        <div className={styles.gridItemSpanningEx}>Explore Our Gallery</div>
        <div className={styles.gridContainer}> 
          <div className={styles.gridItemi}></div>
          <div className={styles.gridItem2}></div>
          <div className={styles.gridItemj}></div>
          <div className={styles.gridItemk}></div>
          <div className={styles.gridIteml}></div>
          <div className={styles.gridItem4}></div>
          <div className={styles.gridItemSpanning}>
          <div className={styles.txt}>
             <div className={styles.leftTxt}>
              <h2>Get Incredible Decor and Incredible Design Now!</h2>
              <span>let us handle your interior furniture style</span>
             </div>

             <button>More Info</button>
          </div>
        </div>
    
      </div>
      <div className={styles.reviews}>
      <div className={styles.creview}>CUSTOMER REVIEWS</div>
          <div className={styles.reviewBox}>
              <div className={styles.eachReview}>
                 <div className={styles.eachPerson}>
                  <div className={styles.stars}>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                  </div>

                  <div className={styles.date}>10th Feb,2023</div>
                 </div>
                 <div className={styles.eachPersonTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros vitae odio facilisis consequat. Integer a orci at eros cursus ultricies vel at elit. Vivamus volutpat, nulla a vehicula pellentesque
                 </div>

                 <div className={styles.name}>Hillary victor</div>
              </div>
              <div className={styles.eachReview}>
                 <div className={styles.eachPerson}>
                  <div className={styles.stars}>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                  </div>

                  <div className={styles.date}>10th Feb,2023</div>
                 </div>
                 <div className={styles.eachPersonTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros vitae odio facilisis consequat. Integer a orci at eros cursus ultricies vel at elit. Vivamus volutpat, nulla a vehicula pellentesque
                 </div>

                 <div className={styles.name}>Hillary victor</div>
              </div>
              <div className={styles.eachReview}>
                 <div className={styles.eachPerson}>
                  <div className={styles.stars}>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                  </div>

                  <div className={styles.date}>10th Feb,2023</div>
                 </div>
                 <div className={styles.eachPersonTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros vitae odio facilisis consequat. Integer a orci at eros cursus ultricies vel at elit. Vivamus volutpat, nulla a vehicula pellentesque
                 </div>

                 <div className={styles.name}>Hillary victor</div>
              </div>

              <div className={styles.eachReview}>
                 <div className={styles.eachPerson}>
                  <div className={styles.stars}>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                    <StarIcon style={{color:"#FFA500",fontSize:"16px"}}/>
                  </div>

                  <div className={styles.date}>10th Feb,2023</div>
                 </div>
                 <div className={styles.eachPersonTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros vitae odio facilisis consequat. Integer a orci at eros cursus ultricies vel at elit. Vivamus volutpat, nulla a vehicula pellentesque
                 </div>

                 <div className={styles.name}>Hillary victor</div>
              </div>
          </div>
      </div>

      <footer className={styles.footer}>
         <div className={styles.gridlft}>
            <Image src={nolimit} alt="hero" width={100} height={50} />
            <span>we provide a full range of interior designs,furnitures and architectural designs</span>
         </div>
         <div className={styles.gridlft}>
           <h2>Contacts</h2>
           <ul>
              <li>
                <LocationOnIcon />
                <div style={{fontSize:"12px"}}>Plot 506, Obafemi Awolowo way, Jabi District Abuja FCT,
                </div>
              </li>
              <li>
                <LocationOnIcon />
                
                <div style={{fontSize:"12px"}}>2B D.B Zang Ibrahim Taiwo, Off St Piran's Church, Jos, Plateau State</div>
              </li>
              <li>
                <EmailIcon />
                <div>Info@nolimits.com.ng</div>
              </li>

              <li>
                <PhoneIphoneIcon />
                <div>+234 8064757611</div>
              </li>
           </ul>
         </div>
         <div className={styles.gridlft}>
         <h2>Socials</h2>
           <ul>
              <a href="https://www.facebook.com/share/12FjpnqULNJ/?mibextid=LQQJ4d" target="_blank">
                <li>
                  <FacebookIcon />
                  <div>Facebook</div>
                </li>
              </a>
               <a href="https://www.instagram.com/nolimits.ng.ltd?igsh=djg0M3Y0ZjJzYjN1" target="_blank">
                <li>
                  <InstagramIcon />
                  <div>Instagram</div>
                </li>
               </a>

              <a href="http://wa.me/2348069983816" target="_blank">
                <li>
                  <WhatsAppIcon />
                  <div>WhatsApp</div>
                </li>
              </a>
           </ul>
         </div>
         <div className={styles.gridlft}>
          <h2>Subscribe</h2>
          <div className={styles.inputWrapper}>
              <div className={styles.inputdiv}>
                <input type="text" placeholder="your Email"/>
                <button>submit</button>
              </div>

              <div className={styles.follow}>follow our newsletter to stay up to date with us</div>
          </div>
         </div>
         <div className={styles.gridbtmline}></div>
         <div className={styles.gridbtm}>Copyright &copy; 2024 nolimits. All rights reserved.</div>
      </footer>

    </div>
  );
}
