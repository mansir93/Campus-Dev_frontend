import React from "react";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import {
         CalendarOutlined,
          SaveOutlined,
          SettingFilled,
          UsergroupAddOutlined,
          UserOutlined,
          VideoCameraOutlined,
          GlobalOutlined,
          ClockCircleOutlined,
          AudioOutlined,
          ShoppingCartOutlined
       }
        from "@ant-design/icons";


const LeftSidebar = () => {
  const Buttons=[
    {id:1,
     label:"Username",
     linkTo:"/"
    },
    {id:2,
     label:"Friends",
     icon:<UserOutlined />,
     linkTo:"/Friends"
    },
    {id:3,
     label:"Groups",
     icon:<UsergroupAddOutlined />,
     linkTo:"/Groups"
    },
    {
     id:4,
     label:"MarketPlace",
     icon:< ShoppingCartOutlined />,
     linkTo:"/MarketPlace"
    },
    {
      id:5,
     label:"Ads",
     icon: < AudioOutlined />,
     linkTo:"/Ads"
    },
    {id:6,
     label:"Events",
     icon: < CalendarOutlined />,
     linkTo:"/"
    },
    {id:7,
     label:"Saved",
     icon: < SaveOutlined  />,
     linkTo:"/Saved"
    },
    {id:8,
     label:"Trends",
     icon:< GlobalOutlined />,
     linkTo:"/Trends"
    },
    {id:9,
     label:"Memories",
     icon: < ClockCircleOutlined />,
     linkTo:"/Memories"
    },
     {id:10,
     label:"Videos",
     icon:<VideoCameraOutlined />,
     linkTo:"/Video",
    },
    {id:11,
     label:"Privacy & Settings",
     icon:<SettingFilled />,
     linkTo:"/settings",
    },
     {id:12,
     label:"Log Out",
     icon:<RiLogoutBoxLine  />,
     color:"Red",
     linkTo:"/",
    },
  ];

  return (
    <div className="bg-transparent p-4 rounded-lg">
      <ul className="list-none flex flex-col gap-1 font-medium hover: bg-gray-300">
          {Buttons.map((button) =>(
          <li style={{color:button.color}} key={button.id} className=" pl-2 py-2  rounded-lg hover:bg-gray-400">
          <Link className="flex gap-2 items-center" to={button.linkTo} >
            {button.icon}
            {button.label}
            </Link>
          </li>
          ))}
       
      </ul>
      
      <div>
     
      </div>
    </div>
  );
};


export default LeftSidebar;

