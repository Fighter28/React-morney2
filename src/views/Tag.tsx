import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from '../components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background-color: white;
  align-items: center;
`;
const InputWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id as string));
    return (
        <Layout>
            <Topbar>
                <Icon fill="black" name="left"/>
                <span>编辑标签</span>
                <Icon fill="white"/>
            </Topbar>
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
                </InputWrapper>
            </div>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};
export {Tag};