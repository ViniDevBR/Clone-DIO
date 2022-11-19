import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover';
import { AiFillHeart } from 'react-icons/ai';
import { Heart, Details } from './styles';
import './styles.css'


export function PopOver(){
  return(
    <Root>
      <Trigger asChild>
        <Heart>
          <AiFillHeart size={25} color='#CC0000'/>
          <p>5</p>
        </Heart>
      </Trigger>

      <Portal>
        <Content className="PopoverContent" sideOffset={5}>
          <Details>
            <h6>Recuperação dos Hearts</h6>
            <p>Você esta com todos os hearts completos!</p>
          </Details>
        </Content>
      </Portal>
    </Root>
  )
}