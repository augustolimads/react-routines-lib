import styled from 'styled-components'

export const Slider = styled.label`
    display: inline-block;
    height: 32px;
    position: relative;
    width: 56px;

    input{
        display: none;
    }

    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
}

.slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 24px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 24px;
}

input:checked + .slider {
    background-color: #66bb6a;
}

input:checked + .slider:before {
    transform: translateX(24px);
}

.slider.round {
    border-radius: 32px;
}

.slider.round:before {
    border-radius: 50%;
}
`;