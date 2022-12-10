import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
        <Link to="/Read">
             <Button > Read </Button> 
             <Button type="reset">Reset</Button>
           </Link>
            
        </ul>
      </nav>
    </div>
  )
}

export default Layout
