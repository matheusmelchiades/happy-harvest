import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Button, Layout, MessageResponse, DatePicker, AutoComplete } from '../components';
import { FlexRow } from './styles';

const RESPONSE_INIT = { success: false, error: false, message: '' };
const FORM_INIT = {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    millId: null,
};

export default function() {
    const [form, setForm] = useState(FORM_INIT);
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState([]);
    const [response, setResponse] = useState(RESPONSE_INIT);

    useEffect(() => {
        setTimeout(() => {
            setResponse(RESPONSE_INIT);
        }, 5000);
    }, [response]);

    useEffect(() => {
        (async function searchMills() {
            try {
                const response = await api.get('/mill', { params: { search } });

                if (response.status === 200) {
                    setOptions(response.data);
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    const { message } = err.response.data;
                    return setResponse({ ...response, error: true, message });
                }

                return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
            }
        })();
    }, [search]);

    async function submitForm() {
        try {
            const response = await api.post('/harvest', form);

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

    const onChangeDate = (date, field) => {
        if (date) {
            setForm({ ...form, [field]: date.toISOString() });
        }
    };

    const handleMillSelect = (_, mill) => {
        if (mill && mill.id) {
            setForm({ ...form, millId: mill.id });
        } else {
            setForm({ ...form, millId: null });
        }
    };

    return (
        <Layout
            footerStartChildren={<MessageResponse {...response} />}
            footerEndChildren={<Button title="Create Harvest" onClick={submitForm} />}
        >
            <FlexRow>
                <DatePicker
                    label="Start Date"
                    value={form.startDate}
                    onChange={value => onChangeDate(value, 'startDate')}
                />
                <DatePicker
                    label="End Date"
                    value={form.endDate}
                    onChange={value => onChangeDate(value, 'endDate')}
                />
            </FlexRow>
            <br />
            <br />
            <AutoComplete
                getOptionLabel={option => option.name}
                options={options}
                onChange={handleMillSelect}
                clearOnEscape
                input={{
                    label: 'Mill',
                    placeholder: 'Choose a mill',
                    onChange: e => setSearch(e.target.value),
                }}
            />
        </Layout>
    );
}
