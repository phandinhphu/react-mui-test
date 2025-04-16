import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import Post from "./Post";
import PostForm from "./PostForm";

const postItem = [
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 184,
    comment: 10,
    view: 2.2,
    share: 24,
  },
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
    like: 100,
    comment: 5,
    view: 1.2,
    share: 14,
  },
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 20,
    comment: 1,
    view: 1,
    share: 10,
  },
];

export const PostList = () => {

  return (
    <Box
      maxWidth={"600px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          borderRadius: "50px",
          padding: "16px",
        }}
      >
        <PostForm />
      </Box>

      {postItem.map((item, index) => {
        return (
          <Post
            key={index}
            caption={item.caption}
            img={item.img}
            like={item.like}
            comment={item.comment}
            view={item.view}
            share={item.share}
          />
        );
      })}
    </Box>
  );
};
