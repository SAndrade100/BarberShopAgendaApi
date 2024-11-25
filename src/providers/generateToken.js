import sign from 'jsonwebtoken'

async function generateToken(userId, isAdmin) {
    const secret = String(process.env.SECRET)
    const token = sign({ isAdmin }, secret, {
        expiresIn: '1d',
        subject: userId
    })
    return token
}

export default generateToken