import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
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
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString as string));
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}
                />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </Center>
        </div>
    );
    const navigate = useNavigate();
    return (
        <Layout>
            <Topbar>
                <Icon fill="black" name="left" onClick={() => {
                    navigate('../tags', {replace: true});
                }}/>
                <span>编辑标签</span>
                <Icon fill="white"/>
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag不存在</Center>}
        </Layout>
    );

};
export {Tag};