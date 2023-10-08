import { useState } from "react";

const useToggler = (defaultValue) => {
    const [toggled, setToggled] = useState(defaultValue);
    const handleToggler = (toggled) => {
        setToggled(!toggled);
    };
    return [toggled, handleToggler];
};

export default useToggler;
