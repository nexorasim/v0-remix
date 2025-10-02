import { put, list, del } from "@vercel/blob"

export async function uploadToBlob(file: File, folder = "uploads") {
  try {
    const filename = `${folder}/${Date.now()}-${file.name}`
    const { url } = await put(filename, file, { access: "public" })
    return { success: true, url, filename }
  } catch (error) {
    console.error("Error uploading to Vercel Blob:", error)
    return { success: false, error }
  }
}

export async function listBlobFiles(prefix?: string) {
  try {
    const { blobs } = await list({ prefix })
    return { success: true, blobs }
  } catch (error) {
    console.error("Error listing Vercel Blob files:", error)
    return { success: false, error }
  }
}

export async function deleteBlobFile(url: string) {
  try {
    await del(url)
    return { success: true }
  } catch (error) {
    console.error("Error deleting Vercel Blob file:", error)
    return { success: false, error }
  }
}
