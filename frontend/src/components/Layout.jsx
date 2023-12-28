import React from 'react'

const Layout = ({headerContent,heroContent}) => {
  return (
    <>
      <div className="header-section">
        {headerContent}
      </div>
      <div className="hero-section my-2">
        {heroContent}
      </div>
    </>
  )
}

export default Layout