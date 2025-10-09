//TS file for match the badge details and badge icons
import AirflowLogo from "../assets/logos/Airflow-logo.svg";
import AWSLogo from "../assets/logos/AWS-logo.svg";

export const certifications = [
  { id: "AWS Cloud Practitioner CLFC02", code: "CLF-C02", title: "AWS Cloud Practitioner ", description: "AWS Cloud Practitioner Certification: Validates basic AWS knowledge, cloud fluency, and the ability to identify key AWS services needed for cloud projects.", logo: AWSLogo },
  { id: "Airflow DAG Authoring", code: "DAG-Authoring", title: "Apache Airflow DAG Authoring", description: "Astronomer Apache Airflow DAG Authoring Certification: Validates the ability to design, configure, and manage reliable Airflow DAGs using best practices, appropriate operators, and effective task settings for daily workflow management.", logo: AirflowLogo },
  { id: "Airflow Fundamentals", code: "Airflow Fundamentals", title: "Apache Airflow Fundamentals", description: "Astronomer Apache Airflow Fundamentals Certification: Validates the ability to create, manage, and monitor DAGs effectively, understand Airflow components and task lifecycles, use the UI for debugging, and build pipelines following best practices.", logo: AirflowLogo },
];
