import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="h-full w-full flex flex-col items-center text-center p-32">
      <div className="bg-white w-[400px] border-4 py-10">
        <div className="h-10 my-6 mb-8">
          <a className="md:text-4xl text-3xl mx-auto">Contact Me</a>
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
        <div className="flex flex-col gap-y-4 w-11/12 mx-auto">
          <Input
            // value={formState.name}
            value={formState.name}
            id="name"
            label="Name"
            onChange={(e) => updateForm(e)}
          />
          <Input
            value={formState.email}
            id="email"
            label="Email"
            onChange={(e) => updateForm(e)}
          />
          <Input
            value={formState.message}
            id="message"
            label="Message"
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
            className="py-2 px-4 rounded-md text-white bg-red-500 hover:bg-red-600 hover:shadow-sm duration-300"
            onClick={() => {
              clearForm();
            }}
          >
            Clear
          </button>
          <button
            className="py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-600 duration-300 hover:shadow-sm"
            onClick={() => {
              submitForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
