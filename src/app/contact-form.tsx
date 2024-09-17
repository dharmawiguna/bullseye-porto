"use client";

import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function ContactForm() {
  return (
    <section className="px-8 py-0">
      <div className="container mx-auto mb-10 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Contact
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Feel free to reach out through the contact form, and let&apos;s embark
          on a journey of innovation and success.
        </Typography>
      </div>
      <div className="container mx-auto mb-10 text-center">
        <div className="photo-wrapper p-1">
          <Image
            width={150}
            height={150}
            className="w-32 h-32 rounded-full mx-auto"
            src="/image/porto/mask.jpeg"
            alt="Dharma Wiguna"
          />
        </div>
        <div className="py-2">
          <Typography
            color="blue-gray"
            className="font-bold uppercase"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            my skills
          </Typography>
          <div className="text-center text-gray-400 text-md">
            <p>Software Engineer</p>
          </div>
          <div className="mt-2">
            {/* resume-Dharma-Wiguna */}

            <Link
              href="/docs/resume-Dharma-Wiguna.pdf"
              locale={false}
              target="_blank"
            >
              <button className="bg-gray-100 hover:bg-gray-400 text-teal-400 hover:text-light-blue-50 font-semibold py-1 px-4 rounded inline-flex items-center text-sm w-[15%] justify-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Resume</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Card
          shadow={true}
          className="container mx-auto border border-gray/50"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="grid grid-cols-1 lg:grid-cols-7 md:gap-10"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography
                variant="h4"
                color="white"
                className="mb-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Contact Information
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  +62 8124 6269 301
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  dharmawiguna982@gmail.com
                </Typography>
              </div>
              <div className="flex gap-5">
                <GlobeAltIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Link
                    href="https://linkedin.com/in/dharma-wiguna"
                    target="_blank"
                  >
                    www.linkedin.com/in/dharma-wiguna
                  </Link>
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <GlobeAltIcon className="h-6 w-6 text-white" />
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Link href="https://suri-ja.com" target="_blank">
                    https://suri-ja.com
                  </Link>
                </Typography>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Dharma"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Wiguna"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="first-name"
                  placeholder="eg. dharmawiguna982@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="first-name"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <div className="w-full flex justify-end">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
