import pkg from 'jsonwebtoken'
const { sign } = pkg

async function generateToken(userId, isAdmin) {
    const secret = String(process.env.SECRET)

    const token = sign({ isAdmin }, secret, {
        expiresIn: '1d',
        subject: String(userId)
    })

    return token
}

export default generateToken