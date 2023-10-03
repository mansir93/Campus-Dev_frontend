import React from "react";
import { Menu } from "antd";
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
        from "@ant-design/icons"


const LeftSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <div className="flex flex-col">
        User Profile
      </div>
      <Menu
       className="text-base"
        items={[
           {label: "Groups",key:"/", icon:<UsergroupAddOutlined  />},
           {label: "Friends", key:"/Friends", icon:<UserOutlined />},
           {label: "MarketPlace", key:"/MarketPlace", icon:<ShoppingCartOutlined />},
           {label: "Ads", key:"/Ads", icon:<AudioOutlined /> },
           {label: "Saved", key:"/Saved", icon:<SaveOutlined />},
           {label: "Memories", key:"/Memories", icon:<ClockCircleOutlined />},
           {label: "Events", key:"/Events", icon:<CalendarOutlined />},
           {label: "Trends", key:"/Trends", icon:<GlobalOutlined />},
           {label: "Video", key:"/Video", icon:<VideoCameraOutlined />},
           {label: "Privacy & Settings,", key:"/Settings", icon:<SettingFilled />},
           {label: "Log Out", key:"/Log Out",  danger:"true", icon:<RiLogoutBoxLine />}
        ]}
      ></Menu> 
      <div>
     
      </div>
    </div>
  );
};


export default LeftSidebar;

