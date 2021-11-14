import React from 'react';

import { Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles';

interface Category {
    name: string,
    icon: string;
}

export interface TransactionCardProps {
    data: {
        title: string; 
        type: 'positive' | 'negative';
        amount: string;
        category: Category;
        date: string;
    }
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {
    return (
        <Container>
            <Title>{data.data.title}</Title>
            <Amount type={data.data.type}>
                {data.data.type === 'negative' && '- '}
                {data.data.amount}
                </Amount>
            <Footer>
                <Category> 
                    <Icon name={data.data.category.icon}/>
                    <CategoryName>{data.data.category.name}</CategoryName>
                </Category>
                <Date>{data.data.date}</Date>
            </Footer>
        </Container>
    )
}