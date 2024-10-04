import PocketBase from 'pocketbase'

const pb = new PocketBase(import.meta.env.dbURL)

export default pb
