const Footer = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-wide">
          Jira <span className="text-primary">Lite</span>
        </h2>
        <h4 className="mt-5 text-textSecondary">
          A Modern Project Management App inspired by Jira developed by{" "}
          <a
            href="https://github.com/pradeep-jais"
            target="_blank"
            className="text-primary underline underline-offset-2 hover:text-primaryHover transition-colors duration-300"
          >
            pradeep-jais
          </a>
        </h4>
        <p className="mt-8 text-textSecondary">
          © {new Date().getFullYear()} Jira Lite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
