import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Layout, Input, MessageResponse, Button, AutoComplete } from '../components';
import { FlexRow } from '../Harvest/styles';

const FORM_INIT = { latitude: '', longitude: '', farmId: null };
const RESPONSE_INIT = { success: false, error: false, message: '' };

export default function Field() {
    const [form, setForm] = useState(FORM_INIT);
    const [searchFarm, setSearchFarm] = useState('');
    const [optionsFarm, setOptionsFarm] = useState([]);
    const [response, setResponse] = useState(RESPONSE_INIT);

    useEffect(() => {
        const storageGeo = localStorage.getItem('geolocation');

        if (storageGeo) {
            const parsed = JSON.parse(storageGeo);

            setForm({ ...form, ...parsed });
            localStorage.removeItem('geolocation');
        }
    }, []);

    useEffect(() => {
        (async function searchMills() {
            try {
                const response = await api.get('/farm', { params: { search: searchFarm } });

                if (response.status === 200) {
                    setOptionsFarm(response.data);
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    const { message } = err.response.data;
                    return setResponse({ ...response, error: true, message });
                }

                return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
            }
        })();
    }, [searchFarm]);

    async function submitForm() {
        try {
            const response = await api.post('/field', form);

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

    const handleFieldSelect = (_, farm) => {
        if (farm && farm.id) {
            setForm({ ...form, farmId: farm.id });
        } else {
            setForm({ ...form, farmId: null });
        }
    };

    return (
        <Layout
            footerStartChildren={<MessageResponse {...response} />}
            footerEndChildren={<Button title="Create Field" onClick={submitForm} />}
        >
            <FlexRow>
                <Input
                    value={form.latitude}
                    label="Latitude"
                    placeholder="Type a new latitude..."
                    fullWidth={true}
                    onChange={e => setForm({ ...form, latitude: e.target.value })}
                />
                <div style={{ width: '10%' }} />
                <Input
                    value={form.longitude}
                    label="Longitude"
                    placeholder="Type a new longitude..."
                    fullWidth={true}
                    onChange={e => setForm({ ...form, longitude: e.target.value })}
                />
            </FlexRow>
            <br />
            <br />
            <AutoComplete
                getOptionLabel={option => option.name}
                options={optionsFarm}
                onChange={handleFieldSelect}
                input={{
                    label: 'Farm',
                    placeholder: 'Choose a farm',
                    onChange: e => setSearchFarm(e.target.value),
                }}
            />
        </Layout>
    );
}
