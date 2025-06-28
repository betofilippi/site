import { NextResponse } from "next/server"

const XANO_API_URL = "https://x8ki-letl-twmt.n7.xano.io/api:wo4-ForS/mural"

export async function GET() {
  console.log("Starting Xano API request")
  console.log("XANO_API_URL:", XANO_API_URL)

  try {
    const response = await fetch(XANO_API_URL)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("API Error Response:", {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      })
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Only parse the response body once
    const data = await response.json()
    console.log("Xano response data:", data)

    if (!Array.isArray(data)) {
      console.error("Invalid media data:", data)
      throw new Error("Invalid response format: data is not an array")
    }

    return NextResponse.json({
      success: true,
      media: data,
    })
  } catch (error) {
    console.error("Xano API Error:", error)

    const statusCode = 500
    let errorMessage = "An unknown error occurred"

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch media from Xano",
        details: errorMessage,
      },
      { status: statusCode },
    )
  }
}
