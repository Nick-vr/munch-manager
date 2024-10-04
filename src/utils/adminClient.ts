import PocketBase from "pocketbase"

const pb = new PocketBase(import.meta.env.dbURL)
const adminClient = await pb.admins.authWithPassword(import.meta.env.dbUsername, import.meta.env.dbPassword, {
  // This will trigger auto refresh or auto reauthentication in case
  // the token has expired or is going to expire in the next 30 minutes.
  autoRefreshThreshold: 30 * 60,
  cache: 'no-cache',
})

export default adminClient