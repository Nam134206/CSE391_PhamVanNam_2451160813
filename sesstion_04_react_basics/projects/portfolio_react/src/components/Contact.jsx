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