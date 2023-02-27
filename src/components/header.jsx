import React, { useEffect, useRef, useState } from "react";
import profile from "../images/profile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div className="w-full h-[52px] bg-white pt-0 sticky top-0">
            <div className="w-[95%] mx-auto inline-flex justify-center">
                <div
                    onClick={() => history.push({ pathname: "/" })}
                    className="text-primary-dark cursor-pointer font-[600] text-[22px] font-eczar leading-[52px] whitespace-nowrap"
                >
                    Ulanyjynyň üç arka maglumaty
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
