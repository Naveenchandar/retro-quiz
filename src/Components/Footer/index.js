import "./index.css";

export function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="footer_info">Made with 💛 By Naveen Chandar 🚀</p>
        <p className="footer_icon footer_info">
          <span>
            <a href="https://github.com/Naveenchandar" target="_blank" rel="noreferrer">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </span>&ensp;
          <span>
            <a href="https://www.linkedin.com/in/naveen-ram/" target="_blank" rel="noreferrer">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </span>
        </p>
        <p className="footer_info">© <span id="copy_right_year">2022</span> Copyright: Retro Quiz</p>
      </footer>
    </div>
  );
}
