"use client";

import React, { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postContactForm } from "@/lib/email";
import {ContactFormSchema, ContactFormType} from "@/lib/types";

import * as m from "@/paraglide/messages";

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormType) {
    await postContactForm(values);
    setOpen(true);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <h2
        className={
          "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 px-6 sm:px-0 ease-in-out duration-500 mb-6"
        }
      >
          {m.contact_us()}
      </h2>
      <Form {...form}>
        <form
          method={"post"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{m.subject()}</FormLabel>
                <FormControl>
                  <Input placeholder={m.question_for_you()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={m.i_would_like_to_ask_you()}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={"outline"}>
            {m.send()}
          </Button>
        </form>
      </Form>
      <DialogContent className="text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Success</span>
        </div>
        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Success
        </p>

        <DialogClose asChild>
          <Button type="button">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
