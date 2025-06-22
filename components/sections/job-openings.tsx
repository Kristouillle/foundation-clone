import React from "react";

export const JobOpenings = React.forwardRef<
    React.HTMLAttributes<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

    return (
        <p>Job Openings Section</p>
    )
});
