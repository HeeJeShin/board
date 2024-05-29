import React from 'react';
import { useRouter } from 'next/navigation';
import boardData from '../../../common/boardData.json';
import * as S from '@styles/common.style';

const BoardListUI: React.FC = () => {
    const router = useRouter();

    const handleItemClick = (boardNo: number) => {
        router.push(`/board/${boardNo}`);
    };

    return (
        <S.Wrapper>
            <h1>게시판 리스트</h1>
            <ul>
                {boardData.map((board) => (
                    <li key={board.boardNo} onClick={() => handleItemClick(board.boardNo)}>
                        <span>{board.boardNo}</span>
                        <span>{board.title}</span>
                    </li>
                ))}
            </ul>
        </S.Wrapper>
    );
};

export default BoardListUI;
