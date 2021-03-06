import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';
const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background-color: #D9D9D9;
      display: inline-block;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: burlywood;
      }
    }
  }

  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 10px;
  }
`;
type Props = {
    value: number[];
    onchange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags, addTag} = useTags();
    const selectedTagIds = props.value;
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onchange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onchange([...selectedTagIds, tagId]);
        }
    };

    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}
                        key={tag.id}>{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};

export {TagsSection};