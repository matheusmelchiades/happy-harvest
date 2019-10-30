import React, { useState, useEffect } from 'react';

import {
    Layout,
    Input,
    AutoComplete,
    MessageResponse,
    Button,
    Dropdown,
    DatePicker,
} from '../components';
import api from '../../../services/api';
import { FlexRow } from '../Harvest/styles';
import moment from 'moment';

const RESPONSE_INIT = { success: false, error: false, message: '' };
const FORM_INIT = {
    name: '',
    harvestId: null,
};

const SELECT_DATA = [
    { label: '...', option: '' },
    { label: 'Harvest Date', option: 'date' },
    { label: 'Mill Name', option: 'mill' },
];

const SAMPLE_FILTER = {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    mill: '',
};

export default function() {
    const [form, setForm] = useState(FORM_INIT);
    const [filter, setFilter] = useState(SAMPLE_FILTER);
    const [millSelected, setMillSelected] = useState({});
    const [optionSelected, setOptionSelected] = useState({});
    const [optionsHarvests, setOptionsHarvests] = useState([]);
    const [optionsMills, setOptionsMills] = useState([]);
    const [response, setResponse] = useState(RESPONSE_INIT);

    // DELAY ANIMATION MESSAGE RESPONSE
    useEffect(() => {
        setTimeout(() => {
            setResponse(RESPONSE_INIT);
        }, 5000);
    }, [response]);

    // SEARCH FOR MILLS TO AUTOCOMPLETE
    useEffect(() => {
        if (optionSelected !== 'mill') return;
        (async function searchMills() {
            try {
                const response = await api.get('/mill', { params: { search: filter.mill } });

                if (response.status === 200) {
                    setOptionsMills(response.data);
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    const { message } = err.response.data;
                    return setResponse({ ...response, error: true, message });
                }

                return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
            }
        })();
    }, [filter.mill]);

    // SEARCH HARVESTS BY DATE
    useEffect(() => {
        (async function searchHarvestsByDate() {
            try {
                const response = await api.get(`/harvest/date`, {
                    params: { startDate: filter.startDate, endDate: filter.endDate },
                });

                if (response.status === 200) {
                    setOptionsHarvests(response.data);
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    const { message } = err.response.data;
                    return setResponse({ ...response, error: true, message });
                }

                return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
            }
        })();
    }, [filter.startDate, filter.endDate]);

    // GET ALL HARVESTS BY MILL ID
    useEffect(() => {
        if (!millSelected || !millSelected.id) return;

        (async function getHarvestsByMillId() {
            try {
                const millId = millSelected.id;
                const response = await api.get(`/mill/${millId}/harvest`);

                if (response.status === 200) {
                    setOptionsHarvests(response.data);
                }
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    const { message } = err.response.data;
                    return setResponse({ ...response, error: true, message });
                }

                return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
            }
        })();
    }, [millSelected]);

    async function submitForm() {
        try {
            const response = await api.post('/farm', form);

            if (response.status === 200) {
                setResponse({ ...response, success: true, message: response.data.message });
                setForm(FORM_INIT);
                setOptionsMills([]);
                setOptionsHarvests([]);
                millSelected({});
            }
        } catch (err) {
            if (err.response && err.response.status === 422) {
                const { message } = err.response.data;
                return setResponse({ ...response, error: true, message });
            }

            return setResponse({ ...response, error: true, message: 'Erro desconhecido' });
        }
    }

    const handlerSetFilter = (field, value) => {
        setFilter({ ...filter, [field]: value });
    };

    const handlerOptionHarvest = item => {
        const format = 'DD/MM/YYYY';

        return (
            `Start date: ${moment(item.startDate).format(format)} | ` +
            `End Date: ${moment(item.endDate).format(format)}`
        );
    };

    const handlerSetForm = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    return (
        <Layout
            footerStartChildren={<MessageResponse {...response} />}
            footerEndChildren={<Button title="Create Farm" onClick={submitForm} />}
        >
            <Input
                value={form.name}
                label="Name"
                placeholder="Type a new Farm..."
                fullWidth={true}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <br />
            <br />

            <Dropdown
                label="Select how to search a harvest"
                options={SELECT_DATA}
                renderByField={item => item.label}
                onChange={item => setOptionSelected(item)}
            />

            <br />

            {/* OPTION TO SELECT DATE */}
            {optionSelected.option === 'date' && (
                <>
                    <br />
                    <br />
                    <FlexRow>
                        <DatePicker
                            label="Start Date"
                            value={filter.startDate}
                            onChange={value =>
                                handlerSetFilter('startDate', value ? value.toISOString() : null)
                            }
                        />
                        <DatePicker
                            label="End Date"
                            value={filter.endDate}
                            onChange={value =>
                                handlerSetFilter('endDate', value ? value.toISOString() : null)
                            }
                        />
                    </FlexRow>
                </>
            )}

            {optionSelected.option === 'mill' && (
                <>
                    <br />
                    <br />
                    <AutoComplete
                        getOptionLabel={option => option.name}
                        options={optionsMills}
                        onChange={(_, mill) => setMillSelected(mill)}
                        clearOnEscape
                        input={{
                            label: 'Mills',
                            placeholder: 'Choose a mill',
                            onChange: e => handlerSetFilter('mill', e.target.value),
                        }}
                    />
                </>
            )}

            {optionSelected.option && (
                <>
                    <br />
                    <br />
                    <AutoComplete
                        getOptionLabel={handlerOptionHarvest}
                        options={optionsHarvests}
                        onChange={(_, harvest) => {
                            handlerSetForm('harvestId', harvest && harvest.id ? harvest.id : null);
                        }}
                        clearOnEscape
                        input={{
                            label: 'Harvests',
                            placeholder: 'Choose a harvest',
                        }}
                    />
                </>
            )}
        </Layout>
    );
}
