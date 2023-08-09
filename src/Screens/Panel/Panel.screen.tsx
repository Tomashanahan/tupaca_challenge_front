import {
  Drawer,
  DrawerContent,
  Flex,
  Grid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation } from "react-router";

import { SidebarContent } from "./Components";

import { ROUTES } from "../../routes";
import { LinkItems } from "./interfaces";

interface PanelProps {
  children: React.ReactNode;
}

export default function Panel({ children }: PanelProps) {
  const { pathname } = useLocation();
  const { isOpen: isDrawerContentOpen } = useDisclosure();

  const linkItems: LinkItems[] = [
    {
      name: "Dashboard",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.48334 5.25942C6.33891 5.38732 5.42286 6.29057 5.29045 7.42268C4.93476 10.4638 4.93476 13.5361 5.29045 16.5772C5.42286 17.7093 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7093 18.7095 16.5772C18.9651 14.3921 19.037 12.1909 18.9253 9.99668C18.9224 9.94002 18.9436 9.88475 18.9837 9.84463L20.0225 8.80585C20.1427 8.68562 20.3482 8.7608 20.3609 8.93036C20.557 11.5353 20.5031 14.1543 20.1994 16.7515C19.9845 18.5884 18.5096 20.0271 16.6832 20.2312C13.5957 20.5763 10.4043 20.5763 7.31673 20.2312C5.49035 20.0271 4.01545 18.5884 3.8006 16.7515C3.43137 13.5945 3.43137 10.4053 3.8006 7.24843C4.01545 5.41146 5.49035 3.97282 7.31673 3.7687C10.4043 3.42362 13.5957 3.42362 16.6832 3.7687C17.3265 3.84059 17.9261 4.06562 18.4425 4.40725C18.5441 4.47448 18.5542 4.61732 18.468 4.70346L17.6652 5.50635C17.5995 5.57202 17.4976 5.58307 17.4158 5.5392C17.1423 5.39271 16.8385 5.29539 16.5166 5.25942C13.5398 4.92671 10.4602 4.92671 7.48334 5.25942Z"
            fill="black"
          />
          <path
            d="M21.0303 6.03028C21.3232 5.73738 21.3232 5.26251 21.0303 4.96962C20.7374 4.67672 20.2625 4.67672 19.9696 4.96962L11.5 13.4393L9.0303 10.9696C8.73741 10.6767 8.26253 10.6767 7.96964 10.9696C7.67675 11.2625 7.67675 11.7374 7.96964 12.0303L10.9696 15.0303C11.2625 15.3232 11.7374 15.3232 12.0303 15.0303L21.0303 6.03028Z"
            fill="black"
          />
        </svg>
      ),
      routeName: ROUTES.USER.PANEL,
      isCurrentPage: pathname === ROUTES.USER.PANEL,
    },
  ];

  const { onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        // w={"100%"}
        w={"100vw"}
        minH="100vh"
        pos={'relative'}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <SidebarContent linkItems={linkItems} onClose={() => onClose} />
        <Drawer
          autoFocus={false}
          isOpen={isDrawerContentOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent linkItems={linkItems} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Grid
          p={0}
          pb={"40px"}
          ml={{ base: 0, xl: "250px" }}
          templateColumns="1fr auto"
          w="100%"
        >
          {children}
        </Grid>
      </Flex>
    </>
  );
}