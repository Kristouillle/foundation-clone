"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue
} from '@/components/ui/select';

// Helper function to get a cookie by name
const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export const Languages: React.FC = () => {
    const [currentLocale, setCurrentLocale] = useState<string>('en');
    const router = useRouter();

    useEffect(() => {
        const locale = getCookie('NEXT_LOCALE') || 'en';
        setCurrentLocale(locale);
    }, []);

    const handleChange = (newLocale: string) => {
        setCurrentLocale(newLocale);

        // Set cookie for NEXT_LOCALE
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        router.refresh();
    };

    return (
        <Select value={currentLocale} onValueChange={handleChange}>
            <SelectTrigger>
                <SelectValue>{currentLocale === 'en' ? 'English' : 'Français'}</SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
        </Select>
    );
};
