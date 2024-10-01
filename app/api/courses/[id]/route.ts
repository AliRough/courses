import data from '@/db.json';

export async function GET(request: Request, context: any) {
  const { params } = context;
  const newData = data.main.course.find(
    (item) => Number(item.id) === Number(params.id),
  );

  return Response.json({ ...newData });
}
