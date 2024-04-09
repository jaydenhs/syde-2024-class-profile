import React from "react";

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

export default function ContactUs({ className }) {
  return (
    <div className={`space-y-2 ${className}`}>
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
  );
}
