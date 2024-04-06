'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactItems = [
    { label: 'Email', value: 'torreysmith165@gmail.com', direction: 'right', icon: FaEnvelope },
    { label: 'LinkedIn', value: 'linkedin.com/in/torrey-smith', direction: 'left', icon: FaLinkedin },
    { label: 'GitHub', value: 'github.com/tsmith165', direction: 'right', icon: FaGithub },
];

export default function Contact() {
    const itemVariants = {
        hidden: (direction: string) => ({
            x: direction === 'left' ? '-15%' : '15%',
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            viewport={{ once: false }}
            className="mt-12 w-4/5 mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-secondary from-10% to-secondary_dark to-90% text-transparent bg-clip-text">
                    Get in touch with me:
                </span>
            </motion.h2>
            <div className="space-y-4 text-center">
                {contactItems.map((item, index) => (
                    <motion.div
                        key={index}
                        custom={item.direction}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={itemVariants}
                        className="flex items-center justify-center text-primary hover:text-secondary_light">
                        {item.icon ? <item.icon className="mr-2" size={24} /> : null}
                        <span>{item.value}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
