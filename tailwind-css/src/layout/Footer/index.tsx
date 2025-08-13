interface FooterProps {
  title: string;
  description?: string;
  links?: { label: string; href: string }[];
}

export const Footer = ({ title, description, links }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-gray-400 text-sm">{description}</p>
          )}
        </div>

        {links && (
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={`footer-link-${index}`}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
};
