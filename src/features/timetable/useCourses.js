import { useCallback, useEffect, useState } from 'react';

export const STORAGE_KEY = 'timetable-courses';

export const DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
export const COLORS = ['#fecdd3', '#fde68a', '#bbf7d0', '#bae6fd', '#ddd6fe', '#fbcfe8', '#fed7aa'];

function load() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

/** Manages timetable courses persisted in localStorage. */
export function useCourses() {
  const [courses, setCourses] = useState(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const saveCourse = useCallback((course) => {
    setCourses((prev) =>
      course.id
        ? prev.map((c) => (c.id === course.id ? course : c))
        : [...prev, { ...course, id: crypto.randomUUID() }]
    );
  }, []);

  const deleteCourse = useCallback((id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }, []);

  return { courses, saveCourse, deleteCourse };
}
