interface FormFields {
    name: string;
    email: string;
    message: string;
}

export const validateForm = (formFields: FormFields) => {
    const errors = {
        name: '',
        email: '',
        message: '',
    };
    const { name, email, message } = formFields;
    let isValid = true;

    if (name === '') {
        errors.name = 'Name cannot be empty';
        isValid = false;
    }

    if (email !== '' && !/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email';
        isValid = false;
    }

    if (message === '') {
        errors.message = 'Please provide a message';
        isValid = false;
    }

    return {
        errors,
        isValid,
    };
};
