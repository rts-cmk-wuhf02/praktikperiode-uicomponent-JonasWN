import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledPerk = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
  padding: 10%;
  grid-column-end: span 3;
  color: ${(props) => props.theme.colors.lightFont};
  background: ${(props) => props.theme.colors.gradientBlue};
  border-radius: ${(props) => props.theme.border.full};
  box-shadow: ${(props) => props.theme.shadow.sm};
  border: 1px solid #82858b;

  .perk-icon {
    align-self: flex-end;
    font-size: 3.25em;
  }

  article {
    height: 50%;
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
      text-transform: uppercase;
    }
    p {
      font-weight: 100;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 3;
    }
  }
`
export default StyledPerk
