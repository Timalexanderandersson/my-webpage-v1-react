import { useState, useRef, useEffect } from "react";
import styles from '../styles/myprojects.module.css';

const IntersectionObserverComponent = ({ children, options }) => {
    const [isView, setIsView] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const targetElement = targetRef.current; // Spara initialt ref-värde

        if (!targetElement) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsView(entry.isIntersecting);
        }, options);

        observer.observe(targetElement);

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, [options]);

    return (
        <div ref={targetRef} className={`${styles.wowowow} ${isView ? styles.visible : ""}`}>
            {children}
        </div>
    );
};

export default IntersectionObserverComponent;
