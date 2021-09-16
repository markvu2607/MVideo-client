import Header from "./header/Header"

const Layout1 = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout1