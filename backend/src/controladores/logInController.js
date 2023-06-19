import jsonwebtoken from 'jsonwebtoken'

export const postLogin = async (req, res) => {
    try {
        const secret = "drhgsjdjdf1234"
        const { email } = req.body;

        const jwtToken = jsonwebtoken.sign(
            { email: email }, secret
        );

        res.send({ token: jwtToken })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}