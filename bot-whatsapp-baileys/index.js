const {
    makeWASocket,
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    fetchLatestBaileysVersion,
    DisconnectReason
} = require("@whiskeysockets/baileys");

const qrcode = require("qrcode-terminal");
const P = require("pino");

async function startBot() {
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(`📦 Usando versão do WhatsApp Web: v${version}, atualizada? ${isLatest}`);

    const { state, saveCreds } = await useMultiFileAuthState("auth");

    const sock = makeWASocket({
        version,
        logger: P({ level: "silent" }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, P({ level: "silent" }))
        },
        browser: ["Bot WhatsApp", "Desktop", "1.0.0"],
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log("📲 Escaneie este QR Code no WhatsApp:");
            qrcode.generate(qr, { small: true });
        }

        if (connection === "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log("❌ Conexão encerrada. Tentando reconectar?", shouldReconnect);

            if (shouldReconnect) {
                startBot(); // reconecta automaticamente
            } else {
                console.log("❌ Sessão encerrada. Exclua a pasta 'auth' para reconectar com novo QR Code.");
            }
        }

        if (connection === "open") {
            console.log("✅ Conectado ao WhatsApp!");
        }
    });

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.key.fromMe) {
            const texto = msg.message?.conversation || "";
            console.log("📨 Mensagem recebida:", texto);

            if (texto.toLowerCase() === "oi") {
                await sock.sendMessage(msg.key.remoteJid, {
                    text: "Olá! Eu sou um bot automático 🤖"
                });
            }
        }
    });
}

startBot();
