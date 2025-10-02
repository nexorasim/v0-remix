import { kv } from "@vercel/kv"

export async function setKVData(key: string, value: any, expirationSeconds?: number) {
  try {
    if (expirationSeconds) {
      await kv.set(key, value, { ex: expirationSeconds })
    } else {
      await kv.set(key, value)
    }
    return { success: true }
  } catch (error) {
    console.error("Error setting KV data:", error)
    return { success: false, error }
  }
}

export async function getKVData(key: string) {
  try {
    const data = await kv.get(key)
    return { success: true, data }
  } catch (error) {
    console.error("Error getting KV data:", error)
    return { success: false, error }
  }
}

export async function deleteKVData(key: string) {
  try {
    await kv.del(key)
    return { success: true }
  } catch (error) {
    console.error("Error deleting KV data:", error)
    return { success: false, error }
  }
}
