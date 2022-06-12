import * as IoIcons from "react-icons/io5";
import * as VscIcons from "react-icons/vsc";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";

export const NavBarData = [
  {
    title: "GESTÃO",
    fontsize: "20px",
     path: "",
    className: "nav-text",
  },
  {
    title: "SOBRE",
    path: "/home",
    icon: <IoIcons.IoHome />,
    className: "nav-text",
  },

  {
    title: "Departamento",
    path: "/departamento",
    icon: <MdIcons.MdWork />,
    className: "nav-text",
  },
  {
    title: "Empregados",
    path: "/empregado",
    icon: <ImIcons.ImUsers />,
    className: "nav-text",
  },
  {
    title: "",
    path: "",
  },
  {
    title: "Descriçoes de Cargos",
    path: "",
    icon: <ImIcons.ImFolderOpen />,
    className: "nav-text",
  },
  {
    title: "",
    path: "",
  },
  {
    title: "Treinamentos",
    fontsize: "20px",
      path: "",
    icon: <ImIcons.ImAccessibility />,
    className: "nav-text",
  },
  {
    title: "",
    path: "",
  },
  {
    title: "Folha de Pagto",
    path: "",
    icon: <IoIcons.IoNewspaper />,
    className: "nav-text",
  },
  {
    title: "",
    path: "",
  },
];
