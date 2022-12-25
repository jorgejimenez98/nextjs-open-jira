import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname
    if (url.startsWith('/api/entries/')) {
        const id = url.replace('/api/entries/', '')
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$")
        if (!checkMongoIDRegExp.test(id)) {
            const futureUrl = request.nextUrl.clone()
            futureUrl.pathname = '/api/entries/bad-request'
            futureUrl.search = `?message=${id} is not a valid MongoDB ID`
            return NextResponse.rewrite(futureUrl)
        }
    }
    return NextResponse.next()
}


export const config = {
    matcher: [
        '/api/entries/:path*'
        // '/api/:path*', Todas las rutas
    ]
}