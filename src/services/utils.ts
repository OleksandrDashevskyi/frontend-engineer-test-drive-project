import axios from "axios";
import { OperationalTeam } from "../stores/model";

const emailAddresses = [
    "morena.marchand@example.com",
    "clara.jones@example.com",
    "maria.jackson@example.com",
    "leo.park@example.com",
    "ada.garcia@example.com"
];

type GetOperationsTeamResponse = {
    results: OperationalTeam[];
}


export const assignTeamMember = (): string => {
    const selectedEmployee = Math.floor(Math.random() * emailAddresses.length);
    return emailAddresses[selectedEmployee];
}

export const getOperationsTeam = async () => {
    try {
        const res = await axios.get<GetOperationsTeamResponse>("https://randomuser.me/api?results=5&seed=axle-team&inc=name,picture,id,email");
        return res?.data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred"
        }
    }
}
