import React from "react";

import Section from "@components/section";
import Graph from "@components/graph";
import ImageCollection from "@components/image-collection";
import ContactUs from "@components/contact-us";

import ImageBlob from "@components/image-blob";
import classPic1 from "@images/0-hero/4A.jpg";

export default function Footer() {
  return (
    <Section bgColor="bg-zinc-900" className="section-layout text-white">
      <h2>THANK YOU</h2>
      <div className="space-y-4">
        <h3>Authors' Note</h3>
        <p>
          This class profile was made to tell a story - a story about 94
          brilliant, creative, ambitious humans who journeyed through university
          together. We hope that through this project, you were able to
          understand us better.
        </p>
        <p>
          To our classmates: thank you all for an incredible five years. We will
          cherish the memories we've made together dearly. We wish you all the
          best and can't wait to see what you accomplish in the world!
        </p>
      </div>
      <div className="full overflow-x-hidden overflow-y-hidden">
        <ImageBlob
          src={classPic1}
          className={"scale-150 mt-16 mb-16 md:my-0 md:scale-100 object-cover"}
        />
      </div>
      <ContactUs className="full" />
    </Section>
  );
}
