import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <p>
        Not found page! Please go to <Link to="/">home</Link>!
      </p>
    </div>
  );
};

export default NotFoundPage;
