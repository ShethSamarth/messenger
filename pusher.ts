import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
  appId: "1505559",
  key: "d8f2762ef01ebba54629",
  secret: "fbc0d0f4f4b4ad6c5962",
  cluster: "ap2",
  useTLS: true,
})

export const clientPusher = new ClientPusher("d8f2762ef01ebba54629", {
  cluster: "ap2",
  forceTLS: true,
})
