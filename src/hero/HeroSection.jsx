import Typed from "typed.js";
import { useEffect, useRef } from "react";

function HeroSection() {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["IT Engineer", "Team Lead", "PHP Developer", "a little of DevOps"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Oleksiy Ranuk</h1>
                <p>
                    I'm <span ref={el}></span>
                </p>
            </div>
        </section>
    );
}

export default HeroSection;