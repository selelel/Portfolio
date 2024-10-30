import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mx-10 mb-4 mt-32 flex flex-col items-center text-sm">
      <h1 className="font-bold text-lg">{"<sel/>"}</h1>

      <ul className="flex gap-3 cursor-pointer">
        <li>
          <a href="/#hero">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#project">Project</a>
        </li>
        <Link to="/blogs">My Blogs</Link>
      </ul>

      <h1 className="text-xs">Developed by Jan Russel Gorembalem</h1>
      <h1 className="text-xs">@2023</h1>
    </div>
  );
}

export default Footer;
