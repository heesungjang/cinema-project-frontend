import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
        
    
`;

export default globalStyles;
