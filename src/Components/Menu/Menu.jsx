import { useMainContext } from "@/Context";
import "./Menu.scss";
import { Body, Container, Flex, Grid } from "../Tags/Tags";
import { TelegramLogo, TwitterLogo, X } from "@phosphor-icons/react";
import IconButton from "../IconButton/IconButton";
const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMainContext();
  return (
    <>
      <div onClick={() => setIsMenuOpen(false)} hidden={!isMenuOpen} className="h-dvh w-screen fixed inset-0 z-10 bg-black/40 cursor-pointer ">
        <Container onClick={(e) => e.stopPropagation()} className="p-5 cursor-default  lg:w-[25vw] w-screen bg-pep-nopat h-full absolute right-0 border-l border-primary-800/40">
          <header>
            <Flex className="justify-end">
              <IconButton buttonClass="bg-black/30">
                <X onClick={() => setIsMenuOpen(false)} size={24} weight="bold" />
              </IconButton>
            </Flex>
          </header>
          <Body>
            <Grid className="gap-4 text-xl mt-8 place-items-center">
              <img src="./img/logo-xl.png" alt="" />
              <div>Dashboard</div>
              {/* <div>Roadmap</div> */}
              <div>Tokenomic</div>
              {/* <div>Terms</div> */}
              {/* <div>Support</div> */}
              <div className="w-[80%] h-[1px] bg-primary-800/40"></div>
              <Flex className="gap-2">
                <a href="https://t.me/PepoleonPortal" target="_blank">
                  <IconButton>
                    <TelegramLogo size={24} weight="fill" />
                  </IconButton>
                </a>
                <a href="https://twitter.com/pepoleononsol" target="_blank">
                  <IconButton>
                    <TwitterLogo size={24} weight="fill" />
                  </IconButton>
                </a>
              </Flex>
            </Grid>
          </Body>
        </Container>
      </div>
    </>
  );
};
export default Menu;
