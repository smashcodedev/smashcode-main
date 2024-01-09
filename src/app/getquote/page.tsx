"use client";

import { useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { BiRename } from "react-icons/bi";
import { BudgetSlider } from "@/components";
import isEmail from "validator/lib/isEmail";
import { HiOutlineLink } from "react-icons/hi2";
import submitQuoteFirebase, { uploadFile } from "@/api/apiQuote";
import { FaRegEnvelopeOpen } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [budget, setBudget] = useState<number>(0);
  const [projectFileType, setProjectFileType] = useState<string>("upload");

  const onSubmitQuote = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      if (projectFileType === "url") {
        await submitQuoteFirebase({
          name: data.name,
          email: data.email,
          description: data.description,
          budget: budget,
          fileLink: data.fileLink,
        });

        toast.success("Your project has been submitted, Thank you!");
        reset();
      } else {
        if (data.file && data.file.length > 0) {
          const file = data.file[0];
          await uploadFile(file);
        }

        await submitQuoteFirebase({
          name: data.name,
          email: data.email,
          description: data.description,
          budget: budget,
          fileLink: "",
        });

        toast.success("Your project has been submitted, Thank you!");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-10 mt-36">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl">Get a Quote</h1>

            <h6 className="text-center text-lg sm:text-xl">
              Let’s share details of your project. So that we can start working
              on it.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmitQuote)}
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
                  id="projectDescription"
                  className="form-control form-control-lg w-full"
                  rows={7}
                  placeholder="Project Description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="mt-2">
                <div className="space-x-2">
                  <input
                    type="radio"
                    name="projectFileType"
                    id="projectFile"
                    checked={projectFileType === "upload"}
                    onChange={() => setProjectFileType("upload")}
                    className="projectTypeInput"
                  />
                  <label className="cursor-pointer" htmlFor="projectFile">
                    Upload a document
                  </label>
                </div>
                <div className="space-x-2">
                  <input
                    type="radio"
                    name="projectFileType"
                    id="projectFileUrl"
                    checked={projectFileType === "url"}
                    onChange={() => setProjectFileType("url")}
                    className="projectTypeInput"
                  />
                  <label className="cursor-pointer" htmlFor="projectFileUrl">
                    Upload document url
                  </label>
                </div>
              </div>

              {projectFileType === "upload" ? (
                <div className="form-group relative file-input-button">
                  <input
                    type="file"
                    id="formFile"
                    className="mt-4 w-full text-lg"
                    style={{ color: "#ffffff"}}
                    {...register("file", {
                      validate: {
                        checkFileSize: (value) =>
                          value[0].size <= 2000000 ||
                          "The file size should be less than 200mb",
                      },
                    })}
                  />
                  {errors.file && (
                    <p className="mt-2 text-red-500">The file should be less than 200mb</p>
                  )}
                </div>
              ) : null}
              {projectFileType === "url" ? (
                <div className="form-group relative">
                  <HiOutlineLink className="contact-label-icon" />
                  <input
                    type="url"
                    id="fileUrl"
                    className="form-control form-control-lg thick w-full"
                    placeholder="File Url"
                    {...register("fileLink")}
                  />
                </div>
              ) : null}

              <BudgetSlider budget={budget} setBudget={setBudget} />
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                  Request Quote
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
