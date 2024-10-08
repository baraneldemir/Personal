import React from 'react'

export default function Footer() {
  return (
    <footer data-testid="footer" className="flex flex-col p-4 text-sm text-center text-black dark:text-white">
	<p> 
		Copyright © {new Date().getFullYear()}. All rights reserved. Made by 
       
		
	</p>
    <a
			href="https://github.com/baraneldemir"
			target="_blank"
			rel="noreferrer"
		>
			<span className="font-bold"> Baran Eldemir </span>
		</a>
    </footer>
  )
}
