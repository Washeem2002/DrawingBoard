
import "./globals.css";

import { AppWrapper } from "@/context";
import { Fontwrapper } from "@/context/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden no-scroolbar transp">
        
        <Fontwrapper>
       <AppWrapper>
         {children}
         </AppWrapper>
       </Fontwrapper>
       
     
        
        
        
        </body>
    </html>
  );
}
