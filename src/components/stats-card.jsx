import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function StatCard({ title, value,loading, linkHref }) {
  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-center shadow-lg">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading? (
          <p>Loading... Please wait</p>
        ): (
            <p className="text-4xl font-bold">{value}</p>
        )
        }
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link
          href={linkHref}
          className="rounded bg-white px-4 py-2 text-indigo-600 font-medium hover:bg-gray-100 transition"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
