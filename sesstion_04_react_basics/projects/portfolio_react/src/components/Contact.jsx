// src/components/Contact.jsx
import { useState } from 'react';

function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Error state
    const [errors, setErrors] = useState({});
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };