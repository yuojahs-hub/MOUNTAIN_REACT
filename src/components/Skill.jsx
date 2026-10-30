import React from "react";
import { introText, skillText } from "../data/HeaderData";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill_inner">
                <div className="skill_title">My Climb</div>
                <div className="skill_decs">
                    {skillText.map((skill, idx) => (
                        <div key={idx}>
                            <span>{idx + 1}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
