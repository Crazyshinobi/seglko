'use client'

import NavigationPages from '@/app/utils/NavigationPages';
import { useState } from 'react';

export default function ResearchProjects() {
  const [activeDepartment, setActiveDepartment] = useState('electronics');

  const departments = {
    electronics: {
      name: "Electronics Department",
      projects: [
        { id: 'elec-1', name: "Automatic Street Lighting system using IoT" },
        { id: 'elec-2', name: "Smart Building Project using PIR" },
        { id: 'elec-3', name: "Smart Water Monitoring System using IoT" },
        { id: 'elec-4', name: "IoT based Weather Monitoring" },
        { id: 'elec-5', name: "Smart Irrigation System using IoT" },
        { id: 'elec-6', name: "Health Monitoring Wearable Glove" },
        { id: 'elec-7', name: "Animatronic Hand" },
        { id: 'elec-8', name: "Home Automation System" },
        { id: 'elec-9', name: "GPS & GSM based Tracker" },
        { id: 'elec-10', name: "IoT using Raspberry Pi" },
        { id: 'elec-11', name: "Automated Railway Crossing" },
        { id: 'elec-12', name: "Access Control with RFID" },
        { id: 'elec-13', name: "Biometric Authentication" },
        { id: 'elec-14', name: "Persistence of Vision" },
        { id: 'elec-15', name: "Robotic Arm" },
        { id: 'elec-16', name: "Smart Lighting System" },
        { id: 'elec-17', name: "Gesture Based Robotics" },
        { id: 'elec-18', name: "Mobile Robotics" },
        { id: 'elec-19', name: "Bluetooth Robotics" },
        { id: 'elec-20', name: "Swarm Robotics" },
        { id: 'elec-21', name: "Sensor Guided Robotics" },
        { id: 'elec-22', name: "Voice Controlled Robot" },
        { id: 'elec-23', name: "WiFi Controlled robot" }
      ]
    },
    electrical: {
      name: "Electrical Department", 
      projects: [
        { id: 'elec-24', name: "IoT based Weather Monitoring" },
        { id: 'elec-25', name: "Smart Irrigation System using IoT" },
        { id: 'elec-26', name: "Home Automation System" },
        { id: 'elec-27', name: "Automatic Street Lighting system using IoT" },
        { id: 'elec-28', name: "Smart Building Project using PIR" },
        { id: 'elec-29', name: "Smart Water Monitoring System using IoT" },
        { id: 'elec-30', name: "Animatronic Hand" },
        { id: 'elec-31', name: "PCB Manufacturing" },
        { id: 'elec-32', name: "Automatic Solar Tracker" },
        { id: 'elec-33', name: "Access Control with RFID" },
        { id: 'elec-34', name: "Smart Energy Meter using GSM" },
        { id: 'elec-35', name: "Health Monitoring Wearable Glove" },
        { id: 'elec-36', name: "Solar and Smart Energy Systems" },
        { id: 'elec-37', name: "Robotic Arm" },
        { id: 'elec-38', name: "Smart Lighting System" },
        { id: 'elec-39', name: "Hexapod" },
        { id: 'elec-40', name: "Gesture Based Robotics" },
        { id: 'elec-41', name: "Mobile Robotics" },
        { id: 'elec-42', name: "Bluetooth Robotics" },
        { id: 'elec-43', name: "Swarm Robotics" },
        { id: 'elec-44', name: "Sensor Guided Robotics" },
        { id: 'elec-45', name: "Voice Controlled Robot" },
        { id: 'elec-46', name: "WiFi Controlled robot" }
      ]
    },
    mechanical: {
      name: "Mechanical Department",
      projects: [
        { id: 'mech-1', name: "CNC Machine using Arduino" },
        { id: 'mech-2', name: "Automobile Prototyping" },
        { id: 'mech-3', name: "CFD" },
        { id: 'mech-4', name: "Robotic Arm" },
        { id: 'mech-5', name: "Hexapod" },
        { id: 'mech-6', name: "Gesture Based Robotics" },
        { id: 'mech-7', name: "Mobile Robotics" },
        { id: 'mech-8', name: "Bluetooth Robotics" },
        { id: 'mech-9', name: "Swarm Robotics" },
        { id: 'mech-10', name: "Sensor Guided Robotics" },
        { id: 'mech-11', name: "Voice Controlled Robot" },
        { id: 'mech-12', name: "WiFi Controlled robot" },
        { id: 'mech-13', name: "Design and Fabrication of Car/Wheel Dollies using Hydraulic Ratchet Mechanism" },
        { id: 'mech-14', name: "Pneumatic Reciprocating Power Hacksaw Machine Project" },
        { id: 'mech-15', name: "Design and Fabrication of Pneumatic Bearing Puller Project" },
        { id: 'mech-16', name: "Stirling Engine Project" },
        { id: 'mech-17', name: "Battery Drive Motorized Agriculture Weeder" },
        { id: 'mech-18', name: "Pneumatic Operated Double Hacksaw Project" },
        { id: 'mech-19', name: "Automatic Pneumatic Hammer Machine Project" },
        { id: 'mech-20', name: "Automatic Pneumatic Paper Cutting Machine Project" },
        { id: 'mech-21', name: "Design and Fabrication of Pneumatic Vice Project" },
        { id: 'mech-22', name: "Pneumatic Scissor Lift Jack Project" },
        { id: 'mech-23', name: "Pneumatic Sand Filtering Project" },
        { id: 'mech-24', name: "Pneumatic Paper Cup Making Machine Project" },
        { id: 'mech-25', name: "Pneumatic Sheet Metal Cutting Machine" },
        { id: 'mech-26', name: "Electricity Generator Tiles Project" },
        { id: 'mech-27', name: "Pneumatic Power Steering System" },
        { id: 'mech-28', name: "Mini Belt grinder Project" },
        { id: 'mech-29', name: "Drill Press Project" },
        { id: 'mech-30', name: "Table Saw Project" },
        { id: 'mech-31', name: "Solenoid Engine Project" },
        { id: 'mech-32', name: "Air Powered Car Project" },
        { id: 'mech-33', name: "Four Wheel Steering Mechanism Project" },
        { id: 'mech-34', name: "Box Transport Mechanism Project" },
        { id: 'mech-35', name: "360-Degree Rotating Vehicle" },
        { id: 'mech-36', name: "Zero Friction Electromagnetic Braking System Project" },
        { id: 'mech-37', name: "Gear Based Quick Return Mechanism" },
        { id: 'mech-38', name: "Pneumatic Powered Metal Pick and Place Arm" },
        { id: 'mech-39', name: "Robotic Vehicle using Ackermann Steering Mechanism" },
        { id: 'mech-40', name: "Six Legged Spider Bot using Klann Mechanism" },
        { id: 'mech-41', name: "Theo Jansen Mechanism 4 Legs Spider Bot" },
        { id: 'mech-42', name: "Automatic Motorized Bench Vise" },
        { id: 'mech-43', name: "Power Generator Forearms Machine" },
        { id: 'mech-44', name: "Levitating Frictionless Vertical Windmill" },
        { id: 'mech-45', name: "Power Generator Pulley Rowing Machine" },
        { id: 'mech-46', name: "Staircase Climbing Trolley" },
        { id: 'mech-47', name: "Manual Roller Bending Machine" },
        { id: 'mech-48', name: "Bench Tapping Machine" },
        { id: 'mech-49', name: "E Skateboard With Motion Sensing" },
        { id: 'mech-50', name: "Motorized Smart Turning Mechanism" },
        { id: 'mech-51', name: "Pneumatic Powered Wall Climbing Robot" },
        { id: 'mech-52', name: "Coin Based Cola & Soda Vending Machine" },
        { id: 'mech-53', name: "Power Generation Using Electromagnetic Suspension" },
        { id: 'mech-54', name: "Motorized Scotch Yoke Mechanism Piston" },
        { id: 'mech-55', name: "360 Degree Flexible Drilling Machine" },
        { id: 'mech-56', name: "Mini Conveyor using Geneva Mechanism" },
        { id: 'mech-57', name: "Mini Hacksaw Powered By Beam Engine" },
        { id: 'mech-58', name: "Design & Fabrication Of Mechanical Footstep Power Generator" },
        { id: 'mech-59', name: "Motorized Chain Mechanism Hacksaw" },
        { id: 'mech-60', name: "Remote Controlled Mini Forklift" },
        { id: 'mech-61', name: "Regenerative Braking System Project" },
        { id: 'mech-62', name: "Mini Windmill Power Generation Project" },
        { id: 'mech-63', name: "3 DOF Hydraulic Extractor Mini JCB" },
        { id: 'mech-64', name: "Steering Mechanism Vehicle With Joystick Control" },
        { id: 'mech-65', name: "Bedini Wheel Using Electromagnetic Flux Generation" },
        { id: 'mech-66', name: "Automatic Mechanical Garage Door Opener" },
        { id: 'mech-67', name: "Automatic Paper Cutting Machine Using Geneva Mechanism" },
        { id: 'mech-68', name: "Design & Fabrication of Automated Punching Machine" },
        { id: 'mech-69', name: "2 Wheel Drive Forklift For Industry Warehouses" },
        { id: 'mech-70', name: "Design & Fabrication of Attachable Wheelchair Automator" },
        { id: 'mech-71', name: "Automated Portable Hammering Machine" },
        { id: 'mech-72', name: "Automatic Seed Sowing Robot" },
        { id: 'mech-73', name: "Faulty Product Detection And Separation System" },
        { id: 'mech-74', name: "Pedal Operated Hacksaw" },
        { id: 'mech-75', name: "Pedal Powered Electricity Generator Project" },
        { id: 'mech-76', name: "Plant Irrigation Water Sprinkler Robot" },
        { id: 'mech-77', name: "Mini Conveyor Belt Mechanism" },
        { id: 'mech-78', name: "Dual Motor Electric Go-Kart For Rough Terrain" },
        { id: 'mech-79', name: "Automated 5Dof Robotic Arm Mechanism (Version 1)" },
        { id: 'mech-80', name: "Automated Coconut Scraping Machine" },
        { id: 'mech-81', name: "Automated Double Hacksaw Project" },
        { id: 'mech-82', name: "Pedal Powered Water Purifier Project" },
        { id: 'mech-83', name: "Automatic Blackboard / Whiteboard Cleaner System" },
        { id: 'mech-84', name: "Automated Drain/Gutter Cleaner Project" },
        { id: 'mech-85', name: "Automated 5Dof Robotic Arm Mechanism (Version 2)" },
        { id: 'mech-86', name: "Automatic MotorBike Stand Slider" },
        { id: 'mech-87', name: "Contactless Eddy Braking System" },
        { id: 'mech-88', name: "Design & Fabrication of Motorized Scissor Jack" },
        { id: 'mech-89', name: "Electromagnetic Braking System" },
        { id: 'mech-90', name: "Gearless Transmission Using Elbow Mechanism" },
        { id: 'mech-91', name: "Pulley Based Movable Crane Robot" },
        { id: 'mech-92', name: "Push Based Box Transport Mechanism" },
        { id: 'mech-93', name: "Sand Filter & Separator Project" },
        { id: 'mech-94', name: "Rough Terrain Beetle Robot" },
        { id: 'mech-95', name: "Smart Solar Grass Cutter With Lawn Coverage" },
        { id: 'mech-96', name: "Single Stage Gear Reducer Project" },
        { id: 'mech-97', name: "Torque Generator Mechanism" },
        { id: 'mech-98', name: "High Performance Hovercraft With Power Turning" },
        { id: 'mech-99', name: "Motorized 2 Wheel Scooter Project" },
        { id: 'mech-100', name: "Fire Fighter Robot With Night Vision Camera" },
        { id: 'mech-101', name: "Long Range Spy Robot With Night Vision" },
        { id: 'mech-102', name: "Long Range Spy Robot With Obstacle Detection" },
        { id: 'mech-103', name: "Long Range Spy Robot With Metal Detection" },
        { id: 'mech-104', name: "Remote Controlled Automobile Using Rf" },
        { id: 'mech-105', name: "Remote Controlled Robotic Arm Using Rf" },
        { id: 'mech-106', name: "Android Controlled Robotic Arm" },
        { id: 'mech-107', name: "Hand Motion Controlled Robotic Arm" },
        { id: 'mech-108', name: "Hand Motion Controlled Robotic Vehicle" },
        { id: 'mech-109', name: "Rf Controlled Spy Robot With Night Vision Camera" },
        { id: 'mech-110', name: "Hovercraft Controlled By Android" },
        { id: 'mech-111', name: "Fully Automated Solar Grass Cutter Robot" },
        { id: 'mech-112', name: "Remote Controlled Pick & Place Robotic Vehicle" },
        { id: 'mech-113', name: "MC Based Line Follower Robot" },
        { id: 'mech-114', name: "Agricultural Robot Project" },
        { id: 'mech-115', name: "Fire Fighter Robot Project" },
        { id: 'mech-116', name: "RF Controlled Robotic Vehicle" },
        { id: 'mech-117', name: "RF Controlled Robotic Vehicle With Metal Detection Project" },
        { id: 'mech-118', name: "Obstacle Avoider Robotic Vehicle" },
        { id: 'mech-119', name: "Voice Controlled Robotic Vehicle" },
        { id: 'mech-120', name: "Advanced Footstep Power Generation System" }
      ]
    }
  };

  return (
    <>
    {/* <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
    <img
      src="/PlacementBanner.PNG"
      alt="History of Seg Banner"
      className="w-full h-full object-fit"
    />
  </div> */}
  <div className="relative w-full h-[40vh] bg-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Research Projects</h1>
      </div>

  <div>
    <NavigationPages/>
  </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Research & Innovation</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Research activities in academic institutions play a pivotal role in enhancing the quality of teaching and fostering innovation. 
          At Saroj Educational Group, we encourage our faculty to integrate a balanced mix of teaching and research.
        </p>
      </div>

      {/* Department Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.keys(departments).map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDepartment(dept)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeDepartment === dept 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {departments[dept].name}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {departments[activeDepartment].name} Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments[activeDepartment].projects.map((project) => (
            <div 
              key={project.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-800">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}