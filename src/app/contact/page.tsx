"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { BiRename } from "react-icons/bi";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import ContactSVG from "@/components/ui/ContactSVG";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popAlert, setPopAlert] = useState({
    open: false,
    type: "success",
    msg: "",
  });

  const closeNotification = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopAlert({ open: false, type: "success", msg: "" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    ) {
      let emRgx =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emRgx.test(formData.email)) {
        emailjs
          .sendForm(
            "service_6wvrm9j",
            "template_3agi9v8",
            e.target,
            "user_gT75s8QwENPHn7STZsFUI",
          )
          .then(
            (result) => {
              setPopAlert({
                open: true,
                type: "success",
                msg: "Thank you! for contacting us.",
              });
              setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
              setPopAlert({
                open: true,
                type: "error",
                msg: "something went wrong! plz also check your internet connection.",
              });
            },
          );
      } else {
        setPopAlert({
          open: true,
          type: "info",
          msg: "Email address is not valid!",
        });
      }
    } else {
      setPopAlert({
        open: true,
        type: "info",
        msg: "All input fields are required!",
      });
    }
  };
  return (
    <section>
      <div className="m-10 mx-auto mt-36 w-full lg:max-w-7xl">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl">Talk to Us</h1>

            <h6 className="text-center text-xl">
              Let’s discuss your project. Feel free to send us your queries and
              details.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <ContactSVG />
          <div className="w-full text-center md:w-1/2">
            <form onSubmit={(e) => submitForm(e)} className="contact-form">
              <div className="form-group relative">
                <BiRename className="contact-label-icon" />
                <label htmlFor="formName" className="block"></label>
                <input
                  type="text"
                  name="name"
                  id="formName"
                  className="form-control form-control-lg thick"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group relative">
                <FaRegEnvelopeOpen className="contact-label-icon" />
                <label htmlFor="formEmail" className="block"></label>
                <input
                  type="email"
                  name="email"
                  id="formEmail"
                  className="form-control form-control-lg thick"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group message relative">
                <textarea
                  id="formMessage"
                  name="message"
                  className="form-control form-control-lg"
                  rows={7}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                  Send a message
                </button>
              </div>
              <div className="mt-4">
                <p>
                  <span className="text-primary-green">Note:</span> If you find
                  any issue with our website, let us know about your valuable
                  feedback
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Snackbar
        open={popAlert.open}
        autoHideDuration={3000}
        onClose={closeNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={closeNotification} severity={popAlert.type}>
          <p className="lead">{popAlert.msg}</p>
        </Alert>
      </Snackbar> */}
    </section>
  );
};

export default ContactPage;
