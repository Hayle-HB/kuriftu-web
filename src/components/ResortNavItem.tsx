import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ResortNavItemProps {
  link: string;
  title: string;
  onClick: () => void;
}

const ResortNavItem: React.FC<ResortNavItemProps> = ({
  link,
  title,
  onClick,
}) => {
  return (
    <Nav.Link onClick={onClick} as={Link} to={link}>
      {title}
    </Nav.Link>
  );
};

export default ResortNavItem;
