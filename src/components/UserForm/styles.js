import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 0;
    &[disabled]{
        opacity: .45;
    }
`
export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled]{
        opacity: .45;
    }
`

export const Button = styled.button`
   background: #f59e42;
   border-radius: 3px;
   color: #fff;
   height: 32px;
   display: block;
   width: 100%;
   text-align: center;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
`

export const Error = styled.span`
    font-size: 20px;
    color: red;
`