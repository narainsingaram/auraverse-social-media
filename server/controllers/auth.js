export const register = (req, res) => {
    console.log('REGISTER ENDPOINT ->', req.body);
    const {name, email, password, secret} = req.body;
};