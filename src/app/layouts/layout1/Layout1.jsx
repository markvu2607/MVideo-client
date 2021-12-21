import Header from "./header/Header"

const Layout1 = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout1