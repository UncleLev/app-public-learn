import { Box, Typography, Tabs, Tab } from "@mui/material";
import { PrismaClient, Course } from "@prisma/client";
import styles from "./TabsPage.module.scss";
import { useState } from "react";
import { CodePen, CourseTable, InteractGraph } from "@/components";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

interface ITabsPage {
    courses: Course[];
}

const TabsPage = ({ courses }: ITabsPage) => {
    const [value, setValue] = useState(0);

    const handleChange = (_: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.tabsPage}>
            <div className={styles.tabsContainer}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Таблиця" {...a11yProps(0)} />
                    <Tab label="Графік функції" {...a11yProps(1)} />
                    <Tab label="Інтерактивність " {...a11yProps(2)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <CourseTable courses={courses} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InteractGraph />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CodePen />
                <div>
                    
                </div>
            </TabPanel>
        </div>
    );
};

export default TabsPage;

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const courses = await prisma.course.findMany();

    return {
        props: { courses },
    };
}
