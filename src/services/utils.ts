import axios from "axios";
import { OperationalTeam } from "../stores/model";

type GetOperationsTeamResponse = {
    results: OperationalTeam[];
}

type assignTeamMember = {
    fullName: string,
    avatar: string
}

export const assignTeamMember = (operationalTeam: OperationalTeam[]): assignTeamMember => {
    const selectedEmployee = Math.floor(Math.random() * operationalTeam.length);
    return {
        fullName: `${operationalTeam[selectedEmployee]?.name.first} ${operationalTeam[selectedEmployee]?.name.last}`,
        avatar: operationalTeam[selectedEmployee]?.picture?.large
    };
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
};
