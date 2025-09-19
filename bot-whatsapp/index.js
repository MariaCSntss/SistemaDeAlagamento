import makeWASocket, { useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys'
import express from 'express'
import qrcode from 'qrcode-terminal'

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./session')
    const sock = makeWASocket({ auth: state })

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update
        if (qr) qrcode.generate(qr, { small: true })

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
            if (shouldReconnect) startBot()
        }
    })

    sock.ev.on('creds.update', saveCreds)

    // API HTTP
    const app = express()
    app.use(express.json())

    // Endpoint para enviar mensagem
    app.post('/enviar-mensagem', async (req, res) => {
        try {
            const { phone, message } = req.body
            if (!phone || !message) return res.status(400).json({ erro: 'Parâmetros inválidos' })

            // Formata número (com DDI Brasil "55")
            const numero = phone.replace(/\D/g, '') + '@s.whatsapp.net'

            await sock.sendMessage(numero, { text: message })
            res.json({ status: 'ok', enviado: true })
        } catch (err) {
            console.error(err)
            res.status(500).json({ erro: err.message })
        }
    })

    app.listen(3000, () => console.log('API rodando na porta 3000'))
}

startBot()
