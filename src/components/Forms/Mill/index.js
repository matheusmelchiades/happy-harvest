import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import { Button, Layout, MessageResponse, Input } from '../components';

const FORM_INIT = { name: '' };
const RESPONSE_INIT = { success: false, error: false, message: '' };

export default function() {
    const [form, setForm] = useState(FORM_INIT);
    const [response, setResponse] = useState({ success: false, error: false, message: '' });

    useEffect(() => {
        setTimeout(() => {
            setResponse(RESPONSE_INIT);
        }, 5000);
    }, [response]);

    async function submitForm() {
        try {
            const response = await api.post('/mill', form);

            if (response.status === 200) {
                setResponse({ ...response, success: true, message: response.data.message });
                setForm(FORM_INIT);
            }
        } catch (err) {
            if (err.response && err.response.status === 422) {
                const { message } = err.response.data;
                return setResponse({ ...response, error: true, message });
            }

            return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
        }
    }

    return (
        <Layout
            footerStartChildren={<MessageResponse {...response} />}
            footerEndChildren={<Button title="Create Mill" onClick={submitForm} />}
        >
            <br />
            <br />
            <Input
                value={form.name}
                label="Name"
                placeholder="Type a new mill..."
                fullWidth={true}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
        </Layout>
    );
}
