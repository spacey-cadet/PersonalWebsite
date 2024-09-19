import React from 'react'
import {Code, Server, Database, GitBranch, Layout, Search, Cloud, Cog} from 'lucide-react'
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiCsharp } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"
import { SiDotnet } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiGit } from "react-icons/si"
import { SiNetlify } from "react-icons/si"
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si"
import { SiDocker } from "react-icons/si"
import { SiKubernetes } from "react-icons/si"
import { CgFigma } from "react-icons/cg";
import "./Skills_XP.css"

const Skills = () => {
  const expertiseItems = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "I'm proficient in key web languages and advanced frameworks, enabling me to build web solutions from the ground up.",
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "C#", icon: <SiCsharp /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "ASP.NET", icon: <SiDotnet /> }
      ]
    },
    {
      icon: <Server size={24} />,
      title: "Web design",
      description: "I design interactive web applications.",
      items: [
        { name: "Figma", icon: <CgFigma /> }
      ]
    },
    {
      icon: <Database size={24} />,
      title: "Database Management",
      description: "With expertise in both SQL and NoSQL databases, I ensure your data is managed effectively.",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      icon: <GitBranch size={24} />,
      title: "Version Control",
      description: "Using Git, I maintain code integrity, making it easier for collaboration and project management.",
      items: [
        { name: "Git", icon: <SiGit /> }
      ]
    },
    {
      icon: <Layout size={24} />,
      title: "Responsive Design",
      description: "I design websites that adapt seamlessly to various devices, ensuring a consistent user experience.",
      items: [
        { name: "CSS Grid", icon: <SiCss3 /> },
        { name: "Flexbox", icon: <SiCss3 /> }
      ]
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "I implement SEO best practices to boost your website's visibility in search engine results.",
      items: [
        { name: "Meta Tags", icon: <SiHtml5 /> },
        { name: "Semantic HTML", icon: <SiHtml5 /> }
      ]
    },
    {
      icon: <Cloud size={24} />,
      title: "Hosting Solutions",
      description: "Host solutions in the cloud using various platforms.",
      items: [
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Azure", icon: <SiMicrosoftazure /> }
      ]
    },
    {
      icon: <Cog size={24} />,
      title: "DevOps",
      description: "Automate and orchestrate deployment using various tools.",
      items: [
        { name: "Azure DevOps", icon: <SiMicrosoftazure /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> }
      ]
    }
  ];

  return (
    <section className="expertise-section" id="skills">
      <h2 className="expertise-title">What I'm good at</h2>
      <div className="expertise-grid">
        {expertiseItems.map((item, index) => (
          <div key={index} className="expertise-item">
            <div className="expertise-icon">{item.icon}</div>
            <h3 className="expertise-item-title">{item.title}</h3>
            <p className="expertise-item-description">{item.description}</p>
            <div className="expertise-item-details">
              {item.items.map((subItem, subIndex) => (
                <div key={subIndex} className="expertise-subitem">
                  <span className="expertise-subitem-icon">{subItem.icon}</span>
                  <span className="expertise-subitem-name">{subItem.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills