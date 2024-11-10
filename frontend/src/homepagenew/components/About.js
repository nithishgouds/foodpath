import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="about-text ml-14 pl-3 mt-20 pt-9 text-custom-blue">
            <motion.p
                className="about-heading text-6xl font-worksans font-extralight"
                style={{ lineHeight: "1.2" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                How our Platform <br /> Works
            </motion.p>

            <motion.p
                className="paragraph1 mt-10 font-helvetica font-extralight max-w-screen-sm"
                style={{ lineHeight: "1.5", fontSize: "1.3rem" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                Our innovative nutritional evaluation platform uses three key parameters—calories, glucose,
                and oxygen—to provide a comprehensive rating system that assesses the impact of food choices on health.
            </motion.p>

            <motion.p
                className="paragraph2 mt-10 font-helvetica font-extralight ml-25 max-w-screen-sm text-right"
                style={{ lineHeight: "1.5", fontSize: "1.3rem" }}
                initial={{ opacity: 0, x:620 }}
                whileInView={{ opacity: 1, x: 570 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
                This analysis helps you understand how food affects your energy and vitality.
                We empower you with knowledge to make informed choices for your well-being.
            </motion.p>

            <motion.p
                className="paragraph3 mt-10 font-helvetica font-extralight ml-25 max-w-screen-sm"
                style={{ lineHeight: "1.5", fontSize: "1.3rem" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
                We make healthy eating enjoyable and sustainable with personalized recommendations and interactive tools.
            </motion.p>
        </div>
    );
};

export default About;