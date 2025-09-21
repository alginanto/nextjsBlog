import { LogOut, Pencil, Shield, User, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import {  FaRegBookmark } from "react-icons/fa";

const UserButton = () => {
    return ( <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src=''></AvatarImage>
                <AvatarFallback className="border-2 border-slate-500 dark:border-slate-30">
                    <UserRound/>
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <button className="flex gap-2 items-center">
                    <User size={18}/> profile
                </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
             <DropdownMenuItem>
                <button className="flex gap-2 items-center">
                    <Pencil size={18}/> Create Post
                </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <button className="flex gap-2 items-center">
                    <FaRegBookmark size={18}/> BookMark
                </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <button className="flex gap-2 items-center">
                    <Shield size={18}/> Admin
                </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <button className="flex gap-2 items-center">
                    <LogOut size={18}/> LogOut
                </button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu> );
}
 
export default UserButton;