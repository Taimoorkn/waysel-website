"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const SuccessStories = ({ type }) => {
  const stories = [
    {
      title: "Flowcore",
      description:
        "Flowcore is a workflow automation platform built for mid-sized teams. It simplifies task assignments, approval pipelines, and reporting with a beautiful UI and real-time collaboration—helping teams boost productivity by up to 40% without changing how they work.",
      image: "/images/successstories/Portfolio1.png",
      alt: "Flowcore",
      type: "web",
    },
    {
      title: "Nimvio",
      description:
        "Nimvio is a sleek, responsive marketing site built for a fintech startup. It combines performance-focused design with subtle animations and interactive components, resulting in a 2.5x boost in conversions and a consistent brand experience across all devices and screen sizes.",
      image: "/images/successstories/Portfolio2.png",
      alt: "Nimvio",
      type: "customDev",
    },
    {
      title: "Blinket",
      description:
        "Blinket is a social micro-vlogging app designed for Gen Z users. With gesture-based controls, AI-powered filters, and fast video publishing, it reached 100k downloads in its first month and maintained a 4.8-star rating across major app stores.",
      image: "/images/successstories/Portfolio3.png",
      alt: "Blinket",
      type: "mobile",
    },
    {
      title: "Wellysy",
      description:
        "Wellysy is a wellness tracker that blends habit building, journaling, and mindfulness into a single mobile experience. Custom routines, daily mood logs, and motivational nudges helped early users report improved mental well-being within just two weeks of usage.",
      image: "/images/successstories/Portfolio4.png",
      alt: "Wellysy",
      type: "mobile",
    },
  ];

  // Filter stories based on type prop, or show all if no type is provided
  const filteredStories = type ? stories.filter((story) => story.type === type) : stories;
  const router = useRouter();
  return (
    <section className="section_padding bg-secondary_bg">
      <div className="flex items-start justify-between">
        <h2 className="section-header">Success Stories</h2>
        <Button variant="primary" onClick={() => router.push("/portfolio")}>
          View More
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:gap-10">
        {filteredStories.map((story, index) => (
          <div
            key={index}
            className="flex w-full flex-col justify-between rounded-3xl border border-dark_border bg-white text-start shadow-md"
          >
            <img
              src={story.image}
              alt={story.alt}
              className="mb-4 w-full rounded-2xl object-cover"
            />
            <div className="mx-4 mb-4 flex items-center justify-between sm:mx-6">
              <h3 className="font-neueMontreal text-[28px] font-medium text-primary_text lg:text-[38px]">
                {story.title}
              </h3>
              <Button variant="secondary" onClick={() => router.push("/portfolio")}>
                View More
              </Button>
            </div>
            <p className="mx-4 mb-6 text-justify font-neueMontreal text-sm text-secondary_text sm:mx-6 sm:mb-8 sm:text-base">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
