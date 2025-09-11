// "use client";

// import { useEffect, useState } from "react";
// import { GraduationCap, User, Home, LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Navbar() {
//   const [user, setUser] = useState<any>(null);

//   // Load user from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     window.location.href = "/"; // go back to home
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div
//             className="flex items-center gap-3 cursor-pointer"
//             onClick={() => (window.location.href = "/")}
//           >
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center animate-pulse-soft">
//               <GraduationCap className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               11+ SmartPrep
//             </span>
//           </div>

//           {/* Links */}
//           <div className="hidden md:flex items-center gap-6">
//             <a href="/" className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
//               <Home className="h-4 w-4" /> Home
//             </a>
//             <a href="/schools" className="hover:text-blue-600 transition-colors font-medium">
//               Schools
//             </a>
//             <a href="/regions" className="hover:text-blue-600 transition-colors font-medium">
//               Region Profile
//             </a>
//             <a href="/practice" className="hover:text-blue-600 transition-colors font-medium">
//               Practice Tests
//             </a>
//             <a href="/resources" className="hover:text-blue-600 transition-colors font-medium">
//               Resources
//             </a>
//             <a href="/tutors" className="hover:text-blue-600 transition-colors font-medium">
//               Tutors
//             </a>

//             {!user ? (
//               // If NOT logged in
//               <>
//                 <Button
//                   variant="outline"
//                   className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full"
//                   onClick={() => (window.location.href = "/auth/login")}
//                 >
//                   Sign In
//                 </Button>
//                 <Button
//                   className="bg-blue-600 hover:bg-blue-700 rounded-full"
//                   onClick={() => (window.location.href = "/auth/signup")}
//                 >
//                   Get Started
//                 </Button>
//               </>
//             ) : (
//               // If logged in
//               <>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => (window.location.href = "/profile")}
//                   className="text-blue-600 hover:bg-blue-50 rounded-full"
//                 >
//                   <User className="h-4 w-4 mr-1" />
//                   {user.firstName}
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={handleLogout}
//                   className="text-red-600 hover:bg-red-50 rounded-full"
//                 >
//                   <LogOut className="h-4 w-4 mr-1" /> Logout
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { GraduationCap, User, Home, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ mobile menu toggle

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // go back to home
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center animate-pulse-soft">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              11+ SmartPrep
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="/schools" className="hover:text-blue-600 transition-colors font-medium">
              Schools
            </a>
            <a href="/regions" className="hover:text-blue-600 transition-colors font-medium">
              Region Profile
            </a>
            <a href="/practice" className="hover:text-blue-600 transition-colors font-medium">
              Practice Tests
            </a>
            <a href="/resources" className="hover:text-blue-600 transition-colors font-medium">
              Resources
            </a>
            <a href="/tutors" className="hover:text-blue-600 transition-colors font-medium">
              Tutors
            </a>

            {!user ? (
              <>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full"
                  onClick={() => (window.location.href = "/auth/login")}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 rounded-full"
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = "/profile")}
                  className="text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <User className="h-4 w-4 mr-1" />
                  {user.firstName}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 rounded-full"
                >
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </>
            )}
          </div>

          {/* ✅ Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-md">
          <div className="px-4 py-3 space-y-3 flex flex-col">
            <a href="/" className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="/schools" className="hover:text-blue-600 transition-colors font-medium">
              Schools
            </a>
            <a href="/regions" className="hover:text-blue-600 transition-colors font-medium">
              Region Profile
            </a>
            <a href="/practice" className="hover:text-blue-600 transition-colors font-medium">
              Practice Tests
            </a>
            <a href="/resources" className="hover:text-blue-600 transition-colors font-medium">
              Resources
            </a>
            <a href="/tutors" className="hover:text-blue-600 transition-colors font-medium">
              Tutors
            </a>

            {!user ? (
              <>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full w-full"
                  onClick={() => (window.location.href = "/auth/login")}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 rounded-full w-full"
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => (window.location.href = "/profile")}
                  className="text-blue-600 hover:bg-blue-50 rounded-full w-full flex justify-start"
                >
                  <User className="h-4 w-4 mr-1" />
                  {user.firstName}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 rounded-full w-full flex justify-start"
                >
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
