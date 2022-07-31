import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

import { PageSection, SectionHeader } from '@common/ui';
import { validateForm } from '@common/utils';

import { messages } from './messages';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message,
        };

        const { errors, isValid } = validateForm(data);
        setErrors(errors);

        if (isValid) {
            setLoading(true);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.status === 200) {
                toast.success('Message sent!');
            } else {
                toast.error('Something went wrong!');
            }
            setLoading(false);
        }
    };

    return (
        <PageSection>
            <SectionHeader header={messages.title} />
            <div className="card w-full bg-base-200">
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-control">
                            <label className="input-group">
                                <span>{messages.name}</span>
                                <input
                                    type="text"
                                    placeholder={messages.namePlaceholder}
                                    className={`input input-bordered w-full ${
                                        errors.name !== '' ? 'input-error' : ''
                                    }`}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setErrors({ ...errors, name: '' });
                                    }}
                                />
                            </label>
                            <label className="label">
                                <span className="label-text-alt text-error">
                                    {errors.name}
                                </span>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    {messages.emailTag}
                                </span>
                            </label>
                            <label className="input-group">
                                <span>{messages.email}</span>
                                <input
                                    type="text"
                                    placeholder={messages.emailPlaceholder}
                                    className={`input input-bordered w-full ${
                                        errors.email !== '' ? 'input-error' : ''
                                    }`}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, email: '' });
                                    }}
                                />
                            </label>
                            <label className="label">
                                <span className="label-text-alt text-error">
                                    {errors.email}
                                </span>
                            </label>
                        </div>

                        <div className="form-control pb-4">
                            <label className="label">
                                <span className="label-text">
                                    {messages.message}
                                </span>
                            </label>
                            <textarea
                                className={`textarea- textarea h-36 ${
                                    errors.message !== '' ? 'input-error' : ''
                                }`}
                                placeholder={messages.messagePlaceholder}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setErrors({ ...errors, message: '' });
                                }}
                            />
                            <label className="label">
                                <span className="label-text-alt text-error">
                                    {errors.message}
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary btn-block ${
                                loading ? 'loading' : ''
                            }`}
                        >
                            {!loading && messages.submit}
                        </button>
                    </form>
                </div>
            </div>
        </PageSection>
    );
};
