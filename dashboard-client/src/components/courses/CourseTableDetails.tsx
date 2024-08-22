import React, { useState, useCallback } from "react";
import { FaExternalLinkAlt, FaRegUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import AcceptModal from "../ui/modals/AcceptModal";
import { router, useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { Course, CoursePageProps } from "@/utils/types";
import { formatDate, formatLongText } from "@/utils/helper";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
  Button,
  Avatar,
} from "@windmill/react-ui";
import UserProfileMode from "../ui/modals/UserProfileMode";

const CourseTableDetails: React.FC<CoursePageProps> = ({ coursesData }) => {
  // const { id: userId } = useAuth();
  const userId = 1;
  const { t } = useTranslation();
  const { post, processing } = useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showUserProfile, setIsShowUserProfile] = useState<boolean>(false);
  const [instructorId, setInstructorId] = useState<number | null>(null);
  const [courseId, setCourseId] = useState<number | null>(null);

  const { data: courses, per_page, total } = coursesData;
  const resultsPerPage = per_page || 10;

  const onPageChange = useCallback((page: number) => {
    router.get(`/courses`, { page }, { preserveState: true });
  }, []);

  const instructorInfo = (id: number): void => {
    if (!id) return;
    setIsShowUserProfile(true);
    setInstructorId(id);
  };

  const deleteCourse = useCallback(() => {
    if (courseId === null) return;

    post(`/courses/delete/${courseId}`, {
      onSuccess: () => {
        toast.success(t("Course deleted successfully"));
        setIsModalOpen(false);
      },
      onError: () => toast.error(t("Error deleting course")),
      onFinish: () => setIsModalOpen(false),
    });
  }, [courseId, post, t]);

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            {userId === 1 && <TableCell>{t("Instructor")}</TableCell>}
            <TableCell>{t("Course Name")}</TableCell>
            <TableCell>{t("Category")}</TableCell>
            <TableCell>{t("Status")}</TableCell>
            <TableCell>{t("Price")}</TableCell>
            <TableCell>{t("Hours")}</TableCell>
            <TableCell>{t("Average Rate")}</TableCell>
            <TableCell>{t("Description")}</TableCell>
            <TableCell>{t("Date")}</TableCell>
            <TableCell>{t("Details")}</TableCell>
            <TableCell>{t("Actions")}</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {courses.map((course: Course) => (
            <TableRow key={course.id}>
              {userId === 1 && (
                <TableCell>
                  <Button
                    layout="link"
                    aria-label={t("View Instructor")}
                    onClick={() => instructorInfo(course.user_id)}
                  >
                    <FaRegUser className="w-5 h-5 text-white" />
                  </Button>
                </TableCell>
              )}
              <TableCell>
                <div className="flex items-center text-sm">
                  <Avatar
                    className="hidden mr-3 md:block"
                    src={course.photo}
                    alt={course.name}
                  />
                  <p className="font-semibold">{course.name}</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge type="success">{course.category}</Badge>
              </TableCell>
              <TableCell>
                <Badge type="primary">{course.type}</Badge>
              </TableCell>
              <TableCell>{course.price}</TableCell>
              <TableCell>{course.hours}</TableCell>
              <TableCell>{course.average_rate}</TableCell>
              <TableCell>{formatLongText(course.description)}</TableCell>
              <TableCell>{formatDate(course.created_at)}</TableCell>
              <TableCell>
                <Button layout="link" aria-label={t("View Details")}>
                  <FaExternalLinkAlt className="w-5 h-5 text-white" />
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => router.get(`/courses/edit/${course.id}`)}
                    layout="link"
                    aria-label={t("Edit Course")}
                  >
                    <MdEdit className="w-5 h-5" />
                  </Button>
                  <Button
                    layout="link"
                    onClick={() => {
                      setIsModalOpen(true);
                      setCourseId(course.id);
                    }}
                    aria-label={t("Delete Course")}
                  >
                    <BiTrash className="w-5 h-5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={total}
          resultsPerPage={resultsPerPage}
          label="Table navigation"
          onChange={onPageChange}
        />
      </TableFooter>
      <AcceptModal
        title={t("Delete Course")}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        acceptAction={deleteCourse}
        isLoading={processing}
        disabled={processing || courseId === null}
      >
        {t("Are you sure you want to delete this course?")}
      </AcceptModal>
      <UserProfileMode
        title="Instructor Profile"
        isModalOpen={showUserProfile}
        setIsModalOpen={setIsShowUserProfile}
        userId={instructorId!}
      />
    </TableContainer>
  );
};

export default CourseTableDetails;
