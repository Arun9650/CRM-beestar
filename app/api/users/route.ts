import { NextResponse } from 'next/server';
import { prisma1, prisma2 } from '@/lib/prisma';
import getServerSession  from 'next-auth'; // Ensure this is from next-auth
import { authConfig } from '@/auth.config'; // Your NextAuth config

export async function GET(request: Request) {
  try {
    // Fetch session without redirection (use getServerSession from NextAuth)
    const session = await getServerSession(authConfig);

    if (!session) {
      // If not authenticated, return 401 Unauthorized
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch users from the first database (auth database)
    const usersFromDB1 = await prisma2.user.findMany({
      take: 10, // Fetch only 10 users (pagination can be added)
    });

    // Optionally, fetch data from the second database if needed
    // const dataFromDB2 = await prisma2.someModel.findMany();

    return NextResponse.json({ users: usersFromDB1 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
