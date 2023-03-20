import clsx from "clsx";
import BootstrapTable from "react-bootstrap-table-next";
import styles from "./CourseTable.module.scss";
import { Course } from '@prisma/client';

type CourseTableType = {
    className?: string;
    courses: Course[];
};

const columns = [
    {
        dataField: "id",
        text: "ID",
    },
    {
        dataField: "name",
        text: "Назва",
    },
    {
        dataField: "description",
        text: "Опис",
    },
    {
        dataField: "length",
        text: "Час (в годинах)",
    },
    {
        dataField: "level",
        text: "Рівень",
    },
];

const CourseTable = ({ className, courses }: CourseTableType) => {
    return (
        <div className={clsx(styles.courseTable, className)}>
            <BootstrapTable keyField="id" data={courses} columns={columns}/>
        </div>
    );
};

export default CourseTable;
