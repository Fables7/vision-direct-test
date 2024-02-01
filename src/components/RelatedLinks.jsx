const links = [
  {
    label: "Can I order contacts without prescription verification?",
    url: "https://www.visiondirect.co.uk/no-prescription-needed",
  },
  {
    label: "Contact lens beginner tips and tricks",
    url: "https://www.visiondirect.co.uk/blog/contact-lens-beginner-tips",
  },
  {
    label: "6 eye exercises to fight eye strain",
    url: "https://www.visiondirect.co.uk/eye-health/eye-exercises-fight-eye-strain",
  },
  {
    label: "How do I care for my contact lenses?",
    url: "https://www.visiondirect.co.uk/eye-care-centre/contact-lens-care",
  },
];

const RelatedLinks = () => {
  return (
    <div className="bg-[#f9f8f8] px-8 py-8 ">
      <h3 className="mb-2">Related links</h3>
      <ul className=" list-disc ml-10">
        {links.map((link) => (
          <li key={link.label}>
            <a className=" text-blue-700" href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
