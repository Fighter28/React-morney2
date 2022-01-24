import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CateGorySection} from './Money/CategorySection';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
    return (
        <MyLayout>
            <TagsSection/>
            <NoteSection/>
            <CateGorySection/>
            <NumberPadSection/>
        </MyLayout>
    );
}

export default Money;