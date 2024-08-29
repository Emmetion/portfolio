import { Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RiMailSendLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoClose } from "react-icons/io5";
export default function Contact() {
  const formSparkUrl = "https://submit-form.com/o9VErebzy";
  const recaptchaKey = "6LcTUfEpAAAAABK05iPz9JJblMdvYOZ_egE-0Op7";
  const recaptchaRef = useRef(null);
  const ref = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const [message, setMessage] = useState();
  const [formState, setFormState] = useState(initialFormState);

  const updateForm = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });

    if (e.target.id === "message") {
      adjustTextareaHeight();
    }
  };

  const adjustTextareaHeight = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateForm = () => {
    if (
      formState.name === "" ||
      formState.email === "" ||
      formState.message === "" ||
      recaptchaToken === ""
    ) {
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) {
      if (recaptchaToken === "") {
        setMessage({
          message: "You must complete ReCAPTCHA before submitting.",
          class: "bg-red-500",
        });
        return;
      }
      setMessage({
        message: "You must fill out all fields prior to submitting.",
        class: "bg-red-500",
      });
      return;
    }

    if (!validateEmail(formState.email)) {
      setMessage({
        message: "You must provide a valid email before submitting.",
        class: "bg-red-500",
      });
      return;
    }

    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await axios.post(formSparkUrl, payload);
      setFormState(initialFormState);
      recaptchaRef.current.reset();
      setMessage({
        message: "Success! I will get back to you shortly!",
        class: "bg-green-500",
      });
    } catch (error) {
      setMessage({
        message: "There was an sending your message. :(",
        class: "bg-red-500",
      });
    }
  };

  const clearForm = () => {
    setFormState(initialFormState);
    setMessage(null);
    recaptchaRef.current.reset();
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="h-fit w-full flex flex-col items-center text-center px-32 pt-16">
      <div className="bg-white w-[450px] border-2 rounded-xl py-8">
        <div className="h-10 my-6 mb-8">
          <a className="md:text-4xl text-3xl mx-auto">
            <IoMdMail className="inline mb-2" />
            Contact Me
          </a>
          {message && (
            <div
              className={classNames(
                "text-center text-wrap text-white m-auto border-2 rounded-md w-fit px-3 ",
                message.class
              )}
            >
              <p className="text-sm">{message.message}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-4 w-10/12 mx-auto">
          <Input
            value={formState.name}
            variant="standard"
            color="blue-gray"
            id="name"
            label="Name"
            onChange={(e) => updateForm(e)}
          />
          <Input
            value={formState.email}
            variant="standard"
            color="blue-gray"
            id="email"
            label="Email"
            onChange={(e) => updateForm(e)}
          />
          <Textarea
            value={formState.message}
            variant="standard"
            color="blue-gray"
            resize
            defaultChecked
            id="message"
            label="Message"
            type="textarea"
            onChange={(e) => updateForm(e)}
          />
        </div>
        <div className="w-fit mx-auto my-3">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-row justify-center mx-auto gap-3 w-3/4 my-5">
          <button
            className="py-2 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 hover:shadow-sm duration-300  uppercase portfolio-font"
            onClick={clearForm}
          >
            <IoClose size={17} className="inline mb-1 mr-1 " />
            Clear
          </button>
          <button
            className="px-4 rounded-md text-white bg-green-500 hover:bg-green-600 duration-300 hover:shadow-sm uppercase portfolio-font"
            onClick={submitForm}
          >
            <div className="w-fit h-fit inline odd:bg-red">
              <RiMailSendLine
                size={17}
                className="inline-block h-fit mb-1 mr-1"
              />
              <span>Send</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
