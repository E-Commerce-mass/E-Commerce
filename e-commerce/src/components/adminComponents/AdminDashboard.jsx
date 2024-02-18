import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Tooltip, AppBar, Toolbar, Typography, Input } from '@mui/material';
import Charts from "./charts";
import Dashboards from "./AllDashboards.jsx";
import ClientDashboard from './ClientsDash.jsx';
import SellersDashboard from "./SellersDash.jsx"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
    import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import Fade from '@mui/material/Fade';
import Categories from "./adminCategories.jsx";
import Blocked from './Blocked.jsx';


const AdminDashboard = () => {
    const [view, setView] = useState("charts");
    const [isHovered, setIsHovered] = useState(false);
    const[seachbar,setSearchbar]=useState(false)
    const [expanded, setExpanded] =useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
    const chartsTotab = () => {
        if (view === "charts") return (<Charts/>);
        else if (view === "dash") return (<Dashboards/>);
        else if(view==="clientsDash") return (<ClientDashboard/>)
        else if (view==="sellersdash") return (<SellersDashboard/>)
        else if(view==="categories") return (<Categories />)
        else if(view==="blocked") return (<Blocked />)
    };

    return (
        <div style={{backgroundColor:"#F7F8F9",top:"0px",zIndex:"1"}}>
            <div style={{paddingLeft:"280px",paddingTop:"0px",marginTop:"0px"}}>
            <SearchIcon sx={{cursor:"pointer"}} onClick={() => {setSearchbar(!seachbar) }} />
            {seachbar===false ? <></> :
        <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        
        <TextField sx={{width:"100%"}} 
        placeholder="Search…"
        variant="outlined" /> 
        <Button>Three</Button>
        </Accordion> }
            </div>
            <div style={{paddingLeft:"300px",paddingTop:"100px",fontSize:"60px",fontFamily:"sans-serif"}}>Welcome Back Admin</div>
     
            <Drawer variant="permanent" anchor='left' sx={{ "& .MuiDrawer-paper": { width: 240,zIndex:"1",alignItems:"center",justifyItems:"center" } }}>
                
                <List sx={{width:"200px",marginTop:"100px"}}>
                    <ListItem button onClick={() => { setView("charts") }}>
                    <DashboardIcon /> 
                     <ListItemText  primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={() => { setView("dash") }} onMouseEnter={()=>{setIsHovered(true)}}>
                    
                    <ListItem button onClick={() => { setView("charts") }}>
                    <PeopleSharpIcon /><ListItemText  primary="Users" />
                    </ListItem>

                    </ListItem>
                        {isHovered && (
                            <List style={{ paddingLeft: '20px' }} onMouseLeave={()=>{setIsHovered(false)}}>
                                <ListItem button>
                                    <ListItemText primary="Clients" onClick={()=>{setView("clientsDash")}}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Sellers" onClick={()=>{setView("sellersdash")}}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Blocked Users" onClick={()=>{setView("blocked")}}/>
                                </ListItem>
                            </List>
                        )}

                    <ListItem button>
                       <StorefrontSharpIcon /> <ListItemText primary="Products" />
                    </ListItem>
                    <List style={{ paddingLeft: '20px' }} onMouseLeave={()=>{setIsHovered(false)}}>
                                <ListItem button>
                                    <ListItemText primary="Categories" onClick={()=>{setView("categories")}}/>
                                </ListItem>
                            </List>
                </List>
            </Drawer>
     
               <div >
                {chartsTotab()}
         </div>
  
         </div>     
         
        
    );
};

export default AdminDashboard;
