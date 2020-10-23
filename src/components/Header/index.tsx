import React, { useEffect } from 'react';
import Navigation from '../Navigation';
export interface Navagiton {
  id: number;
  title: string;
  slug: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

interface NavigationProps {
  navigator: Navagiton[]
}

const Header: React.FC<NavigationProps> = (props) => {
  const { navigator } = props



  return (
    <header className=" bg-green-700 h-12  ">
      <div className="container m-auto flex items-center justify-between h-full">
        <div className=" w-24  flex items-center">
          <img src="http://localhost:1337/admin/0063b2cc64d976ac36f211442466d0ac.png" alt="" />
        </div>
        <Navigation navigator={navigator} />
      </div>

    </header>
  );
}


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context);

//   // ...
//   return {
//     props: {
//       navigations: 1
//     }
//   }
// }


// export const getServerSideProps = async () => {
//   const { API_URL } = process.env
//   const res = fetch(`${API_URL}/`)
// }



export default Header;
