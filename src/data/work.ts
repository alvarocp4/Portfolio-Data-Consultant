//ts file for definiton of each laboral experience

import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import calendarIconRaw from '../assets/icons/calendar-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';
import lognextLogo from '../assets/images/LogNext-logo.jpg?url';
import sdgLogo from '../assets/images/Sdg-logo.jpg?url';
import AnecaLogo from '../assets/images/Aneca-logo.jpg?url';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  calendar: sanitizeToOutline(calendarIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15)
};

export const work = [
  {
    title: "Senior Data Engineer",
    period:"Feb. 2026 - Today",
    company: "LogNext",
    region: "Madrid, Spain",
    description: [
      "𝗘𝗧𝗟 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻: Build and optimize ETL processes in AWS, dbt and Airflow",
      "𝗗𝗮𝘁𝗮 𝗠𝗼𝗱𝗲𝗹𝗶𝗻𝗴: Leverage Snowflake for effective data modeling and complex query writing",
      "𝗗𝗮𝘁𝗮 𝗩𝗶𝘀𝘂𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀: Create and customize interactive dashboards in Tableau",
      "𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁: Manage projects with deadlines and fulfilling customer requirements",
      "𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻: Develop technical documentation to support knowledge sharing across teams"
    ],
    technologies: [
      "AWS",
      "Airflow",
      "Python",
      "dbt",
      "Snowflake",
      "SQL",
      "Tableau",
      "English"
    ],
    industry: "Business Intelligence Engineer | Marketing Analytics",
    logo: lognextLogo,
    logoUrl:"https://www.lognext.com/",
  },
  {
    title: "Data Consultant",
    period:"Jan. 2024 - Feb. 2026",
    company: "SDG Group",
    region: "Madrid, Spain",
    description: [
      "𝗘𝗧𝗟 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻: Build and optimize ETL processes in AWS, dbt and Airflow",
      "𝗗𝗮𝘁𝗮 𝗠𝗼𝗱𝗲𝗹𝗶𝗻𝗴: Leverage Snowflake for effective data modeling and complex query writing",
      "𝗗𝗮𝘁𝗮 𝗩𝗶𝘀𝘂𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀: Create and customize interactive dashboards in Tableau",
      "𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁: Manage projects with deadlines and fulfilling customer requirements",
      "𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻: Develop technical documentation to support knowledge sharing across teams"
    ],
    technologies: [
      "AWS",
      "Airflow",
      "Python",
      "dbt",
      "Snowflake",
      "SQL",
      "Tableau",
      "English"
    ],
    industry: "Business Intelligence Developer | Global Pharmaceutical Industry",
    logo: sdgLogo,
    logoUrl:"https://www.sdggroup.com/es-es/",
  },
  {
    title: "Data Management Analyst",
    period:"Apr. 2021 - Sep. 2022",
    company: "ANECA",
    region: "Madrid, Spain",
    description: [
      "𝗗𝗮𝘁𝗮 𝗘𝘅𝘁𝗿𝗮𝗰𝘁𝗶𝗼𝗻: Design and execution of queries to extract key business information",
      "𝗗𝗮𝘁𝗮 𝗩𝗶𝘀𝘂𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀: Produce data-driven reports based on requested insights",
      "𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻: Develop informational documentation"
    ],
    technologies: [
      "PostgreSQL",
      "SQL",
      "Excel",
      "Reporting",
      "Data Analytics"
    ],
    industry: "Business Intelligence Analyst | Internal Data Reporting",
    logo: AnecaLogo,
    logoUrl:"https://www.aneca.es/",
  }
];

export type WorkItem = (typeof work)[number];

