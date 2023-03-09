import React from "react";
import './Section.css'

function Section (props) {
    return <section className="Section">
        <span>This is section content <br />{props.info}</span>
    </section>
}

export default Section;