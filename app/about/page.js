import React from "react";
import Link from "next/link";
import Section from "@components/section";
import ContactUs from "@components/contact-us";

export default function About() {
  return (
    <main className="min-h-full bg-zinc-900">
      <Section className="text-white space-y-8">
        <Link href="/">Back to the Class Profile</Link>
        <h2>ABOUT</h2>

        <div className="space-y-2">
          <h3>What's a class profile?</h3>
          <p>
            Since{" "}
            <Link
              href="https://joeyloi.com/SYDE2017classprofile.pdf"
              target="_blank"
            >
              its first inception in 2017
            </Link>
            , the class profile attempts to capture the thoughts, feelings, and
            lived experiences of the class from the beginning of 1A in Fall
            2019, up until graduation in Spring 2024.
          </p>
        </div>
        <div className="space-y-2">
          <h3>What's SYDE?</h3>
          <p>
            <Link
              href="https://uwaterloo.ca/systems-design-engineering/"
              target="_blank"
            >
              Systems Design Engineering (SYDE)
            </Link>{" "}
            is a multidisciplinary program at the University of Waterloo (UW)
            focusing on systems theory and user-centric design through
            mechanical and electrical engineering fields. The curriculum
            emphasizes continuous design iterations, user testing, and feedback
            to develop technical skills and user design thinking.
          </p>
        </div>
        <div className="space-y-2">
          <h3>Who participated?</h3>
          <p>
            The SYDE 2024 cohort experienced 8 academic terms and 6 co-op terms
            over 5 years with 94 students graduating. 67 of 94 (71.3%) of SYDE
            2024 students participated in this survey between Feb 2024 - Mar
            2024.
          </p>
        </div>
        <div className="space-y-2">
          <h3>Analyst's Note</h3>
          <p>
            All questions in the questionnaire were optional. The profile may
            not extend beyond this cohort's experiences and may not be
            applicable to other SYDE cohorts or university students. This
            profile was conducted by students independent of the University of
            Waterloo.
          </p>
          <p>
            Academic terms are denoted as '1A', 1B, … '4B', while co-op terms
            are 'Co-op 1', … 'Co-op 6', each lasting 4 months. The SYDE co-op
            sequence follows a 'Stream 4' pattern, with study and co-op terms
            alternating after 1A. Students then complete their final two
            academic terms, 4A and 4B, back to back. Monetary values are
            expressed in Canadian dollars, converted at a rate of 1 USD = 1.36
            CAD.
          </p>
          <p>
            Data about the University of Waterloo is collected from the{" "}
            <Link
              href="https://uwaterloo.ca/equity-diversity-inclusion-anti-racism/equity-survey/equity-survey-results"
              target="_blank"
            >
              2021 UWaterloo Equity Survey
            </Link>
            ,
          </p>
        </div>
        <ContactUs />
      </Section>
    </main>
  );
}

{
  /* 
      From group chat:
      102 total
      Remove: Cynthia, Josef, Julia duplicate, Karim (4)
      Joined: Alex, Adam, Ashley, Kristen, Umar (5)
      Left: (9)
        6 joined another SYDE cohort (Colin, Faith, Lilly, Gaurav, Ghanan, Raewyn)
        1 switched to another UW program (Varun)
        2 left UW (Anna, Suraj)
      Started with: 102 - 4 = 98
      Total graduating: 102 - 4 + 5 - 9 = 94

      "Starting with 98 students,
          gaining 5 new friends and losing 9 (6 of which joined a different SYDE
          cohort),"
    */
}
