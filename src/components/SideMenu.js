import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

export default function SideMenu(props) {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItem>
      </List>
      <Divider />
      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem button>
          <ListItemText primary='Trash' />
        </ListItem>
        <ListItemLink href='#simple-list'>
          <ListItemText primary='Spam' />
        </ListItemLink>
      </List>
    </div>
  );
}
