import React from 'react'
import Content from './Content'
import "./styles/main.css"
import cross from "./assets/Path.png"
function App() {
    return (
        <>
                <section>
                    <div class="container">
                                     <img src={cross} alt='error' style={{cursor:"pointer"}} className='cross'/>
                                   <div class="left">
                                         <div className='leftpadding'>
                                            <h1 className='leftheading'>What is UCC?</h1>
                                             <p className='leftpara'>
                                                  Unified Citizen Connect or UCC is a new interactive portal of BBMP to improve our interaction with you, the citizens of Namma Bengaluru, by simplifying access to vital information, services and grievance redressal. UCC is one of the key initiatives under the aegis of Bengaluru Mission 2022 of the Hon’ble Chief Minister of Karnataka, intended to be a one-stop solution for all citizens of Bengaluru by integrating the existing BBMP website, Namma Bengaluru desktop app, and the Saahaya 2.0 mobile app into one unified platform
                                             </p>
                                         </div>
                                             
                                   </div>
                                  
                                    <div class="right">
                                        <div class="content">
                                                  <div className='rightpadding'>
                                                         <h1 className='rightheading'>What’s new in UCC?</h1>
                                                            <p className='rightpara'>
                                                                   {/* <p> • &nbsp;&nbsp;	A new interface to make sure your interaction with us is easy breezy! </p>
                                                                	<p>  • &nbsp;&nbsp;	Interactive chat flow for availing our services. </p>
                                                                    <p>• &nbsp;&nbsp;	Raising complaints now has become easier with an improved interface for grievance redressal.</p>
                                                                     <p>•&nbsp;&nbsp; 	All the latest updates and quick access to vital information is right on the home page.</p> 
                                                                   <p> • &nbsp;&nbsp;	We are listening. Share your experience of using the new portal via the all new feedback mechanism.</p>
                                                                   <p> • &nbsp;&nbsp;	Access maps for location based information and services. </p>
                                                                   <p> • &nbsp;&nbsp;	One-time-password (OTP) based single-sign-on for availing services or raising complaints.</p>
                                                                   <p> • &nbsp;&nbsp;	Access an all new personalized and comprehensive dashboard for every citizen.</p>
                                                                   <p> • &nbsp;&nbsp;	Track history of services availed or complaints raised.</p>
                                                                   <p> • &nbsp;&nbsp;	Get to know more about our departments at BBMP and how better we can serve you.</p>
                                                                   <p> • &nbsp;&nbsp;	Learn about the genesis, historical significance, chronological events about BBMP and the way forward.</p> */}
                                                                   <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>A new interface to make sure your interaction with us is easy breezy!</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Interactive chat flow for availing our services.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Raising complaints now has become easier with an improved interface for grievance redressal.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>	All the latest updates and quick access to vital information is right on the home page.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>We are listening. Share your experience of using the new portal via the all new feedback mechanism.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Access maps for location based information and services.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>One-time-password (OTP) based single-sign-on for availing services or raising complaints.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Access an all new personalized and comprehensive dashboard for every citizen.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Track history of services availed or complaints raised.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Get to know more about our departments at BBMP and how better we can serve you.</p>
                                                                    </div>
                                                                    <div className='right_first_point'>
                                                                                    <span>•</span>
                                                                                    <p className='para_point'>Learn about the genesis, historical significance, chronological events about BBMP and the way forward.</p>
                                                                    </div>
                                                            </p>
                                                  </div>
                                        </div>
                                    </div>
                    </div>
               </section>  
           
               <Content/>

        </>
    )
}

export default App











{/* <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
<link href="assets/css/all.min.css" rel="stylesheet" />
<link href="assets/css/fontawesome.css" rel="stylesheet" />
<link href="assets/css/owl.carousel.min.css" rel="stylesheet" />
<link href="assets/css/nice-select.css" rel="stylesheet" />
<link href="assets/css/default.css" rel="stylesheet" />
<link href="assets/css/style.css" rel="stylesheet" />
 <link href="assets/css/responsive.css" rel="stylesheet" /> */}





//  <div class='both_side_content'>

//                                          <div>

//                                               <div class='content_first'>
                                                    //   <span>•</span>
                                                    //   <div class='content_para'>Latest information about your ward and events happening around you.</div>
                                                      
//                                               </div>
//                                               <div class='content_first'>
//                                                       <span>•</span>
//                                                       <div class='content_para'>Instant notifications and reminders (for payments due, upcoming events, latest update, renewal etc.)</div>
//                                               </div>
                                               
//                                          </div>

//                                          <div class='right_content'>
//                                                   <p>• 	Citizen leader board.</p>
// 	                                                 <p>• 	And, much more!</p>
//                                          </div>

//                                 </div>










// <div class='content_container'>
//                                 <h1>Coming soon!</h1>
//                                  <div class='both_side'>
//                                             <div class='content_left'>
//                                                     <div class='content_item_first'>
//                                                         <span>•</span>
//                                                         <div class='content_para content_left_para'>Latest information about your ward and events happening around you.</div>
//                                                     </div>
//                                                     <div class='content_item_first'>
//                                                         <span>•</span>
//                                                         <div class='content_para content_left_para'>Instant notifications and reminders (for payments due, upcoming events, latest update, renewal etc.)</div>
//                                                     </div>
//                                             </div>

                                            


//                                             <div class='content_right'>
//                                                             <div class='content_item_second'>
//                                                                 <span>•</span>
//                                                                <div class='content_para content_right_para'>Citizen leader board.</div>
//                                                             </div>
//                                                              <div class='content_item_second'>
//                                                                 <span>•</span>
//                                                                <div class='content_para content_right_para'>And, much more!</div>
//                                                             </div>
//                                             </div> 
//                                  <div>
//                                 <div class='stay_tuned'>Stay tuned!</div>
//                         </div>