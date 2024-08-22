import CourseTableDetails from "@/components/courses/CourseTableDetails";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function CourseIndex() {
    const { t } = useTranslation();
    const { courses } = usePage<any>().props;

    return (
        <>
            <Toolbar routeCreate="courses/create" currentPage={t("Courses")} />
            <CourseTableDetails coursesData={courses} />
        </>
    );
}

export default CourseIndex;
