"use client";

import emailjs from "emailjs-com";
import { BiRename } from "react-icons/bi";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { ContactSVG } from "@/components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await emailjs.send(
        "service_6wvrm9j",
        "template_3agi9v8",
        data,
        "user_gT75s8QwENPHn7STZsFUI",
      );
      toast.success("Thank you! for contacting us.");
      reset();
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
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
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className="contact-form"
            >
              <div className="form-group relative">
                <BiRename className="contact-label-icon" />
                <label htmlFor="formName" className="block"></label>
                <input
                  type="text"
                  id="formName"
                  className="form-control form-control-lg thick"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-group relative">
                <FaRegEnvelopeOpen className="contact-label-icon" />
                <label htmlFor="formEmail" className="block"></label>
                <input
                  type="email"
                  id="formEmail"
                  className="form-control form-control-lg thick"
                  placeholder="E-mail"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-group message relative">
                <textarea
                  id="formMessage"
                  className="form-control form-control-lg"
                  rows={7}
                  placeholder="Message"
                  {...register("message", { required: true })}
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
    </section>
  );
};

export default ContactPage;
