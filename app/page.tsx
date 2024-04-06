// /app/page.tsx
import { Metadata } from 'next';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/framer_motion/Hero';
import Technologies from '../components/framer_motion/Technologies';
import Experience from '../components/framer_motion/Experience';
import Projects from '../components/framer_motion/Projects';
import Volunteering from '../components/framer_motion/Volunteering';
import Contact from '../components/framer_motion/Contact';

export const metadata: Metadata = {
    title: 'Torrey Smith - Portfolio',
    description: 'Development Lead and Full Stack Developer',
    icons: {
        icon: {
            url: '/favicon.svg',
            type: 'image/svg+xml',
        },
    },
};

export default function Home() {
    return (
        <PageLayout page="/">
            <div className="bg-gradient-to-b from-primary from-10% to-primary_dark to-70%">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Hero />
                    <Technologies />
                    <Experience />
                    <Projects />
                    <Volunteering />
                    <Contact />
                </div>
            </div>
        </PageLayout>
    );
}
