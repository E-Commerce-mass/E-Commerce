import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Tooltip, AppBar, Toolbar, Typography } from '@mui/material';
import Charts from "./charts";
import Dashboards from "./AllDashboards.jsx";
import ClientDashboard from './ClientsDash.jsx';
import SellersDashboard from "./SellersDash.jsx"
const AdminDashboard = () => {
    const [view, setView] = useState("charts");
    const [isHovered, setIsHovered] = useState(false);


    const chartsTotab = () => {
        if (view === "charts") return (<Charts />);
        else if (view === "dash") return (<Dashboards />);
        else if(view==="clientsDash") return (<ClientDashboard />)
        else if (view==="sellersdash") return (<SellersDashboard />)
    };

    return (
        <div>
            <AppBar  sx={{zIndex:-1,justifyContent:"center",backgroundColor:"white"}}>
                <Toolbar >
                    <div style={{fontSize:"50px",color:"white"}}>Admin Panel</div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" anchor='left' sx={{ "& .MuiDrawer-paper": { width: 240,zIndex:"1",alignItems:"center",justifyItems:"center" } }}>
                
                <List sx={{width:"200px",marginTop:"100px"}}>
                    <ListItem button onClick={() => { setView("charts") }}>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={() => { setView("dash") }} onMouseEnter={()=>{setIsHovered(true)}}>
                        <Tooltip title="Users">
                            <div>
                                <ListItemText primary="Users" />
                            </div>
                        </Tooltip>
                    </ListItem>
                        {isHovered && (
                            <List style={{ paddingLeft: '20px' }} onMouseLeave={()=>{setIsHovered(false)}}>
                                <ListItem button>
                                    <ListItemText primary="Clients" onClick={()=>{setView("clientsDash")}}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Sellers" onClick={()=>{setView("sellersdash")}}/>
                                </ListItem>
                            </List>
                        )}

                    <ListItem button>
                        <ListItemText primary="Categories" />
                    </ListItem>
                    
                </List>
            </Drawer>
     
         
                
               
                {chartsTotab()}
         
  
              
        </div>
    );
};

export default AdminDashboard;
