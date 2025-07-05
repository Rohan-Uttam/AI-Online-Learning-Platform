"use client";
import React, { use } from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseInfo from "../_components/CourseInfo";
// If you have this component
import ChapterTopicList from "../_components/ChapterTopicList";

// OR, temporarily comment it out
{/* <ChapterTopicList /> */}

 // ✅ adjust the path as needed

function EditCourse() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState();
  console.log(courseId);
  useEffect(() => {
    GetCourseInfo();
  }, []);
  const GetCourseInfo = async () => {
    setLoading(true);
    const result = await axios.get("/api/courses?courseId=" + courseId);
    console.log(result.data);
    setLoading(false);
    setCourse(result.data);
  };
  return (
    <div>
      <CourseInfo course={course} />
      <ChapterTopicList course={course} />
    </div>
  );
}

export default EditCourse;
