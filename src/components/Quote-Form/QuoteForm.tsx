"use client";

import React, { useState } from "react";

import toast from "react-hot-toast";
import { FormProvider, useForm } from "react-hook-form";

import { BiRename } from "react-icons/bi";
import { BudgetSlider, Button, FileInput } from "@/components";
import isEmail from "validator/lib/isEmail";
import submitQuoteFirebase, { uploadFile } from "@/api/apiQuote";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import emailjs from "emailjs-com";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_PAGE_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const QuoteForm: React.FC = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting: isLoading },
  } = methods;

  const [budget, setBudget] = useState<number>(100);
  const [projectFileType, setProjectFileType] = useState<string>("upload");
  const [selectedFilename, setSelectedFilename] = useState<string>("");

  const descriptionValue = watch("description");
  const descriptionLength = descriptionValue?.length || 0;

  const resetForm = () => {
    setBudget(100);
    setSelectedFilename("");
    reset();
  };

  const onSubmitQuote = async (data: any) => {
    if (!isEmail(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!serviceId || !templateId || !userId) {
      throw new Error("Environment variables are not set");
    }

    const emailTempleteParams = {
      from_name: data.name,
      from_email: data.email,
      message: `${data.description} \n \n File Url:  ${
        data.fileLink ? data.fileLink : "No file provided"
      } \n \n Project budget: $${budget}`,
    };

    try {
      let fileLink = "";
      if (projectFileType === "url") {
        fileLink = data.fileLink || "";
      } else if (
        projectFileType === "upload" &&
        data.file &&
        data.file.length > 0
      ) {
        fileLink = await uploadFile(data.file[0]);
      }

      await submitQuoteFirebase({
        name: data.name,
        email: data.email,
        description: data.description,
        budget: budget,
        fileLink: fileLink,
      });

      await emailjs.send(serviceId, templateId, emailTempleteParams, userId);

      toast.success("Your project has been submitted, Thank you!");
      resetForm();
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit(onSubmitQuote)} className="contact-form">
          <div className="form-group relative">
            <BiRename className="contact-label-icon" />
            <input
              type="text"
              id="formName"
              className="form-control form-control-lg thick w-full border-none outline-none disabled:cursor-not-allowed"
              placeholder="Name"
              disabled={isLoading}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
          <div className="form-group relative">
            <FaRegEnvelopeOpen className="contact-label-icon" />
            <input
              type="email"
              id="formEmail"
              className="form-control form-control-lg thick w-full border-none outline-none disabled:cursor-not-allowed"
              placeholder="E-mail"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
          <div className="form-group message relative">
            <textarea
              id="projectDescription"
              className="form-control form-control-lg w-full border-none outline-none disabled:cursor-not-allowed"
              rows={7}
              placeholder="Project Description"
              disabled={isLoading}
              maxLength={400}
              {...register("description", { required: true })}
            ></textarea>
            <div
              className={`mb-2 flex items-center ${
                errors.description ? "justify-between" : "justify-end"
              }`}
            >
              {errors.description && (
                <p className="text-sm text-red-500">This field is required</p>
              )}
              <p className="text-sm text-gray-400">
                {descriptionLength} / 400 characters
              </p>
            </div>
          </div>

          <p className="mb-[-12px] ml-2 text-sm">(Optional)</p>
          <FileInput
            projectFileType={projectFileType}
            setProjectFileType={setProjectFileType}
            selectedFilename={selectedFilename}
            setSelectedFilename={setSelectedFilename}
          />
          <BudgetSlider budget={budget} setBudget={setBudget} />

          <div className="text-center">
            <Button
              variant="submitButton"
              type="submit"
              disabled={isLoading}
              className="disabled:opacity-50 disabled:hover:cursor-not-allowed"
            >
              {isLoading ? "Requesting..." : "Request Quote"}
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p>
              <span className="text-primary-green">Note:</span> We will contact
              you as soon as possible through your E-mail.
            </p>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default QuoteForm;
