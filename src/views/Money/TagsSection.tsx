import styled from 'styled-components';
import React, {useState} from 'react';

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
    value: string[];
    onchange: (selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const selectedTag = props.value;
    const onToggleTag = (tag: string) => {
        const index = selectedTag.indexOf(tag);
        if (index >= 0) {
            props.onchange(selectedTag.filter(t => t !== tag));
        } else {
            props.onchange([...selectedTag, tag]);
        }
    };
    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const getClass = (tag: string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li onClick={() => onToggleTag(tag)} className={getClass(tag)}
                        key={tag}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};

export {TagsSection};