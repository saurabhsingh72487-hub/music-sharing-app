export async function POST(req) {
  try {
    const data = await req.formData()

    const file = data.get('file')

    if (!file) {
      return Response.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    return Response.json({
      success: true,
      fileName: file.name,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}