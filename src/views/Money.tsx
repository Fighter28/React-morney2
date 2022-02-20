import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CateGorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const CateGoryWrapper = styled.div`
  background-color: #c4c4c4;`;
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    amount: 0,
    category: '-' as Category,
};

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecords();
    const onChange = (object: Partial<typeof selected>) => {
        setSelected({...selected, ...object});
    };
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected(defaultFormData);
        }
        setSelected(defaultFormData)
    };
    return (
        <MyLayout scrollTop={6666}>
            <TagsSection value={selected.tagIds} onchange={(tagIds) => {
                onChange({tagIds});
            }}/>
            <NoteSection value={selected.note} onChange={(note) => {
                onChange({note});
            }}/>
            <CateGoryWrapper>
                <CateGorySection value={selected.category} onChange={(category) => {
                    onChange({category});
                }}/>
            </CateGoryWrapper>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})}
                              onOk={submit}/>
        </MyLayout>
    );
}

export default Money;