"use server"


import {ObjectId} from "bson";

export async function isCompanySubdomainValid(subdomain: string) {
    // validate subdomain is valid
    // no space, only dashes and underscores allowed
    // only lowercase letters allowed
    // max length 20
    // if valid, return success: true
    // else, return json error with reason

    let response: {
        success: boolean;
        errors: string[];
    } = {
        success: false,
        errors: [],
    };

    if (subdomain.length > 20) {
        response.errors.push("subdomain is more than 20 characters");
    }

    if (!/^[a-z0-9_-]*$/.test(subdomain)) {
        response.errors.push(
            "subdomain contains invalid characters; only lowercase letters, numbers, dashes, and underscores are allowed",
        );
    }

    if (subdomain.includes(" ")) {
        response.errors.push("subdomain contains spaces");
    }

    if (subdomain.includes("__")) {
        response.errors.push("subdomain contains double underscores");
    }

    if (subdomain.includes("--")) {
        response.errors.push("subdomain contains double dashes");
    }

    if (subdomain.includes("_-") || subdomain.includes("-_")) {
        response.errors.push("subdomain contains underscore dash");
    }

    if (response.errors.length > 0) {
        return JSON.stringify(response);
    }

    // const companies: {
    //     _id: ObjectId;
    //     subdomain: string;
    // }[] = JSON.parse(await getCompaniesSubdomains());

    const companies: {
        _id: ObjectId;
        subdomain: string;
    }[] = JSON.parse("[]");

    const isSubdomainValid = !companies.some(
        (company) => company.subdomain === subdomain,
    );

    if (!isSubdomainValid) {
        response.errors.push("subdomain is already taken");
    }

    if (response.errors.length > 0) {
        return JSON.stringify(response);
    }

    return JSON.stringify({ success: true });
}
