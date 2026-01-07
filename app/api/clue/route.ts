export const CLUES: Array<string> = []

interface putClueBody {
    text: string
}

export async function PUT(req: Request) {
    const body: putClueBody = await req.json()
    CLUES.push(body.text)
    return ''
}
