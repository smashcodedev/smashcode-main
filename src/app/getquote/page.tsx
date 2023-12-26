"use client";

import emailjs from "emailjs-com";
import { BiRename } from "react-icons/bi";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { ContactSVG } from "@/components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!serviceId || !templateId || !userId) {
      throw new Error("Environment variables are not set");
    }

    try {
      await emailjs.send(serviceId, templateId, data, userId);
      toast.success("Thank you! for contacting us.");
      reset();
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-10 mt-28 xl:mt-36">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl">Talk to Us</h1>

            <h6 className="text-center text-xl">
              Let’s discuss about your project. Feel free to send us your
              queries and details.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <div className="w-full text-center md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className="contact-form"
            >
              <div className="form-group relative">
                <BiRename className="contact-label-icon" />
                <input
                  type="text"
                  id="formName"
                  className="form-control form-control-lg thick w-full"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-group relative">
                <FaRegEnvelopeOpen className="contact-label-icon" />
                <input
                  type="email"
                  id="formEmail"
                  className="form-control form-control-lg thick w-full"
                  placeholder="E-mail"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-group message relative">
                <textarea
                  id="formMessage"
                  className="form-control form-control-lg w-full"
                  rows={7}
                  placeholder="Project Description"
                  {...register("projectDesc", { required: true })}
                ></textarea>
              </div>
              <div className="form-group file-input-button relative">
                <input
                  type="file"
                  className=" w-full text-white"
                  {...register("file", { required: true })}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                  Send a message
                </button>
              </div>
            </form>
          </div>
          <ContactSVG />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
