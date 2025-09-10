"use client";
import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="relative overflow-hidden font-mono bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 py-24"
        >
            <div className="container mx-auto px-6 md:px-8">
                <h2
                    id="about-title"
                    className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50"
                >
                   01. About Me
                </h2>

                <div className="mt-6 flex flex-col md:flex-row md:items-start md:gap-12">
                    <div className="flex-1 space-y-5 text-[15px] md:text-lg text-neutral-700 dark:text-neutral-300">
                        <p>
                            I&apos;m Ahammed Nibras, a software engineer obsessed with building elegant, performant, and human‑centered digital experiences. My journey began with an insatiable curiosity for mobile development, where I rapidly mastered Flutter. This passion for creation then led me to the web, where I&apos;ve focused on building with the modern Next.js ecosystem.
                        </p>

                        <p>
                            During my time at <a href="https://nysaclan.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline"><b>NysaClan</b></a>, I was embedded in a fast-moving product team, shipping micro-features into large-scale applications for our clients. This was my masterclass in high-velocity development, where I learned to prioritize clean, resilient code and deliver under tight deadlines without compromising quality.
                        </p>

                        <p>
                            My current focus is on the next frontier: exploring the cutting edge of agentic systems and GPU-accelerated web experiences.
                        </p>

                        <div>
                            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                                The Toolkit:
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    TypeScript
                                </li>
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    Next.js
                                </li>
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    Node.js
                                </li>
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    Firebase
                                </li>
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    Supabase
                                </li>
                                <li className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700">
                                    AWS (basics)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex-shrink-0 mt-8 md:mt-0 w-full max-w-sm md:w-[400px] md:h-[400px] mx-auto hidden md:block group">
                        <Image
                            src="/ahammednibras.jpeg"
                            alt="Ahammed Nibras"
                            className="relative z-10 w-full h-full rounded-lg object-cover border-2 border-transparent transition-all duration-500 group-hover:border-black dark:group-hover:border-white"
                        />
                        <div className="absolute inset-0 rounded-lg border-2 border-black dark:border-white transform -scale-x-100 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        <div className="absolute inset-0 rounded-lg border-2 border-black dark:border-white transform -scale-y-100 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    </div>
                </div>

                <div className="mt-12 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
            </div>
        </section>
    );
}
