"use client";

import { BiRename } from "react-icons/bi";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { BudgetSlider } from "@/components";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import { child, push, ref, set } from "firebase/database";
import { db } from "@/config/config";

// const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
// const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // if (!serviceId || !templateId || !userId) {
    //   throw new Error("Environment variables are not set");
    // }

    try {
      // const quoteRef = ref(db, "client-quotes");
      // const newId = push(quoteRef).key as string;

      // set(child(quoteRef, newId), {
      //   id: newId,
      //   client_name: "John Doe",
      //   email: "test@gmail.com",
      //   description: "Lorem ipsum",
      //   budget: 500,
      //   file_url: "https:google.com",
      // })
      //   .then(() => {
      //     console.log("Quote has been submitted!");
      //     toast.success("Your project has been submitted, Thank you!");
      //   })
      //   .catch((err) => {
      //     console.log("Error while saving a new quote => ", err);
      //     toast.error("Something went wrong");
      //   });
      
      toast.success("form successful");

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
            <h1 className="mb-4 text-4xl">Get a Quote</h1>

            <h6 className="text-center text-xl">
              Let’s share details of your project. So that we can start working
              on it.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
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
              <div className="form-group relative file-input-button">
                <input
                  type="file"
                  id="formFile"
                  style={{ color: "transparent" }}
                  className="mt-4 w-full file:text-white"
                  {...register("file", {
                    validate: {
                      checkFileSize: (value) =>
                        value[0].size <= 209715200 ||
                        "The file size should be less than 200MB",
                    },
                  })}
                />
              </div>
              <BudgetSlider />

              <div className="text-center">
                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                  Send your quote
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p>
                <span className="text-primary-green">Note:</span> We will
                contact you as soon as possible through your E-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
