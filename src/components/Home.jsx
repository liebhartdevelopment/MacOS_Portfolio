import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";

import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

const Home = () => {
  const projects = locations.work?.children ?? [];
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id='home'>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              "group folder cursor-pointer",
              project.windowPosition
            )}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src='/images/folder.png' alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
