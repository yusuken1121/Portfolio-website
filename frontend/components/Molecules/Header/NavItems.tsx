import NavItem from "@/components/Atoms/Header/NavItem";
import { headerOptions } from "@/utils/commonOptions";
import React from "react";

const NavItems = () => {
  let delayTime = 0; //
  return (
    <>
      {headerOptions.map((o) => {
        delayTime += 0.2;
        return (
          <NavItem
            key={o.label}
            linkHref={o.linkHref}
            label={o.label}
            animationDelay={delayTime}
          />
        );
      })}
    </>
  );
};

export default NavItems;
