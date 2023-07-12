import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let name, phone;

  if (searchParams) {
    name = searchParams.get('name');
    phone = searchParams.get('phone');
  }

  return NextResponse.json({ name, phone });
}
