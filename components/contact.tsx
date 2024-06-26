"use client";

import { sendEmail } from "@/actions";
import HeaderSection from "@/lib/header-section";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  return (
    <section
      className="flex scroll-mt-24 flex-col justify-start gap-4 2xl:scroll-mt-12"
      id="contact"
    >
      <HeaderSection>Contact Me</HeaderSection>
      <motion.form
        action={async (formData) => {
          const { message } = await sendEmail(formData);
          toast(message, {
            action: {
              label: "Close",
              onClick: () => console.log(""),
            },
          });
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col justify-start gap-4"
      >
        <p>
          Contact me directly at{" "}
          <a href="barhamxak686@gmail.com">barhamxak686@gmail.com</a> or through
          this form.
        </p>
        <Input
          className="font-bold"
          placeholder="Your Email"
          type="email"
          name="senderEmail"
          required
        />
        <Textarea
          className="h-[20rem] font-bold"
          required
          name="message"
          placeholder="Your Content"
        ></Textarea>
        <span className="flex">
          <Button>Submit</Button>
        </span>
      </motion.form>
    </section>
  );
}
