import axios from "axios";

export const registerUser = async (data: unknown) => {
    return await axios.post("/api/register", data);
}