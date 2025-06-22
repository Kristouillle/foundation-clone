"use client"

import * as React from "react";
import {useEffect} from "react";

import {cn} from "@/lib/utils";
import {PopoverComponent} from "@/components/popover";
import {Spinner} from "@/components/spinner";
import {useDebouncedCallback} from "use-debounce";

const Check = React.forwardRef<
    React.InputHTMLAttributes<HTMLInputElement>,
    React.InputHTMLAttributes<HTMLInputElement>
>(({hidden, ...props}, ref) => {
    return (
        <svg
            id={`${props.id}-mark`}
            className={`w-4 h-4 text-green-500 ${
                hidden ? "hidden" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M1 5.917 5.724 10.5 15 1.5"
            />
        </svg>
    );
});

const Mark = React.forwardRef<
    React.InputHTMLAttributes<HTMLInputElement>,
    React.InputHTMLAttributes<HTMLInputElement>
>(({hidden, ...props}, ref) => {
    return (
        <svg
            id={`${props.id}-mark`}
            className={cn(
                "w-3 h-3 text-red-500",
                hidden ? "hidden" : "",
            )}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
        </svg>
    );
});

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    validate?: (value: any) => ValidationResponse;
    validateOnServer?: (value: any) => Promise<string>;
    animateOnLoad?: boolean;
}

export interface ValidationResponse {
    success: boolean;
    errors: string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            validate,
            validateOnServer,
            className,
            type,
            animateOnLoad,
            ...props
        },
        ref,
    ) => {
        const [isSuccess, setIsSuccess] = React.useState(false);
        const [isError, setIsError] = React.useState(false);
        const [isLoading, setIsLoading] = React.useState(false);

        const displayError = (errors: string[]) => {
            setIsSuccess(false);
            setIsError(true);
            setIsLoading(false);
        };

        const displaySuccess = () => {
            setIsSuccess(true);
            setIsError(false);
            setIsLoading(false);
        };

        const displayLoading = () => {
            setIsSuccess(false);
            setIsError(false);
            setIsLoading(true);
        };

        const debounce = useDebouncedCallback(
            // function
            (value) => {
                // validate subdomain is valid
                // no space, only dashes and underscores allowed
                // only lowercase letters allowed
                // max length 20
                // if valid, set value
                // else, show toast error
                const validationResponse = validate
                    ? validate(value)
                    : {
                        success: false,
                        errors: [],
                    };

                if (validationResponse.errors.length > 0) {
                    displayError(validationResponse.errors);
                } else {
                    if (validateOnServer) {
                        validateOnServer(value).then((res: any) => {
                            const response = JSON.parse(res);
                            if (response.errors?.length > 0) {
                                displayError(response.errors);
                            } else {
                                displaySuccess();
                            }
                        });
                    } else if (validationResponse.success) {
                        displaySuccess();
                    } else {
                        setIsLoading(false);
                    }
                }
            },
            // delay in ms
            500,
        );

        const defaultClass =
            "w-[20rem] px-4 py-2 border text-gray-700 bg-white border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300";

        const colorClass =
            "dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring";

        const disabledClass = "cursor-not-allowed opacity-50";

        const errorClass = "ring-red-500 focus:ring-red-500";

        const successClass = "ring-green-500 border-2 border-green-500 focus:border-green-500 focus:ring-0 focus:border-none";

        function onChange(e: React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.value;
            if (value && (validate || validateOnServer)) {
                // resetToasts();
                displayLoading();
                debounce(value);
            } else {
                setIsSuccess(false);
                setIsError(false);
                setIsLoading(false);
            }
        }

        useEffect(() => {
            if (animateOnLoad) {
                onChange({
                    target: {value: props.value ?? props.defaultValue},
                } as any);
            }
        }, []);

        return (
            <React.Fragment>
                {label && (
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        htmlFor={id}
                    >
                        {label}

                    </label>
                )}
                <div className="relative items-center mt-2">
                    <div className={cn(
                        "flex items-center gap-1",
                        defaultClass,
                        colorClass,
                        isSuccess ? successClass : "",
                        isError ? errorClass : "",
                        className,
                        props.disabled ? disabledClass : "",
                    )}
                    >
                        <input
                            id={id}
                            name={id}
                            className={"w-[4rem] flex-1 border-none outline-none border-0 focus:border-none focus:outline-none  focus:ring-0 focus-visible:border-none focus-visible:outline-none  focus-visible:ring-0"}
                            {...props}
                            placeholder={props.placeholder}
                            autoComplete="new-password"
                            onChange={(e) => {
                                onChange(e);
                            }}
                            required
                        />
                        <div
                            className="text-gray-400 flex-[0_1_auto]">
                            <span>.companies.tailed.ca</span>
                        </div>
                        {/*<div className={"w-4 h-4"} hidden={isSuccess || isError || isLoading} />*/}
                        <Check id={id} hidden={!isSuccess}/>
                        <Mark id={id} hidden={!isError}/>
                        <Spinner
                            id={`${id}-spinner`}
                            hidden={!isLoading}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    },
);
Input.displayName = "Input";

export {Input};
