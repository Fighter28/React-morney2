import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CateGorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState(
        {
            tagIds: [] as number[],
            note: '',
            category: '-' as Category,
            amount: 0
        }
    );
    const onChange = (object: Partial<typeof selected>) => {
        setSelected({...selected, ...object});
    };
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds} onchange={(tagIds) => {
                onChange({tagIds});
            }}/>
            <NoteSection value={selected.note} onChange={(note) => {
                onChange({note});
            }}/>
            <CateGorySection value={selected.category} onChange={(category) => {
                onChange({category});
            }}/>
            <NumberPadSection value={selected.amount} onChange={(amount) => {
                onChange({amount});
            }} onOk={() => {
            }}/>
        </MyLayout>
    );
}

export default Money;