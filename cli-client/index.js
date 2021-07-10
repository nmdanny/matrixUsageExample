import * as sdk from "matrix-js-sdk";

const userId = "@danielk:DESKTOP-JTA714S"
const accessToken = "syt_ZGFuaWVsaw_wcQboUHxJaoSBcouTUkp_34zq2G"

async function makeClient() {
  const client = sdk.createClient({
   baseUrl: "http://DESKTOP-JTA714S:8008",
   userId,
   accessToken
  })
  await client.startClient()
  return client
}

const client = await makeClient()

const roomName = "myTestRoom"

const { room_id, room_alias } = await client.createRoom({
  name: roomName
})



setInterval(async () => {
  await client.sendTextMessage(room_id, `It is now ${new Date()}` )
}, 1000)