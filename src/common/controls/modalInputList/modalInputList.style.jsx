import styled from 'styled-components';
import colors from 'assets/styles/colors';

const ModalInputList = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    min-height:282px;
    
    .modal-content{
        &_subtitle{
            font-family: CircularStd, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-left: 28px;
    margin-top: 10px;
    color: #505669;
        }
        &_header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
            padding: 12px 16px 12px 28px;
            color: ${colors.secundary_color_700};
            h2 {
                font-size: 24px;
                font-family: CircularStd, sans-serif;
                font-style: normal;
                font-weight: 900;
                line-height: 30.36px;
                margin: 0;
            }

            &_remove-icon{
                font-size: 24px;
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        } 

        &_body{
            flex-grow: 1;
            height: fit-content;
            width: 556px;
            padding: 12px 16px;
        }

        &_footer{
            margin-top: auto;
            bottom: 0;
            display: flex;
            justify-content: flex-end;
            gap: 4px;
            padding: 0px 16px 12px 16px;
        }
    }
`;

export default ModalInputList;
