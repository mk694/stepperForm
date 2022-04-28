import Header from "./header/header.component";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default layout;
