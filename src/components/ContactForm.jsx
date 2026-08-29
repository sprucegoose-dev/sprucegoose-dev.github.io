import React, { useState } from 'react';

const initialForm = { name: '', email: '', message: '', website: '' };
const defaultEndpoint = 'https://warchestonline.com/api/contact/send';

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [state, setState] = useState('idle');

    const handleChange = ({ target }) => {
        setForm((current) => ({ ...current, [target.name]: target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (form.website) return;

        const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || defaultEndpoint;
        const payload = { name: form.name, email: form.email, message: form.message };
        setState('sending');

        if (!endpoint) {
            window.location.href = `mailto:morgan@sprucegoose.dev?subject=Portfolio%20message%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`;
            setState('sent');
            return;
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error('Unable to send message');
            setForm(initialForm);
            setState('sent');
        } catch (error) {
            setState('error');
        }
    };

    return (
        <form id="contact-us" className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-copy">
                <p className="eyebrow">Open to good problems</p>
                <h2>Have a project in mind?</h2>
                <p>Tell me what you are building, fixing, or trying to make more fun.</p>
            </div>
            <div className="form-fields">
                <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
                <label>Email<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
                <label className="full-width">Message<textarea name="message" value={form.message} onChange={handleChange} rows="5" required /></label>
                <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={handleChange} /></label>
                <button className="button button-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : 'Send message ->'}</button>
                {state === 'sent' && <p className="form-status">Thanks. Your message is on its way.</p>}
                {state === 'error' && <p className="form-status form-error">That did not go through. Please try again or email me directly.</p>}
            </div>
        </form>
    );
}
