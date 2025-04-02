// src/app/tcs/tcs-ion/courses/[courseId]/page.js
import CourseLayout from '@/components/CoursesLayout';
import { coursesData } from '@/data/coursesData';
import { notFound } from 'next/navigation';

export default function CourseDetailPage({ params }) {
    if (!params || !params.courseId) {
        console.error("Params are missing:", params);
        notFound();
      }
    
      const courseId = params.courseId;
    
      const course = coursesData[courseId] || null;
    


  return <CourseLayout course={course} />;
}

export async function generateStaticParams() {
    const params = Object.keys(coursesData).map(courseId => ({ courseId }));
    return params;
  }

export async function generateMetadata({ params }) {
  const course = coursesData[params.courseId];
  return {
    title: `${course?.title || 'Course'} | TCS Courses`,
    description: course?.summary || 'Course details',
  };
}