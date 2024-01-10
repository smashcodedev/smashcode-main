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

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: isLoading },
  } = useForm();
  const [budget, setBudget] = useState<number>(100);
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
        // reset();
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
        // reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitQuote)}
      className="contact-form disabled:bg-red-400"
    >
      <div className="form-group relative">
        <BiRename className="contact-label-icon" />
        <input
          type="text"
          id="formName"
          className="form-control form-control-lg thick w-full border-none outline-none"
          placeholder="Name"
          disabled={isLoading}
          {...register("name", { required: true })}
        />
      </div>
      <div className="form-group relative">
        <FaRegEnvelopeOpen className="contact-label-icon" />
        <input
          type="email"
          id="formEmail"
          className="form-control form-control-lg thick w-full border-none outline-none"
          placeholder="E-mail"
          disabled={isLoading}
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-group message relative">
        <textarea
          id="projectDescription"
          className="form-control form-control-lg w-full border-none outline-none"
          rows={7}
          placeholder="Project Description"
          disabled={isLoading}
          maxLength={400}
          {...register("description")}
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
            Upload url
          </label>
        </div>
      </div>

      {projectFileType === "upload" ? (
        <div className="form-group relative file-input-button">
          <input
            type="file"
            id="formFile"
            className="mt-4 w-full text-lg"
            style={{ color: "#ffffff" }}
            {...register("file", {
              validate: {
                checkFileSize: (value) =>
                  value[0].size <= 2000000 ||
                  "The file size should be less than 200mb",
              },
              required: false,
            })}
          />
          {errors.file && (
            <p className="mt-2 text-red-500">
              The file should be less than 200mb
            </p>
          )}
        </div>
      ) : null}
      {projectFileType === "url" ? (
        <div className="form-group relative">
          <HiOutlineLink className="contact-label-icon" />
          <input
            type="url"
            id="fileUrl"
            className="form-control form-control-lg thick w-full border-none outline-none"
            placeholder="Document Url"
            disabled={isLoading}
            {...register("fileLink")}
          />
        </div>
      ) : null}

      <BudgetSlider budget={budget} setBudget={setBudget} />

      <div className="text-center">
        <button
          disabled={isLoading}
          type="submit"
          className="btn btn-primary"
          tabIndex={-1}
        >
          {isLoading ? "Requesting" : "Request Quote"}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
