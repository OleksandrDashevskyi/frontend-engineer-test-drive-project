const emailAddresses = [
    "morena.marchand@example.com",
    "clara.jones@example.com",
    "maria.jackson@example.com",
    "leo.park@example.com",
    "ada.garcia@example.com"
];


export const assignTeamMember = () => {
    const selectedEmployee = Math.floor(Math.random() * emailAddresses.length);
    return emailAddresses[selectedEmployee];
}