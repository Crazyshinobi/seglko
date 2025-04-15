// src/app/tcs/tcs-ion/courses/[courseId]/page.js
import CourseLayout from '@/app/components/CoursesLayout';
import { coursesData } from '@/data/coursesData';
import { notFound } from 'next/navigation';

export default async function CourseDetailPage({ params }) {
  if (!params?.courseId) {
    console.error("Params are missing:", params);
    return notFound();
  }

  const courseId = await params.courseId; // Ensure params is awaited
  const course = coursesData[courseId] || null;

  if (!course) {
    return notFound();
  }

  return <CourseLayout course={course} />;
}

export async function generateStaticParams() {
  return Object.keys(coursesData).map(courseId => ({ courseId }));
}

export async function generateMetadata({ params }) {
  const courseId = await params?.courseId; // Await params before using it

  if (!courseId) {
    return {
      title: 'Course | TCS Courses',
      description: 'Course details',
    };
  }

  const course = coursesData[courseId];

  return {
    title: `${course?.title || 'Course'} | TCS Courses`,
    description: course?.summary || 'Course details',
  };
}