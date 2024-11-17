import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            className="about-text ml-14 pl-3 mt-20 pt-9 text-custom-blue relative"
            style={{ position: 'relative' }} // Ensure relative positioning for container
        >
            <motion.p
                className="about-heading text-6xl font-worksans font-light"
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
                className="paragraph2 mt-14 font-helvetica font-extralight  text-right"
                style={{
                    lineHeight: "1.5",
                    fontSize: "1.3rem",
                    position: "absolute", // Absolutely position paragraph2
                    right: "-30px",        // 30px from the right border of the container
                    bottom: "auto",       // Align vertically as needed
                }}
                initial={{ opacity: 0, x: '100%' }}
                whileInView={{ opacity: 1, x: 600 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
                This analysis helps you understand how food affects your energy and vitality.
                We empower you with knowledge to make informed choices for your well-being.
            </motion.p>

            <motion.p
                className="paragraph3 mt-52 font-helvetica font-extralight ml-25 max-w-screen-sm"
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
