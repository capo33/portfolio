import { Grid } from "@material-ui/core";
import Capo from "../assets/images/undraw_quick_chat_re_bit5.svg";
import React from "react";
import ResumeData from "../components/ResumeData";
import emailjs from "emailjs-com";
import { Email, Phone, Place } from "@material-ui/icons";
import Swal from "sweetalert2";
import "../styles/css/contact.css";
import "../styles/css/contactIcons.css";

import { RiMailSendFill } from "react-icons/ri";
import Socialicons from "../components/SocialIcons";

function Contacts() {
  const SendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gn08rvj",
        "template_wbycdrm",
        e.target,
        "user_VdZOZPbkGKggHtPpC1hrT"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className='contact '>
        <div>
          <div className='row no-gutters'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='card-shadow pt-5'>
                    <img src={Capo} className='img-fluid' alt='capo' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='contact-box ml-3'>
                    <h1 className='section_title_text'>Contact</h1>
                    <form onSubmit={SendEmail}>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              name='name'
                              id='name'
                              required
                              placeholder='name'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <input
                              className='form-control'
                              type='email'
                              name='email'
                              id='email'
                              required
                              placeholder='email'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group mt-2'>
                            <textarea
                              className='form-control'
                              rows='3'
                              name='message'
                              id='message'
                              placeholder='message'
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <button type='submit' className='submit-button'>
                            Send message <RiMailSendFill />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className=' mt-5 mb-4'>
                    <div className='row'>
                      <div className='card-body d-flex align-items-center '>
                        <div className='mr-2 mr-2 mt-2'>
                          <Email />
                        </div>
                        <div>
                          <h6>{ResumeData.send}</h6>
                          <p>{ResumeData.email}</p>
                        </div>
                      </div>
                      <div className='card-body d-flex align-items-center c-detail '>
                        <div className='mr-2 mr-2 mt-2 align-self-center '>
                          <Phone />
                        </div>
                        <div>
                          <h6>{ResumeData.call}</h6>
                          <p>{ResumeData.phone}</p>
                        </div>
                      </div>
                      <div className='card-body d-flex align-items-center'>
                        <div className='mr-2 mr-2 mt-2 align-self-center'>
                          <Place />
                        </div>
                        <div>
                          <h6>{ResumeData.home}</h6>
                          <p>{ResumeData.adresss}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        className='contactInfo_socialsContainer'
                      >
                        <div className='wrapper'>
                          {Socialicons.map((item) => {
                            return (
                              <a
                                href={item.iconLink}
                                target='_blank'
                                rel='noreferrer'
                                key={item.id}
                                className={item.className}
                              >
                                <div className={item.className}>
                                  <span> {item.icon}</span>
                                  <div className='tooltip'>{item.iconName}</div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
