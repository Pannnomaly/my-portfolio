export const workTitleReveal = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
};

export const workToggleReveal = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.2 },
    viewport: { once: true }
};

export const workContentReveal = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 },
    viewport: { once: true }
};