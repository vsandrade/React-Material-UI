import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid item>
          <InputBase />
        </Grid>
        <Grid item sm></Grid>
        <Grid item>
          <IconButton>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color='secondary'>
              <PowerSettingsNewIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <ChatBubbleOutlinedIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
