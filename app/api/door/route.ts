let currentState = false

export async function GET() {
  return Response.json({ door_is_open: currentState })
}

export async function PUT(req: Request) {
  const previousState = currentState
  const body = await req.json()
  if (typeof body.door_is_open === 'boolean') {
    currentState = body.door_is_open
  }
  return Response.json({ door_is_open: previousState })
}