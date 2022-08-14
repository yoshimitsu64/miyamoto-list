import {
  AppBar,
  Toolbar,
  IconButton,
  Input,
  Box,
  Avatar,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useDebounce } from "../../hooks/debounce";
import { useEffect, useState } from "react";
import { useSearchAnimeQuery } from "../../store/jikan/jikan.api";
const Header = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const {
    isError,
    isLoading,
    data: anime,
  } = useSearchAnimeQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Input
                size="medium"
                placeholder="Search something.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <Box sx={{ position: "relative", height: "100%" }}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "black",
                    position: "absolute",
                  }}
                >
                  {anime?.data.map((value: any) => (
                    <ListItem alignItems="flex-start">
                      <Avatar src={value.images.jpg.image_url} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
            <SearchIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
