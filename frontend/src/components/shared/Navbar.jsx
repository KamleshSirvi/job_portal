import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { LogOut, Menu, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    // <div className='bg-white'>
    //     <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
    //         <div>
    //             <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
    //         </div>
    //         <div className='flex items-center gap-12'>
    //             <ul className='flex font-medium items-center gap-5'>
    //                 {
    //                     user && user.role === 'recruiter' ? (
    //                         <>
    //                             <li><Link to="/admin/companies">Companies</Link></li>
    //                             <li><Link to="/admin/jobs">Jobs</Link></li>
    //                         </>
    //                     ) : (
    //                         <>
    //                             <li><Link to="/">Home</Link></li>
    //                             <li><Link to="/jobs">Jobs</Link></li>
    //                             <li><Link to="/browse">Browse</Link></li>
    //                         </>
    //                     )
    //                 }
    //             </ul>
    //             {
    //                 !user ? (
    //                     <div className='flex items-center gap-2'>
    //                         <Link to="/login"><Button variant="outline">Login</Button></Link>
    //                         <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
    //                     </div>
    //                 ) : (
    //                     <Popover>
    //                         <PopoverTrigger asChild>
    //                             <Avatar className="cursor-pointer">
    //                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
    //                             </Avatar>
    //                         </PopoverTrigger>
    //                         <PopoverContent className="w-80">
    //                             <div className=''>
    //                                 <div className='flex gap-2 space-y-2'>
    //                                     <Avatar className="cursor-pointer">
    //                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
    //                                     </Avatar>
    //                                     <div>
    //                                         <h4 className='font-medium'>{user?.fullname}</h4>
    //                                         <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
    //                                     </div>
    //                                 </div>
    //                                 <div className='flex flex-col my-2 text-gray-600'>
    //                                     {
    //                                         user && user.role === 'student' && (
    //                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
    //                                                 <User2 />
    //                                                 <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
    //                                             </div>
    //                                         )
    //                                     }

    //                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
    //                                         <LogOut />
    //                                         <Button onClick={logoutHandler} variant="link">Logout</Button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </PopoverContent>
    //                     </Popover>
    //                 )
    //             }

    //         </div>
    //     </div>
    // </div>
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-purple-700">JobPortal</h1>
      <nav className="hidden md:flex space-x-4">
        {user && user.role === "recruiter" ? (
          <>
            <Link
              className="text-gray-600 hover:text-purple-700"
              to="/admin/companies"
            >
              Companies
            </Link>

            <Link
              className="text-gray-600 hover:text-purple-700"
              to="/admin/jobs"
            >
              Jobs
            </Link>
          </>
        ) : (
          <>
            <Link className="text-gray-600 hover:text-purple-700" to="/">
              Home
            </Link>

            <Link className="text-gray-600 hover:text-purple-700" to="/jobs">
              Jobs
            </Link>

            <Link className="text-gray-600 hover:text-purple-700" to="/browse">
              Browse
            </Link>
          </>
        )}
      </nav>
      <div className="flex items-center space-x-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4 mt-6">
              {user && user.role === "recruiter" ? (
                <>
                  <Link
                    className="text-gray-600 hover:text-purple-700"
                    to="/admin/companies"
                  >
                    Companies
                  </Link>

                  <Link
                    className="text-gray-600 hover:text-purple-700"
                    to="/admin/jobs"
                  >
                    Jobs
                  </Link>
                </>
              ) : (
                <>
                  <Link className="text-gray-600 hover:text-purple-700" to="/">
                    Home
                  </Link>

                  <Link
                    className="text-gray-600 hover:text-purple-700"
                    to="/jobs"
                  >
                    Jobs
                  </Link>

                  <Link
                    className="text-gray-600 hover:text-purple-700"
                    to="/browse"
                  >
                    Browse
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                Signup
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </header>
  );
};

export default Navbar;