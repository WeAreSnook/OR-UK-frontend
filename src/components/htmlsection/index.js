import InjectHtml from "../home/InjectHtml";

export const covertHeadingToIdentifier = (heading) => {
  if (!heading || typeof heading !== "string") return null;
  return heading.toLowerCase().replace(/\s/g, "-");
};

export const HtmlSection = ({ section, index, children }) => {
  const header = section.sectionHeading ? (
    <h2 id={`section-${index + 1}-heading`}>{section.sectionHeading}</h2>
  ) : null;

  const sectionClassName = covertHeadingToIdentifier(section.sectionHeading);

  return (
    <div className={sectionClassName}>
      <InjectHtml
        itemKey={`${index}body`}
        paragraphText={section.sectionBody}
        paragraphHeader={header}
      />
      {children}
    </div>
  );
};

const HtmlSections = ({ sections }) =>
  sections.map((section, index) => (
    <HtmlSection key={section.id} index={index} section={section} />
  ));

export default HtmlSections;
