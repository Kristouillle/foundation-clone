import React from "react";

export const Testimonials = React.forwardRef<
    React.HTMLAttributes<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

    return (
        <p>Testimonials Section</p>
    )
});
