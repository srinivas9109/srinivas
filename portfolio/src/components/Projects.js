import React, { useState } from "react";
import { projects } from "../data/constants";
import { MdExpand } from "react-icons/md";


import { Dialog } from 'primereact/dialog';
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [modelData, setModelData] = useState([]);
  const [showModel, setShowModel] = useState(false);

  const rowSelectHandler = (project) => {
    setModelData(project);
    setShowModel(true)
  }
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* <div className="card">
            <DataTable value={projects}   onRowClick={rowSelectHandler} 
                          className="p-1 bg-transparent border-2 rounded-md text-nowrap text-white focus:outline-none"
            >
                <Column field="name" header="Name" headerStyle={{background:"transparent",color:'white'}}></Column>
                <Column field="company" header="Company" headerStyle={{background:"transparent",color:'white'}} ></Column>
                <Column field="duration" header="Duration" headerStyle={{background:"transparent",color:'white'}} ></Column>

                <Column  header="View More" body={ratingBodyTemplate}></Column>
                
            </DataTable>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6  sm:px-0">
          {projects.map((project) => (
            <div key={project.id} className="shadow-md flex text-xs sm:text-lg flex-col justify-center items-center shadow-gray-600 rounded-lg">
              <p>{project.name}</p>
              <img
                src={project.src}
                alt=""
                className="rounded-md w-25 h-25 sm:w-auto sm:h-auto duration-200 hover:scale-105"
              />
              <div className="flex duration-200 hover:scale-105   m-2 flex-row items-center justify-center bg-blue-500 rounded">
                <button className=" m-1 sm:m-2 text-sm primary" onClick={() => rowSelectHandler(project)} >
                  Read More
                </button>
                <MdExpand />

              </div>
            </div>
          ))}
          <Dialog header={modelData.name} visible={showModel} className="w-60  sm:w-8/12" onHide={() => { if (!showModel) return; setShowModel(false); }}>
            <ProjectDetails project={modelData} />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Projects;