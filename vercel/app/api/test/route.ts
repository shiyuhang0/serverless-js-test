import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { connect } from '@shiyuhang0/serverless'

export const runtime = 'edge'; // 'nodejs' is the default

export async function GET(request: NextRequest) {
  const conn = connect({
    url: process.env.DATABASE_URL,
    debug: true
  })
  const result = await conn.execute("show databases");
  return NextResponse.json({result});
}