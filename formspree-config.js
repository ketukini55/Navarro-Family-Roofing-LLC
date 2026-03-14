// formspree-config.js

// Configuration for Formspree email integration

const formspreeEndpoint = 'https://formspree.io/f/{your-form-id}'; // Replace with your Formspree form ID

const submitForm = async (formData) => {
    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

export { submitForm };