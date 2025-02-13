import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Task from "@/models/Task";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = session?.user?.id;
    const taskdata = await req.json();
    const task = await Task.create({...taskdata, userId:id});

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = session?.user?.id;
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);

    const skip = (page - 1) * limit;

    const tasks = await Task.find({ userId: id }).skip(skip).limit(limit);
    const totalTasks = await Task.countDocuments({ userId: id });
    return NextResponse.json({
      tasks,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks:totalTasks
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
