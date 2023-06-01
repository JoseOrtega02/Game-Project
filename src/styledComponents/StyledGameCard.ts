import styled from "styled-components";
import { colors } from "./Colors";
export const StyledGameCard = styled.div`

   .card {
  width: 90%;
  height: auto;
  border-radius: 20px;
  margin-left: auto;
    margin-right: auto;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image:  linear-gradient(144deg, rgb(255 195 0), rgb(243 210 101) 50%, rgb(10 108 199));
}

.card__content {
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
}
   a{
        
        
        img{
            width:100%;
            max-width: 500px;
            border-top-left-radius: 15px;
    border-top-right-radius: 15px;
        }
        text-decoration: none;
        color: white;
        text-align: center;
        h3,h4{
            margin: 0px;
        }
        h4{
            background-color: ${colors.button1};
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
            color: ${colors.primary};
            border-radius: 50%;
        }
    }

`