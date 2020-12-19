import React from "react";
import s from './Sidebar.module.css';


/*export type MySidebarType={
    sidebar: SidebarType
}*/
const Sidebar = (/*props: MySidebarType*/) => {

    return (
        <nav className={s.side}>
            <div className={s.block}>
                {/*<Friends
                    sidebar={sidebar}
                    />*/}
            </div>
        </nav>
    )
}
export default Sidebar;
