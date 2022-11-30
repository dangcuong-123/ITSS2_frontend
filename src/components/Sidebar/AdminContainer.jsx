import { AdminContainer } from "../../style/index";

const LayoutAdmin = ({ children }) => {
  return (
    <AdminContainer>
      <div className="ml-8 mt-8 min-h-screen">{children}</div>
    </AdminContainer>
  );
};

export default LayoutAdmin;
