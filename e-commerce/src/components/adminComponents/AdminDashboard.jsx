import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Tooltip, AppBar, Toolbar, Typography } from '@mui/material';
import Charts from "./charts";
import Dashboards from "./Dashboards.jsx";

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
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" anchor="left">
                <Toolbar />
                <List sx={{ marginTop: '80px', width: "300px" }}>
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
                                    <ListItemText primary="Clients" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Sellers" />
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
