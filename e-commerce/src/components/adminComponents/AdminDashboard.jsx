import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Tooltip, AppBar, Toolbar, Typography } from '@mui/material';
import Charts from "./charts";
import Dashboards from "./AllDashboards.jsx";
import ClientDashboard from './ClientsDash.jsx';
import SellersDashboard from "./SellersDash.jsx"
const AdminDashboard = () => {
    const [view, setView] = useState("charts");
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const chartsTotab = () => {
        if (view === "charts") return (<Charts />);
        else if (view === "dash") return (<Dashboards />);
        else if(view==="clientsDash") return (<ClientDashboard />)
        else if (view==="sellersdash") return (<SellersDashboard />)
    };

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" anchor="left">
                <Toolbar />
                <List sx={{border:"1px", position:"relative",justifyContent:"center",width:"200px"  }}>
                    <ListItem button onClick={() => { setView("charts") }}>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={() => { setView("dash") }} onMouseEnter={handleMouseEnter}>
                        <Tooltip title="Users">
                            <div>
                                <ListItemText primary="Users" />
                            </div>
                        </Tooltip>
                    </ListItem>
                        {isHovered && (
                            <List style={{ paddingLeft: '20px' }} onMouseLeave={handleMouseLeave}>
                                <ListItem button>
                                    <ListItemText primary="Clients" onClick={()=>{setView("clientsDash")}}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Sellers" onClick={()=>{setView("sellersdash")}}/>
                                </ListItem>
                            </List>
                        )}

                    <ListItem button>
                        <ListItemText primary="Pages" />
                    </ListItem>
                </List>
            </Drawer>
            <main>
                <Toolbar />
                {chartsTotab()}
            </main>
        </>
    );
};

export default AdminDashboard;
