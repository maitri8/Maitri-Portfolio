export const ME = {
  name: "Maitri Maribasayyanavar",
  email: "maitrimaribasayyanavar@gmail.com",
  phone: "+91 7899187415",
  linkedin: "https://linkedin.com/in/maitri-maribasayyanavar-0a3967330",
  linkedinLabel: "linkedin.com/in/maitri-maribasayyanavar-0a3967330",
  location: "Hubli, Karnataka, India",
  resume: `${import.meta.env.BASE_URL}Maitri_Maribasayyanavar_Resume.pdf`,
};

export const SKILLS = [
  { title: "Robotics & Simulation", icon: "Bot", tags: ["ROS 2", "URDF", "Gazebo", "RViz2", "TF Transforms", "TM5-700 Cobot", "MyBuddy 280"] },
  { title: "Computer Vision & AI", icon: "ScanEye", tags: ["OpenCV", "Image Processing", "Real-Time Vision", "Colour-Based Classification"] },
  { title: "Embedded & Hardware", icon: "Cpu", tags: ["Raspberry Pi", "Arduino", "Microcontrollers", "Sensor/Actuator Interfacing", "Soldering", "Multimeter", "Oscilloscope", "Assembly & Troubleshooting"] },
  { title: "Industrial Automation", icon: "Factory", tags: ["Omron Automation", "Factory I/O", "Sensor Integration"] },
  { title: "Programming & DBMS", icon: "Code2", tags: ["Python", "C", "MySQL"] },
  { title: "CAD & Simulation", icon: "Box", tags: ["SolidWorks", "CAD Modelling", "MATLAB", "Simulink"] },
];

export const PROJECTS = [
  {
    title: "Magnetic End-Effector for TM5-700 Cobot",
    status: "Paper submitted · ICCIS 2026",
    summary: "A SolidWorks-designed magnetic gripper built for pallet emptying and ASRS redocking.",
    bullets: [
      "Payload and magnetic force calculations to size gripping capacity for reliable handling.",
      "Authored a technical paper submitted to ICCIS 2026.",
    ],
    impact: "Impact: safer, repeatable pallet handling with a collaborative robot.",
    tags: ["SolidWorks", "CAD Modelling", "Engineering Calculations", "TM5-700 Cobot"],
  },
  {
    title: "Vision-Guided Dual-Arm Robotic System",
    status: "Ongoing",
    summary: "Cooperative object handling and assembly on the MyBuddy 280 dual-arm robot.",
    bullets: [
      "Full ROS 2 simulation workflow: URDF models, joint states, TF transforms.",
      "Live visualisation in RViz2, vision pipeline in OpenCV.",
    ],
    impact: "Impact: two arms, one camera, coordinated assembly.",
    tags: ["MyBuddy 280", "ROS 2", "URDF", "RViz2", "Python", "OpenCV"],
  },
  {
    title: "Automated Vision-Based Flower Sorting",
    status: "Completed",
    summary: "A real-time flower classifier and sorter running on Raspberry Pi.",
    bullets: [
      "Camera-based processing classifies flowers by colour and quality.",
      "Drives an automated sorting actuator through integrated sensors.",
    ],
    impact: "Impact: manual grading replaced by a fast, consistent pipeline.",
    tags: ["Raspberry Pi", "OpenCV", "Python", "Hardware Sensors"],
  },
];
