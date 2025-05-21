// Course and lesson type definitions
export type Lesson = {
  id: string;
  name: string;
  description?: string | null; // allow both undefined and null
  youtubeVideoId: string;
  order: number;
  status: string;
  sectionId: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface CourseSection {
  id: string;
  name: string;
  order: number;
  lessons: Lesson[];
  status?: string;
}

export interface Course {
  id: string;
  name: string;
  description?: string;
  courseSections: CourseSection[];
}

// Add a specific type for the course prop in CourseSidebar
export interface CourseSidebarProps {
  course: {
    id: string;
    name: string;
    courseSections: {
      id: string;
      name: string;
      order: number;
      lessons: {
        id: string;
        name: string;
        order: number;
        status: string;
      }[];
    }[];
  };
  completedLessonIds: string[];
  currentLessonId?: string;
}
