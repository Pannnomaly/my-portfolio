export const projectsTitleReveal = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
};

export const projectsSliderReveal = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
    viewport: { once: true }
};