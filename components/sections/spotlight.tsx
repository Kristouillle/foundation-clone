import React from "react";

export const Spotlight = React.forwardRef<
    React.HTMLAttributes<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

    return (
        <p>Spotlight Section</p>
    )
});
