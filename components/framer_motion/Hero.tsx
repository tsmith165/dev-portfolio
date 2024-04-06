'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            className="flex flex-col md:flex-row items-center justify-center w-4/5 mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 text-secondary_dark">Torrey Smith</h1>
                <p className="text-2xl mb-4 ">
                    <span className="bg-gradient-to-r from-secondary from-10% to-secondary_dark to-90% underline text-transparent bg-clip-text font-bold">
                        Full Stack Developer
                    </span>
                </p>
                <p className="text-secondary">
                    Energetic and driven development professional with over 7 years of experience in SSD test automation and validation.
                    Proven track record of leading teams to success, achieving 100% test coverage and 15% improvement in product quality.
                    Passionate about continuous learning and leveraging strong programming skills to quickly adapt to new technologies.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:w-1/2 flex justify-center">
                <div className="relative h-72 w-72 rounded-xl overflow-hidden bg-secondary_dark">
                    <Image src="/bio_image.png" alt="Torrey Smith" layout="fill" objectFit="cover" className="p-1.5 rounded-xl" />
                </div>
            </motion.div>
        </motion.div>
    );
}
