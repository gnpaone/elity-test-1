import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const AppDiv = styled("div")({
  fontFamily: "Montserrat",
  display: "flex",
  justifyContent: "center",
  color: "#1f2128",
  padding: "10vh",
});

const ColorButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#ffce22",
  color: "#1f2128",
  fontFamily: "Montserrat",
  "&:hover": {
    backgroundColor: "#ffd84d",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffce22",
  },
});

const ChIcon = styled("span")(() => ({
  borderRadius: 6,
  width: 23,
  height: 23,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#ffffff",
  border: "1px solid #bdbdbd",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    borderColor: "#cdcdcd",
    backgroundColor: "#ffffff",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    borderColor: "#bdbdbd",
    backgroundColor: "#ffffff",
    "&::before": {
      display: "block",
      width: 23,
      height: 23,
      backgroundColor: "#e3e3e3",
      content: '""',
    },
  },
  "input:active:not(:checked) ~ &": {
    boxShadow: "0 0 0 4px rgba(36,105,246,0.5)",
    borderColor: "#bdbdbd",
    backgroundColor: "#ffffff",
    "&::before": {
      display: "block",
      width: 23,
      height: 23,
      backgroundColor: "#bdbdbd",
      content: '""',
    },
  },
}));

const ChCheckedIcon = styled(ChIcon)({
  backgroundColor: "#2469f6",
  borderColor: "#2469f6",
  "&::before": {
    display: "block",
    width: 23,
    height: 23,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#5087f8",
    borderColor: "#5087f8",
  },
  "input:active:checked ~ &": {
    boxShadow: "0 0 0 4px rgba(36,105,246,0.5)",
    borderColor: "#bdbdbd",
    backgroundColor: "#2469f6",
  },
});

export default function App() {
  const [checked, setChecked] = React.useState([]);

  const handleToggleAll = () => {
    if (checked.length === 5) {
      setChecked([]);
    } else {
      setChecked([0, 1, 2, 3, 4]);
    }
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    if (newChecked.length === 4 && newChecked.indexOf(0) === -1) {
      newChecked.push(0);
    }

    setChecked(newChecked);
  };

  return (
    <AppDiv>
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <List
            sx={{
              py: 0,
              width: "100%",
              maxWidth: 380,
            }}
          >
            <ListItem>
              <ListItemText primary="All pages" disableTypography />
              <Checkbox
                edge="end"
                checked={checked.length === 5}
                onChange={handleToggleAll}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                }}
                disableRipple
                color="default"
                checkedIcon={<ChCheckedIcon />}
                icon={<ChIcon />}
                tabIndex={-1}
                inputProps={{ "aria-labelledby": "checkbox-all" }}
              />
            </ListItem>
            <Divider component="li" />
            {[1, 2, 3, 4].map((value) => {
              const labelId = `checkbox-${value}`;

              return (
                <ListItem key={value}>
                  <ListItemText
                    id={labelId}
                    primary={`Page ${value}`}
                    disableTypography
                  />
                  <Checkbox
                    edge="end"
                    checked={checked.indexOf(value) !== -1}
                    onChange={handleToggle(value)}
                    sx={{
                      "&:hover": { bgcolor: "transparent" },
                    }}
                    disableRipple
                    color="default"
                    checkedIcon={<ChCheckedIcon />}
                    icon={<ChIcon />}
                    tabIndex={-1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <ColorButton
            variant="contained"
            size="large"
            fullWidth
            sx={{ mb: 2, maxWidth: 368 }}
          >
            Done
          </ColorButton>
        </CardActions>
      </Card>
    </AppDiv>
  );
}
