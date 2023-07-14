import { styled } from "styled-components"

export const Layout = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img``
export const Title = styled.span``
export const Message = styled.span``
export const Text = styled.span``
export const AlreadyHaveAnAccount = styled.div``
export const SignUpForm = styled.div``
export const SignUpLayout = styled.div`
    width: 90%;
    display: flex;
    padding: 50px 20px;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.1);
    ${Image} {
        width: 50%;
    }
    ${SignUpForm} {
        gap: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        ${Title} {
            font-size: 1.4em;
            font-weight: 600;
        }
        ${Message} {
            text-align: center;
        }
    }
    ${AlreadyHaveAnAccount} {
        gap: 10px;
        display: flex;
        ${Text}:last-child {
            color: #71B6B5;
            cursor: pointer;
            font-weight: 600;
        }
    }
    @media (max-width: 1023px) {
        max-width: 400px;
        ${Message} {
            max-width: 90%;
        }
        ${Image} {
            display: none;
        }
    }
    @media (min-width: 1024px) {
        max-width: 1200px;
    }
`