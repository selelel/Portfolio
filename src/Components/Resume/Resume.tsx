import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { info } from "../../Context/Info";
import json from "../../Context/resume.json";
import Button from "../../Reuseable UI/Button";
import { capitalize } from "../../utils";
import { marked } from 'marked';

const Resume: React.FC = () => {
  const data = json
  return (
    <>
      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <div className="flex justify-end">
          <Button secondary className="text-sm text-gray-900">
          <a
            href="https://drive.google.com/file/d/1HdcKP064ZQ90JBHXd8S7_LtoFjTKvvVF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
              View Actual Resume
            </a>
          </Button>
        </div>

        <p className="font-semibold font-body text-lg text-center">{`${data.userFirstName} ${data.userLastName}`}</p>
        <p className="font-body text-center">{data.userHeading}</p>
        <div className="flex flex-wrap justify-center">
          {[data.userEmail, data.userPhoneNumber, data.userAddress].filter(Boolean).join(" | ")}
        </div>
        <div className="flex flex-wrap justify-center">
        {data.links.map((d) => (
          <p key={d.network} onClick={() => window.open(d.url, "_blank", "noreferrer")}>
            {d.network} |
          </p>
        ))}
      </div>
      </div>


      <Section title="About" content={info.about} />
      <Section title="Objective" content={info.objective} />

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">Education</p>
        {data.education.map((d, i) => (
          <EducationItem key={i} institution={d.institution} studyType={d.studyType} completionDate={d.completionDate} />
        ))}
      </div>

      <ExperienceSection work={data.work} />

      <SkillsSection skills={data.skills} />

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">Certification</p>
        <ul className="list-disc ml-5">
          {data.certifications.map((d) => (
            <li key={d.id} className="text-justify m-1">
            {d.description} - <strong><a href={d.url} target="_blank" rel="noreferrer">{d.issuedBy}</a></strong>
          </li>
          ))}
          <li className="text-justify m-1">Tagisan ng Talino Codefest 2022-2023 Local Level - <strong><a href="https://drive.google.com/file/d/1UGECzkig1-vdIDx3uZR2qiP1vgsxXl5E/view?usp=sharing" target="_blank" rel="noreferrer">STI College Carmona</a></strong></li>
        </ul>
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">Extra-Curricular Activities</p>
        <ul className="list-disc ml-5">
          {info.extra.map((activity, index) => (
            <li key={index} className="text-justify m-1">{activity}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
    <p className="font-semibold font-body text-lg">{title}</p>
    <p className="text-justify">{content}</p>
  </div>
);

// Define types for the EducationItem component
interface EducationItemProps {
  institution: string;
  studyType: string;
  completionDate: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, studyType, completionDate }) => (
  <div className="flex justify-between">
    <div className="w-fit">
      <strong><p>{institution}</p></strong>
      <p>{studyType}</p>
    </div>
    <p>{completionDate}</p>
  </div>
);

const ExperienceSection= ({ work }: any) => (
  <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
    <p className="font-semibold font-body text-lg">Experience</p>
    {work.map((job: { company: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; role: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string; }, index: Key | null | undefined) => (
      <div key={index} className="flex">
        <div className="my-1">
        <div className="flex items-center text-base">
  <strong className="mr-2">{job.company}</strong> | 
  <span className="ml-2">{job.role}</span>
</div>
          <div 
            className="text-justify ml-2" 
            dangerouslySetInnerHTML={{ __html: marked(job.description) as string }}
          />
        </div>
      </div>
    ))}
  </div>
);

const SkillsSection = ({ skills }: any) => (
  <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
    <p className="font-semibold font-body text-lg">Skills</p>
    <ul className="list-disc ml-5">
      {skills.map(({ skillType, skillValues }: any, index: Key | null | undefined) => (
        <li key={index} className="text-justify m-1">
          <strong>{capitalize(skillType)}:</strong> {skillValues.join(", ")}
        </li>
      ))}
    </ul>
  </div>
);

export default Resume;
