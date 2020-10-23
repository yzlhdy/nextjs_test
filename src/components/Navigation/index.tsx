import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
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
const Navigation: React.FC<NavigationProps> = (props) => {

  const { navigator } = props

  const router = useRouter()
  return (
    <ul className="flex justify-between text-white font-bold">
      {
        navigator.map((item: Navagiton, index: number) => {
          return (
            <li className="px-10" key={index}>
              <Link href={item.slug} >
                <a href="" className={router.pathname === `${item.slug}` ? ' text-red-700 border-b-4  border-blue-700 pt-3' : ""}> {item.title}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Navigation;
