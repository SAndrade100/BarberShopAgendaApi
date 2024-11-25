import pkg from 'jsonwebtoken'
const { verify } = pkg

async function handleUser(req, res, next) {
    try {
        const authToken = req.headers.authorization
        if(!authToken) {
            return response.status(401).json({ status: 'Não há token de autorização'})
        }

        const [, token] = authToken.split(' ')
        const secret = String(process.env.SECRET)

        const result = verify(token, secret)
        
        req.userID = result.sub

        if (result.isAdmin === false) {
            return res.status(403).json({ status: 'Usuário não é administrador' });
        }

        next();
    } catch(err) {
        response.status(400).json({ error })
    }
}

export default handleUser