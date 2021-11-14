import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue} from 'react-native-responsive-fontsize';

interface TransactionsProps {
    type: 'positive' | 'negative';
    
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`;

export const Amount = styled.Text<TransactionsProps>`
        font-family: ${({theme}) => theme.fonts.regular};
        font-size: ${RFValue(20)}px;
        margin-top: 2px;
    color: ${({theme, type}) => type === 'positive' ? theme.colors.sucess : theme.colors.warning};

`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
    padding-bottom: 24px;
`;

export const Category = styled.Text`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};

`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};

    margin-left: 17px;
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};

`;
