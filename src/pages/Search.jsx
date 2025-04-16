import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Card,
    Alert,
    Avatar,
} from "@mui/material";

const morkUser = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        name: "Nguyễn Văn E",
        avatar: "https://i.pravatar.cc/150?img=5",
    }
];

const Search = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = () => {
        if (!search) {
            setError("Vui lòng nhập tên user cần tìm");
            return;
        }

        const filteredUsers = morkUser.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredUsers.length === 0) {
            setMessage("Không tìm thấy user nào");
            setUsers([]);
            return;
        }

        setUsers(filteredUsers);
        setError("");
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    marginTop: "80px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <TextField
                        id="search"
                        label="Nhập tên user cần tìm"
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        fullWidth
                        sx={{
                            marginBottom: "20px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": {
                                    borderColor: "#ccc",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#6ec207",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#6ec207",
                                },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSubmit()}
                        sx={{
                            backgroundColor: "#6ec207",
                            "&:hover": {
                                backgroundColor: "#5cb205",
                            },
                            borderRadius: "8px",
                            width: "100%",
                        }}
                    >Search</Button>
                </Box>
                {users.length > 0 && (
                    <Box
                        sx={{
                            marginLeft: "20px",
                            width: "300px",
                            padding: "20px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {users.map((user) => (
                            <Card
                                key={user.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Avatar
                                    alt={user.name}
                                    src={user.avatar}
                                    sx={{ width: 56, height: 56, marginRight: "10px" }}
                                />
                                <span>{user.name}</span>
                            </Card>
                        ))}
                    </Box>
                )}

                {message && (
                    <Box
                        sx={{
                            marginLeft: "20px",
                            width: "300px",
                            padding: "20px",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <p>Không tìm thấy user nào</p>
                    </Box>
                )}

                {error && (
                    <Alert
                        severity="error"
                        onClose={() => setError("")}
                        sx={{
                            position: "absolute",
                            top: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "300px",
                            zIndex: 99999,
                        }}
                    >
                        {error}
                    </Alert>
                )}
            </Box>
        </>
    );
}

export default Search;