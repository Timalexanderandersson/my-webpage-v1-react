
import { useState, useRef, useEffect } from "react";
import styles from '../styles/myprojects.module.css';


/**
 * IntersectionObserverComponent is a React component that uses the Intersection Observer API
 * to detect when its child elements come into view. It applies a CSS class to the child elements
 * when they are visible in the viewport.
 *
 */
const IntersectionObserverComponent = ({ children, options }) => {
    const [isView, setIsView] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsView(entry.isIntersecting);
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
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