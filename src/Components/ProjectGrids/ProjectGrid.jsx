import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
    {
        imageUrl: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'COMBAT TRAINING SYSTEMS (CTS - 71)',
        description: 'CTS - 71 is a  real time Simulator of CMS (Combat Management Systems) deployed on INS VIKRANT.',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/28975867/pexels-photo-28975867/free-photo-of-military-truck-with-advanced-weaponry-display.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'INTEGRATED ELECTRONIC WARFARE SYSTEMS (IEWS)',
        description: 'A robust real-time application developed using Qt C++ for the Indian Army, designed to detect frequencies for surveillance and jamming operations.',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'BLOG WEBSITE',
        description: 'A responsive and dynamic blog platform built using JavaScript and PHP, with a clean HTML5 and CSS3 front end. It supports easy content management, interactive features, and seamless browsing across all devices.',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/32195230/pexels-photo-32195230/free-photo-of-rustic-table-setting-with-bread-and-greens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'FRUIT NINJA WEBSITE',
        description: 'A fun and interactive browser game where players slice fruits and avoid bombs. Built using HTML5, CSS3, and JavaScript, it features smooth animations and responsive design for all devices.',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'CUSTOM T-SHIRT MASTER',
        description: 'A responsive T-shirt customization website built with HTML5, CSS3, JavaScript, PHP, and Bootstrap. It features live previews, design tools, and a seamless ordering experience.',
    },
];

const ProjectGrid = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 ">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;
