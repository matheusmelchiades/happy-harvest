import React, { useState } from 'react';
import api from '../../../services/api';

import Button from '../Button';
import Layout from '../Layout';
import MessageResponse from '../MessageResponse';
import { Input } from './styles';

const FORM_INIT = {
    name: '',
};

export default function() {
    const [form, setForm] = useState(FORM_INIT);
    const [response, setResponse] = useState({ success: false, error: false, message: '' });

    async function submitForm() {
        try {
            const response = await api.post('/mill', form);

            if (response.status === 200) {
                setResponse({ ...response, success: true, message: response.data.message });
                setForm(FORM_INIT);
            }
        } catch (err) {
            if (err.response.status === 422) {
                const { message } = err.response.data;
                setResponse({ ...response, error: true, message });
            }
        }
    }

    return (
        <Layout
            footerStartChildren={<MessageResponse {...response} />}
            footerEndChildren={<Button title="Create Mill" onClick={submitForm} />}
        >
            <Input
                value={form.name}
                label="Name"
                placeholder="Type a new mill..."
                fullWidth={true}
                variant="outlined"
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
        </Layout>
    );
}
