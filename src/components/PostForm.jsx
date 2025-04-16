import { useState } from "react";
import { Box, TextField, Avatar, Button } from '@mui/material';

const PostForm = () => {
    const [content, setContent] = useState("");

    return (
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            }}
        >
            <Box sx={{ flex: "1", display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Avatar"
            />
            <TextField
                fullWidth
                label="Nghĩ gì vậy?"
                multiline
                width="80%"
                color="#fff"
                fontWeight={"600"}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="standard"
            />

            </Box>
            <Button
            variant="contained"
            sx={{
                backgroundColor: "#6EC207",
                color: "#f5f5f5",
                borderRadius: "25px",
            }}
            >
            Đăng
            </Button>
        </Box>
    );
}

export default PostForm;