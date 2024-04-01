import React from "react";
import Link from "next/link";
import Section from "@components/section";

const contacts = [
  {
    category: "Data",
    contacts: [
      { name: "Daniel Raymond", email: "dan@raymond.ch" },
      { name: "Emily Wang", email: "wang.emily2000@gmail.com" },
      { name: "Keenan Burke", email: "k3burke@uwaterloo.ca" },
    ],
  },
  {
    category: "Design",
    contacts: [
      { name: "Jayden Hsiao", email: "jthsiao57@gmail.com" },
      { name: "Pam Wang", email: "pywang9830@gmail.com" },
      { name: "Abby Chan", email: "abigail.chan628@gmail.com" },
    ],
  },
  {
    category: "Web",
    contacts: [
      { name: "Jayden Hsiao", email: "jthsiao57@gmail.com" },
      { name: "Daniel Raymond", email: "dan@raymond.ch" },
    ],
  },
];

export default function About() {
  return (
    <main className="min-h-full bg-zinc-900">
      <Section className="text-white space-y-8">
        <Link href="/">Back to the Class Profile</Link>
        <h2>ABOUT</h2>

        <div className="space-y-2">
          <h3>What&#39;s a class profile?</h3>
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
          <h3>What&#39;s SYDE?</h3>
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
          <h3>Analyst&#39;s Note</h3>
          <p>
            All questions in the questionnaire were optional. The profile may
            not extend beyond this cohort&#39;s experiences and may not be
            applicable to other SYDE cohorts or university students. This
            profile was conducted by students independent of the University of
            Waterloo.
          </p>
          <p>
            Academic terms are denoted as &#39;1A&#39;, 1B, … &#39;4B&#39;,
            while co-op terms are &#39;Co-op 1&#39;, … &#39;Co-op 6&#39;, each
            lasting 4 months. The SYDE co-op sequence follows a &#39;Stream
            4&#39; pattern, with study and co-op terms alternating after 1A.
            Students then complete their final two academic terms, 4A and 4B,
            back to back. Monetary values are expressed in Canadian dollars,
            converted at a rate of 1 USD = 1.36 CAD.
          </p>
        </div>
        <div className="space-y-2">
          <h3>Contact us</h3>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between">
            {contacts.map(({ category, contacts }, index) => (
              <div key={index}>
                <h4>{category}</h4>
                <ul className="space-y-0.5">
                  {contacts.map((contact, index) => (
                    <li key={index}>
                      {contact.name}:{" "}
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
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
