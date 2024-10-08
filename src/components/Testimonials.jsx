

import React from 'react';

import Logo from "../assets/vik.jpeg"

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-label="What our customers are saying"
            className="bg-slate-50 py-20 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Testimonials
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        Our support system is so well-crafted that every research scholar finds themselves seamlessly connected. When the community is strong, even challenges turn into opportunities for growth.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                >
                    <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            {testimonialsData1.map((testimonials, index) => (
                                <li key={index}>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute left-6 top-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <h3 className='font-display text-3xl border-b  border-slate-100 pb-3 tracking-tight text-slate-900 sm:text-4xl'>
                                                {testimonials.title}
                                            </h3>
                                            <p className="text-lg tracking-tight pt-3 text-slate-900">
                                                {testimonials.text}
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    {testimonials.name}                                            </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    {testimonials.dept}
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src={testimonials.img}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </li>  <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            {testimonialsData2.map((testimonials, index) => (
                                <li key={index}>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute left-6 top-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <h3 className='font-display text-3xl border-b  border-slate-100 pb-3 tracking-tight text-slate-900 sm:text-4xl'>
                                                {testimonials.title}
                                            </h3>
                                            <p className="text-lg tracking-tight pt-3 text-slate-900">
                                                {testimonials.text}
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    {testimonials.name}                                            </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    {testimonials.dept}
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src={testimonials.img}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </li>  <li>
                        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            {testimonialsData3.map((testimonials, index) => (
                                <li key={index}>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute left-6 top-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <h3 className='font-display text-3xl border-b  border-slate-100 pb-3 tracking-tight text-slate-900 sm:text-4xl'>
                                                {testimonials.title}
                                            </h3>
                                            <p className="text-lg tracking-tight pt-3 text-slate-900">
                                                {testimonials.text}
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    {testimonials.name}                                            </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    {testimonials.dept}
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src={testimonials.img}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}


const testimonialsData1 = [
    {
        title: "A Rapid Package of Helpfulness!",
        text: "There were almost everything where I got stuck. Starting from registration to all the way to sitting in an online class.I was able to pass each step smoothly only after contacting IRSCP team. It has done tremendous work in supporting students like us and that too in ASAP mode. It worked like a complete package of helpfulness in administrative, academia, financial as well as personal issues for me.",
        name: "Vikram Bhist",
        dept: "Mech Engg",
        img: Logo,
    },
    
];
const testimonialsData2 = [
    {
        title: "My support system!",
        text: "Getting selected to one of the best colleges of India was equally daunting as exciting given the COVID-19 scenario.But from the very beginning, the IRSCP team was with me guiding me through every single step till I became comfortable with the new normal of online classes and long distance functioning. My success till now would not have been possible without them. I cannot thank enough the whole team for their commendable work",
        name: "Haritha Joseph",
        dept: "MEMS",
        img: Logo,
    },
    {
        title: "A Rapid Package of Helpfulness!",
        text: "There were almost everything where I got stuck. Starting from registration to all the way to sitting in an online class.I was able to pass each step smoothly only after contacting IRSCP team. It has done tremendous work in supporting students like us and that too in ASAP mode. It worked like a complete package of helpfulness in administrative, academia, financial as well as personal issues for me.",
        name: "Vikram Bhist",
        dept: "Mech Engg",
        img: Logo,
    },
];
const testimonialsData3 = [
    {
        title: "A Rapid Package of Helpfulness!",
        text: "There were almost everything where I got stuck. Starting from registration to all the way to sitting in an online class.I was able to pass each step smoothly only after contacting IRSCP team. It has done tremendous work in supporting students like us and that too in ASAP mode. It worked like a complete package of helpfulness in administrative, academia, financial as well as personal issues for me.",
        name: "Vikram Bhist",
        dept: "Mech Engg",
        img: Logo,
    },
];
